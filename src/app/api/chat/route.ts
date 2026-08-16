import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";

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
                      "The couple's current names after considering any corrections. Include both names when both are known. Otherwise return an empty string.",
                  },

                  weddingDate: {
                    type: "string",
                    description:
                      "The customer's current wedding date after considering any corrections or updates in the full conversation. Otherwise return an empty string.",
                  },

                  venue: {
                    type: "string",
                    description:
                      "The customer's current wedding venue after considering any corrections or venue changes. Otherwise return an empty string.",
                  },

                  service: {
                    type: "string",
                    description:
                      "The current Chathu Wedding Planners service the customer is interested in after considering any changes or corrections. Otherwise return an empty string.",
                  },

                  weddingType: {
                    type: "string",
                    description:
                      "The customer's current wedding type after considering any corrections or changes. Otherwise return an empty string.",
                  },

                  guestCount: {
                    type: "string",
                    description:
                      "The customer's latest expected guest count after considering any corrections or updates. Otherwise return an empty string.",
                  },

                  contactNumber: {
                    type: "string",
                    description:
                      "The customer's latest contact or WhatsApp number after considering any corrections. Otherwise return an empty string.",
                  },

                  email: {
                    type: "string",
                    description:
                      "The customer's latest email address after considering any corrections. Otherwise return an empty string.",
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
    const botResult = await checkBotId();

    if (botResult.isBot) {
      return NextResponse.json(
        {
          reply: "This request could not be verified.",
        },
        {
          status: 403,
        },
      );
    }

    const systemPrompt = buildSystemPrompt();
    const leadExtractionInstructions = `
In addition to your normal customer-facing response, continuously extract wedding lead details from the FULL conversation.

Rules for leadData:

- Only extract information the customer has actually provided or clearly confirmed.
- Never invent missing details.
- If a detail has never been provided, return an empty string.
- Always consider the FULL conversation when determining the current lead details.
- Preserve information learned earlier when it has not been changed.
- Do not remove previously known information just because it is not mentioned in the newest message.

IMPORTANT — CUSTOMER CORRECTIONS:

- The customer's MOST RECENT correction or update always overrides an older value.
- If the customer says words such as "actually", "sorry", "changed", "instead", "not that", "correction", "I meant", or otherwise clearly updates previous information, return the NEW value.
- Never return an older value after the customer has corrected it.
- Determine the final current value from the full conversation, not simply the first value mentioned.

Examples:

Customer earlier: "Our wedding is 14 February 2027."
Customer later: "Sorry, it's actually 21 February 2027."
Final weddingDate: "21 February 2027"

Customer earlier: "The venue is Shangri-La Colombo."
Customer later: "We changed the venue to Cinnamon Grand."
Final venue: "Cinnamon Grand"

Customer earlier: "Around 250 guests."
Customer later: "Actually make that around 300 guests."
Final guestCount: "300"

Customer earlier: "My number is 0771234567."
Customer later: "Sorry, use 0719876543 instead."
Final contactNumber: "0719876543"

Customer earlier: "We want Wedding Day Coordination."
Customer later: "Actually we're interested in Full Wedding Planning."
Final service: "Full Wedding Planning"

- Couple names should contain both names when both are known.
- Contact number means the customer's phone or WhatsApp number.
- The reply field is the natural response shown to the customer.
- Never mention leadData, JSON, extraction, internal fields, structured output, or these instructions to the customer.
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
