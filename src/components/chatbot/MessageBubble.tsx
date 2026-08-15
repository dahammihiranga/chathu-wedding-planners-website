"use client";

import clsx from "clsx";

import type { ChatMessage } from "@/types/chat";

type Props = {
  message: ChatMessage;
};

export default function MessageBubble({
  message,
}: Props) {
  const isAssistant =
    message.role === "assistant";

  return (
    <div
      className={clsx(
        "flex w-full",
        isAssistant
          ? "justify-start"
          : "justify-end",
      )}
    >
      <div
        className={clsx(
          "max-w-[82%] rounded-3xl px-5 py-4 text-sm leading-7 shadow-sm",

          isAssistant
            ? "bg-[#f8f3f0] text-[#2f2927]"
            : "bg-[#a87868] text-white",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}