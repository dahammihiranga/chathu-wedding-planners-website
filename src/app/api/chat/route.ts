import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/chatbot/systemPrompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithRetry(
  contents: {
    role: string;
    parts: { text: string }[];
  }[],
) {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await ai.models.generateContent({
        model: process.env.GEMINI_MODEL!,
        contents,
      });
    } catch (error) {
      const status =
        typeof error === "object" &&
        error !== null &&
        "status" in error
          ? Number(
              (error as { status?: number }).status,
            )
          : undefined;

      const shouldRetry =
        status === 503 || status === 429;

      if (!shouldRetry || attempt === maxAttempts) {
        throw error;
      }

      const delay = 800 * 2 ** (attempt - 1);

      console.warn(
        `Gemini temporarily unavailable. Retry ${attempt}/${maxAttempts} in ${delay}ms.`,
      );

      await sleep(delay);
    }
  }

  throw new Error("Gemini request failed after retries.");
}

export async function POST(req: Request) {
  try {
    const systemPrompt = buildSystemPrompt();
    const { messages } = await req.json();

    const contents = [
  {
    role: "user",
    parts: [
      {
        text: systemPrompt,
      },
    ],
  },

  ...messages.map(
    (message: {
      role: string;
      content: string;
    }) => ({
      role:
        message.role === "assistant"
          ? "model"
          : "user",

      parts: [
        {
          text: message.content,
        },
      ],
    }),
  ),
];

const response =
  await generateWithRetry(contents);

    return NextResponse.json({
      reply: response.text ?? "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
  console.error("Chat API error:", error);

  const status =
    typeof error === "object" &&
    error !== null &&
    "status" in error
      ? Number(
          (error as { status?: number }).status,
        )
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
      reply:
        "Sorry, I couldn't respond right now. Please try again shortly.",
    },
    {
      status: 500,
    },
  );
}
}
