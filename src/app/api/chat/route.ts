import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/chatbot/systemPrompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithRetry(
  contents: {
    role: string;
    parts: { text: string }[];
  }[],
) {
  const maxAttempts = 4;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await ai.models.generateContent({
        model: process.env.GEMINI_MODEL!,
        contents,

        config: {
          responseMimeType: "application/json",

          responseSchema: {
            type: "object",

            properties: {
              reply: {
                type: "string",
                description:
                  "The natural conversational reply that will be shown to the customer. Markdown is allowed.",
              },

              leadData: {
                type: "object",

                properties: {
                  coupleName: {
                    type: "string",
                    description:
                      "Bride and groom names if the customer has provided them. Otherwise return an empty string.",
                  },

                  weddingDate: {
                    type: "string",
                    description:
                      "Wedding date mentioned by the customer. Preserve the customer's wording if necessary. Otherwise empty string.",
                  },

                  venue: {
                    type: "string",
                    description:
                      "Hotel or wedding venue mentioned by the customer. Otherwise empty string.",
                  },

                  service: {
                    type: "string",
                    description:
                      "Chathu Wedding Planners service the customer is interested in or has agreed is suitable. Otherwise empty string.",
                  },

                  weddingType: {
                    type: "string",
                    description:
                      "Wedding type such as Poruwa, Church, Hindu, Muslim or Reception Only. Otherwise empty string.",
                  },

                  guestCount: {
                    type: "string",
                    description:
                      "Expected guest count if provided. Otherwise empty string.",
                  },

                  contactNumber: {
                    type: "string",
                    description:
                      "Customer's contact or WhatsApp number if provided. Otherwise empty string.",
                  },

                  email: {
                    type: "string",
                    description:
                      "Customer's email address if provided. Otherwise empty string.",
                  },
                },

                required: [
                  "coupleName",
                  "weddingDate",
                  "venue",
                  "service",
                  "weddingType",
                  "guestCount",
                  "contactNumber",
                  "email",
                ],
              },
            },

            required: ["reply", "leadData"],
          },
        },
      });
    } catch (error) {
      const status =
        typeof error === "object" && error !== null && "status" in error
          ? Number((error as { status?: number }).status)
          : undefined;

      const shouldRetry = status === 503 || status === 429;

      if (!shouldRetry || attempt === maxAttempts) {
        throw error;
      }

      const baseDelay = 2000 * 2 ** (attempt - 1);
      const jitter = Math.floor(Math.random() * 1000);
      const delay = baseDelay + jitter;

      console.warn(
        `Gemini rate limited/unavailable. Retry ${attempt}/${maxAttempts} in ${delay}ms.`,
      );

      await sleep(delay);
    }
  }

  throw new Error("Gemini request failed after retries.");
}

export async function POST(req: Request) {
  try {
    const systemPrompt = buildSystemPrompt();
    const leadExtractionInstructions = `
In addition to your normal customer-facing response, continuously extract wedding lead details from the FULL conversation.

Rules for leadData:

- Only extract information the customer has actually provided or clearly confirmed.
- Never invent missing details.
- If a detail has not been provided, return an empty string.
- Preserve information learned earlier in the conversation.
- Do not remove previously known information just because it is not mentioned in the newest message.
- Couple names should contain both names when both are known.
- Contact number means the customer's phone or WhatsApp number.
- The reply field is what the customer sees.
- Never mention leadData, JSON, extraction, internal fields or structured output to the customer.
`;
    const { messages } = await req.json();

    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `${systemPrompt}

${leadExtractionInstructions}`,
          },
        ],
      },

      ...messages.map((message: { role: string; content: string }) => ({
        role: message.role === "assistant" ? "model" : "user",

        parts: [
          {
            text: message.content,
          },
        ],
      })),
    ];

    const response = await generateWithRetry(contents);

    if (!response.text) {
      throw new Error("Gemini returned an empty response.");
    }

    const result = JSON.parse(response.text) as {
      reply: string;

      leadData: {
        coupleName: string;
        weddingDate: string;
        venue: string;
        service: string;
        weddingType: string;
        guestCount: string;
        contactNumber: string;
        email: string;
      };
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Chat API error:", error);

    const status =
      typeof error === "object" && error !== null && "status" in error
        ? Number((error as { status?: number }).status)
        : undefined;

    if (status === 503) {
      return NextResponse.json(
        {
          reply:
            "I'm receiving a lot of requests right now. Please try sending that message again in a moment. 🤍",
        },
        {
          status: 503,
        },
      );
    }

    if (status === 429) {
      return NextResponse.json(
        {
          reply:
            "I've received several requests in a short time. Please wait a moment and try again.",
        },
        {
          status: 429,
        },
      );
    }

    return NextResponse.json(
      {
        reply: "Sorry, I couldn't respond right now. Please try again shortly.",
      },
      {
        status: 500,
      },
    );
  }
}
