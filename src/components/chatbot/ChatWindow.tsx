"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

import type { ChatApiResponse, ChatLeadData, ChatMessage } from "@/types/chat";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const emptyLeadData: ChatLeadData = {
  coupleName: "",
  weddingDate: "",
  venue: "",
  service: "",
  weddingType: "",
  guestCount: "",
  contactNumber: "",
  email: "",
};

export default function ChatWindow({ isOpen }: Props) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [leadData, setLeadData] = useState<ChatLeadData>(emptyLeadData);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Welcome! 💍 I'm Chathu's AI Assistant. I'd be delighted to help with your wedding plans. What would you like to know?",
    },
  ]);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    console.log("Chathu Concierge Lead Data:", leadData);
  }, [leadData]);

  const sendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage ?? input;

    if (!messageToSend.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: messageToSend,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    if (!customMessage) {
      setInput("");
    }

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = (await response.json()) as ChatApiResponse;

      if (!response.ok) {
        throw new Error(data.reply);
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((current) => [...current, assistantMessage]);

      const extractedLeadData = data.leadData;

if (extractedLeadData) {
  setLeadData((current) => ({
    coupleName:
      extractedLeadData.coupleName ||
      current.coupleName,

    weddingDate:
      extractedLeadData.weddingDate ||
      current.weddingDate,

    venue:
      extractedLeadData.venue ||
      current.venue,

    service:
      extractedLeadData.service ||
      current.service,

    weddingType:
      extractedLeadData.weddingType ||
      current.weddingType,

    guestCount:
      extractedLeadData.guestCount ||
      current.guestCount,

    contactNumber:
      extractedLeadData.contactNumber ||
      current.contactNumber,

    email:
      extractedLeadData.email ||
      current.email,
  }));
}
    } catch (error) {
      console.error("Chat request failed:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Sorry, I couldn't respond right now. Please try again shortly.";

      const assistantErrorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: errorMessage,
      };

      setMessages((current) => [...current, assistantErrorMessage]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          className="
  fixed
  bottom-20
  left-3
  right-3
  z-[60]
  flex
  h-[calc(100dvh-6rem)]
  max-h-[720px]
  min-h-0
  flex-col
  overflow-hidden
  rounded-2xl
  bg-white
  shadow-[0_30px_80px_rgba(0,0,0,0.18)]

  sm:bottom-44
  sm:left-auto
  sm:right-7
  sm:h-[calc(100dvh-13rem)]
  sm:w-[380px]
"
        >
          <div className="border-b border-[#efe6e1] bg-white">
            <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4">
              <div
                className="
      flex
      h-10
w-10
sm:h-11
sm:w-11
      items-center
      justify-center
      rounded-full
      bg-[#a87868]
      text-lg
      text-white
    "
              >
                💍
              </div>

              <div>
                <h2 className="font-serif text-lg text-[#2f2927] sm:text-xl">
                  Chathu Concierge
                </h2>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="text-xs text-[#8d817b]">Online</span>
                </div>
              </div>
            </div>

            <div className="px-4 pb-3 sm:px-5 sm:pb-4">
              <p className="text-xs leading-5 text-[#6f6560] sm:text-sm sm:leading-6">
                Congratulations on your upcoming wedding ❤️
                <br />
                I'm here to help you plan your dream wedding.
              </p>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <div className="border-b border-[#efe6e1] px-3 py-2.5 sm:px-4 sm:py-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() =>
                    sendMessage(
                      "I'd like to know about your wedding planning packages.",
                    )
                  }
                  className="
  flex
  items-center
  gap-2
  rounded-lg
  border
  border-[#eadfd8]
  px-2.5
py-2
sm:px-3
sm:py-2.5
  text-left
  transition
  hover:bg-[#faf7f5]
"
                >
                  <span className="text-base">💍</span>
                  <span className="text-xs font-medium sm:text-sm">
                    Packages
                  </span>
                </button>

                <button
                  onClick={() =>
                    sendMessage("I would like to book a consultation.")
                  }
                  className="
  flex
  items-center
  gap-2
  rounded-lg
  border
  border-[#eadfd8]
  px-2.5
py-2
sm:px-3
sm:py-2.5
  text-left
  transition
  hover:bg-[#faf7f5]
"
                >
                  <span className="text-base">📅</span>
                  <span className="text-xs font-medium sm:text-sm">
                    Consultation
                  </span>
                </button>

                <button
                  onClick={() =>
                    sendMessage(
                      "Can you explain your pricing and how quotations work?",
                    )
                  }
                  className="
  flex
  items-center
  gap-2
  rounded-lg
  border
  border-[#eadfd8]
  px-2.5
py-2
sm:px-3
sm:py-2.5
  text-left
  transition
  hover:bg-[#faf7f5]
"
                >
                  <span className="text-base">💰</span>
                  <span className="text-xs font-medium sm:text-sm">
                    Pricing
                  </span>
                </button>

                <button
                  onClick={() =>
                    sendMessage(
                      "Can you give me wedding planning ideas and suggestions?",
                    )
                  }
                  className="
  flex
  items-center
  gap-2
  rounded-lg
  border
  border-[#eadfd8]
  px-2.5
py-2
sm:px-3
sm:py-2.5
  text-left
  transition
  hover:bg-[#faf7f5]
"
                >
                  <span className="text-base">💒</span>
                  <span className="text-xs font-medium sm:text-sm">
                    Wedding Ideas
                  </span>
                </button>
              </div>
            </div>

            <div
              ref={messagesContainerRef}
              className="
    min-h-0
    flex-1
    overflow-y-auto
    overscroll-contain
    space-y-4
    bg-[#fcfbfa]
    p-3
    sm:p-4
  "
            >
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}

              {loading && <TypingIndicator />}
            </div>

            {/* Input */}

            <div className="shrink-0 border-t border-[#eee5e0] bg-white p-2.5 sm:p-3">
              <div className="items-end flex gap-3">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void sendMessage();
                    }
                  }}
                  placeholder="Ask about your wedding plans..."
                  className="
        min-w-0
        grow
        max-h-32
        resize-none
        overflow-y-auto
        rounded-xl
        border
        border-[#e8ddd8]
        px-3
        py-2.5
        outline-none
        transition
        focus:border-[#a87868]
        "
                />

                <button
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  className="
  flex
  h-11
  min-w-[88px]
  items-center
  justify-center
  rounded-xl
  bg-[#a87868]
  px-5
  text-sm
  font-medium
  text-white
  transition
  hover:bg-[#936856]
  disabled:opacity-50
  sm:min-w-[96px]
  sm:px-6
"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
