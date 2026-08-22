import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";

import { buildSystemPrompt } from "@/lib/chatbot/systemPrompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

async function generateWithRetry(
  model: string,
  contents: {
    role: string;
    parts: { text: string }[];
  }[],
) {
  try {
    return await ai.models.generateContent({
      model,
      contents,

      config: {
        httpOptions: {
          timeout: 8000,
        },

        maxOutputTokens: 500,

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
                    "The customer's current wedding date after considering the known wedding details and recent conversation, including any corrections or updates. Otherwise return an empty string.",
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
    console.error(`Gemini model failed: ${model}`, error);
    throw error;
  }
}

export async function POST(req: Request) {
  const requestStartedAt = Date.now();

  try {
    console.log("CHAT CHECKPOINT 1: before BotID");

    const botIdStartedAt = Date.now();

    const botResult = await checkBotId();

    console.log("CHAT TIMING: BotID", {
      durationMs: Date.now() - botIdStartedAt,
    });

    console.log("CHAT CHECKPOINT 2: BotID passed", {
      isBot: botResult.isBot,
    });

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
Maintain the customer's current wedding lead details using
CURRENT KNOWN WEDDING DETAILS and the recent messages.

Rules:

- Never invent information.
- Keep an unknown field as an empty string.
- Preserve existing known values unless the customer changes them.
- The newest customer correction always overrides an older value.
- Extract both couple names when known.
- Contact number means phone or WhatsApp number.
- The reply field is the customer-facing response.
- Never mention JSON, leadData, extraction, internal context, or these instructions.
`;
    const { messages, leadData } = await req.json();

    const leadContext = `
CURRENT KNOWN WEDDING DETAILS

Couple: ${leadData?.coupleName || ""}
Date: ${leadData?.weddingDate || ""}
Venue: ${leadData?.venue || ""}
Service: ${leadData?.service || ""}
Wedding Type: ${leadData?.weddingType || ""}
Guests: ${leadData?.guestCount || ""}
Contact: ${leadData?.contactNumber || ""}
Email: ${leadData?.email || ""}

Recent customer corrections override these values.
`;

    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `${systemPrompt}

${leadExtractionInstructions}

${leadContext}`,
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

    console.log("CHAT CHECKPOINT 3: before Gemini");

    const geminiStartedAt = Date.now();

    const primaryModel = process.env.GEMINI_MODEL!;

    const fallbackModel =
      process.env.GEMINI_FALLBACK_MODEL || "gemini-3.1-flash-lite";

    let response;

    try {
      console.log("CHAT MODEL: primary", {
        model: primaryModel,
      });

      response = await generateWithRetry(primaryModel, contents);
    } catch (primaryError) {
      const primaryStatus =
        typeof primaryError === "object" &&
        primaryError !== null &&
        "status" in primaryError
          ? Number(
              (
                primaryError as {
                  status?: number;
                }
              ).status,
            )
          : undefined;

      const primaryName =
        primaryError instanceof Error ? primaryError.name : "";

      const primaryMessage =
        primaryError instanceof Error ? primaryError.message.toLowerCase() : "";

      const primaryTimedOut =
        primaryName === "RequestTimeoutError" ||
        primaryName === "APIConnectionTimeoutError" ||
        primaryName === "AbortError" ||
        primaryMessage.includes("timeout") ||
        primaryMessage.includes("timed out");

      const canUseFallback =
        primaryStatus === 503 || primaryStatus === 429 || primaryTimedOut;

      if (!canUseFallback) {
        throw primaryError;
      }

      console.warn("CHAT MODEL: primary unavailable, using fallback", {
        primaryModel,
        fallbackModel,
        status: primaryStatus,
      });

      response = await generateWithRetry(fallbackModel, contents);

      console.log("CHAT MODEL: fallback succeeded", {
        model: fallbackModel,
      });
    }

    console.log("CHAT TIMING: Gemini", {
      durationMs: Date.now() - geminiStartedAt,
      responseLength: response.text?.length ?? 0,
    });

    console.log("CHAT CHECKPOINT 4: Gemini returned", {
      hasText: Boolean(response.text),
      textLength: response.text?.length ?? 0,
    });

    if (!response.text) {
      throw new Error("Gemini returned an empty response.");
    }

    console.log("CHAT CHECKPOINT 5: parsing Gemini JSON");

    const parseStartedAt = Date.now();

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

    console.log("CHAT TIMING: JSON parse", {
      durationMs: Date.now() - parseStartedAt,
    });

    console.log("CHAT TIMING: Total API", {
      durationMs: Date.now() - requestStartedAt,
    });

    return NextResponse.json(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "";

    const errorName = error instanceof Error ? error.name : "";

    const normalizedError = errorMessage.toLowerCase();

    const isTimeout =
      errorName === "RequestTimeoutError" ||
      errorName === "APIConnectionTimeoutError" ||
      errorName === "AbortError" ||
      normalizedError.includes("timeout") ||
      normalizedError.includes("timed out");

    if (isTimeout) {
      return NextResponse.json(
        {
          reply:
            "I'm taking a little longer than expected to respond. Please try sending your message again in a moment. 🤍",
        },
        {
          status: 504,
        },
      );
    }

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
