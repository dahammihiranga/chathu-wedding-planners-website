"use client";

import clsx from "clsx";
import ReactMarkdown from "react-markdown";

import type { ChatMessage } from "@/types/chat";

type Props = {
  message: ChatMessage;
};

export default function MessageBubble({ message }: Props) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={clsx(
        "flex w-full",
        isAssistant ? "justify-start" : "justify-end",
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
        {isAssistant ? (
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,

              strong: ({ children }) => (
                <strong className="font-semibold text-[#2f2927]">
                  {children}
                </strong>
              ),

              ul: ({ children }) => (
                <ul className="my-3 list-disc space-y-1 pl-5">{children}</ul>
              ),

              ol: ({ children }) => (
                <ol className="my-3 list-decimal space-y-1 pl-5">{children}</ol>
              ),

              li: ({ children }) => <li className="pl-1">{children}</li>,

              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#a87868] underline underline-offset-2"
                >
                  {children}
                </a>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        ) : (
          message.content
        )}
      </div>
    </div>
  );
}
