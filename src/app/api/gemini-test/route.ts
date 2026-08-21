import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function GET() {
  const startedAt = Date.now();

  try {
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL!,
      contents: "Reply with only the word Hello.",

      config: {
        httpOptions: {
          timeout: 15000,
        },

        maxOutputTokens: 20,
      },
    });

    return NextResponse.json({
      success: true,
      response: response.text,
      durationMs: Date.now() - startedAt,
      model: process.env.GEMINI_MODEL,
    });
  } catch (error) {
    console.error("Gemini isolated test failed:", error);

    return NextResponse.json(
      {
        success: false,
        durationMs: Date.now() - startedAt,
        model: process.env.GEMINI_MODEL,

        errorName:
          error instanceof Error
            ? error.name
            : "unknown",

        errorMessage:
          error instanceof Error
            ? error.message
            : String(error),

        errorType:
          error?.constructor?.name ?? "unknown",
      },
      {
        status: 500,
      },
    );
  }
}