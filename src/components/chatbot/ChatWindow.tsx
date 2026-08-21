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

const CHAT_STORAGE_KEY = "chathu-concierge-messages";

const LEAD_STORAGE_KEY = "chathu-concierge-lead";

const LEAD_SUBMITTED_STORAGE_KEY = "chathu-concierge-lead-submitted";

const createWelcomeMessage = (): ChatMessage => ({
  id: crypto.randomUUID(),
  role: "assistant",
  content:
    "Welcome! 💍 I'm Chathu's AI Assistant. I'd be delighted to help with your wedding plans. What would you like to know?",
});

export default function ChatWindow({ isOpen }: Props) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [leadData, setLeadData] = useState<ChatLeadData>(emptyLeadData);

  const [leadSending, setLeadSending] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [storageLoaded, setStorageLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedMessages = sessionStorage.getItem(CHAT_STORAGE_KEY);

      const storedLeadData = sessionStorage.getItem(LEAD_STORAGE_KEY);

      const storedLeadSubmitted = sessionStorage.getItem(
        LEAD_SUBMITTED_STORAGE_KEY,
      );

      if (storedMessages) {
        const parsedMessages = JSON.parse(storedMessages) as ChatMessage[];

        if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
          setMessages(parsedMessages);
        } else {
          setMessages([createWelcomeMessage()]);
        }
      } else {
        setMessages([createWelcomeMessage()]);
      }

      if (storedLeadData) {
        const parsedLeadData = JSON.parse(storedLeadData) as ChatLeadData;

        setLeadData({
          ...emptyLeadData,
          ...parsedLeadData,
        });
      }

      if (storedLeadSubmitted === "true") {
        setLeadSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to restore chatbot session:", error);

      setMessages([createWelcomeMessage()]);
      setLeadData(emptyLeadData);
      setLeadSubmitted(false);
    } finally {
      setStorageLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!storageLoaded || messages.length === 0) {
      return;
    }

    sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
  }, [messages, storageLoaded]);

  useEffect(() => {
    if (!storageLoaded) {
      return;
    }

    sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(leadData));
  }, [leadData, storageLoaded]);

  useEffect(() => {
    if (!storageLoaded) {
      return;
    }

    sessionStorage.setItem(LEAD_SUBMITTED_STORAGE_KEY, String(leadSubmitted));
  }, [leadSubmitted, storageLoaded]);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container || !storageLoaded) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, storageLoaded]);

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
          messages: updatedMessages.slice(-6),
          leadData,
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
          coupleName: extractedLeadData.coupleName || current.coupleName,

          weddingDate: extractedLeadData.weddingDate || current.weddingDate,

          venue: extractedLeadData.venue || current.venue,

          service: extractedLeadData.service || current.service,

          weddingType: extractedLeadData.weddingType || current.weddingType,

          guestCount: extractedLeadData.guestCount || current.guestCount,

          contactNumber:
            extractedLeadData.contactNumber || current.contactNumber,

          email: extractedLeadData.email || current.email,
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
  const sendLeadToChathu = async () => {
    if (
      leadSending ||
      leadSubmitted ||
      !leadData.coupleName ||
      !leadData.contactNumber
    ) {
      return;
    }

    setLeadSending(true);

    try {
      const conversation = messages
        .map((message) => {
          const speaker =
            message.role === "assistant" ? "Chathu Concierge" : "Customer";

          return `${speaker}: ${message.content}`;
        })
        .join("\n\n");

      const response = await fetch("/api/chat-lead", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...leadData,
          conversation,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Your details could not be sent right now.",
        );
      }

      setLeadSubmitted(true);

      const successMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Perfect! ❤️ I've shared your wedding details with Chathu. She will personally contact you to discuss your wedding and consultation.",
      };

      setMessages((current) => [...current, successMessage]);
    } catch (error) {
      console.error("Chat lead submission failed:", error);

      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "I couldn't send your details to Chathu right now. Please try again in a moment.",
      };

      setMessages((current) => [...current, errorMessage]);
    } finally {
      setLeadSending(false);
    }
  };
  const startNewChat = () => {
    const confirmed = window.confirm(
      "Start a new chat? Your current conversation and wedding details will be cleared.",
    );

    if (!confirmed) {
      return;
    }

    sessionStorage.removeItem(CHAT_STORAGE_KEY);
    sessionStorage.removeItem(LEAD_STORAGE_KEY);
    sessionStorage.removeItem(LEAD_SUBMITTED_STORAGE_KEY);

    setMessages([createWelcomeMessage()]);
    setLeadData(emptyLeadData);
    setLeadSubmitted(false);
    setLeadSending(false);
    setInput("");
  };
  const leadDetails = [
  {
    key: "coupleName",
    label: "Couple Names",
    value: leadData.coupleName,
  },
  {
    key: "weddingDate",
    label: "Wedding Date",
    value: leadData.weddingDate,
  },
  {
    key: "venue",
    label: "Venue",
    value: leadData.venue,
  },
  {
    key: "service",
    label: "Service",
    value: leadData.service,
  },
  {
    key: "weddingType",
    label: "Wedding Type",
    value: leadData.weddingType,
  },
  {
    key: "guestCount",
    label: "Guest Count",
    value: leadData.guestCount,
  },
  {
    key: "contactNumber",
    label: "Contact Number",
    value: leadData.contactNumber,
  },
];

const completedLeadDetails = leadDetails.filter(
  (detail) => detail.value.trim() !== "",
);

const missingLeadDetails = leadDetails.filter(
  (detail) => detail.value.trim() === "",
);

const leadCompleteness = Math.round(
  (completedLeadDetails.length / leadDetails.length) * 100,
);
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

              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-lg text-[#2f2927] sm:text-xl">
                  Chathu Concierge
                </h2>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="text-xs text-[#8d817b]">Online</span>
                </div>
              </div>

              <button
                type="button"
                onClick={startNewChat}
                disabled={loading || leadSending}
                className="
    shrink-0
    rounded-lg
    border
    border-[#eadfd8]
    px-2.5
    py-2
    text-[11px]
    font-medium
    text-[#766d69]
    transition
    hover:border-[#a87868]
    hover:bg-[#fff8f4]
    hover:text-[#a87868]
    disabled:cursor-not-allowed
    disabled:opacity-40
    sm:px-3
    sm:text-xs
  "
              >
                New Chat
              </button>
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

              {leadData.coupleName &&
                leadData.contactNumber &&
                !leadSubmitted && (
                  <div className="rounded-2xl border border-[#ead8d0] bg-[#fff8f4] p-4">
                    <p className="text-sm font-semibold text-[#2f2927]">
                      Would you like Chathu to personally contact you?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#766d69]">
                      Please review the wedding details you've shared before
                      sending them to Chathu.
                    </p>

                    <div className="mt-4">
  <div className="mb-1.5 flex items-center justify-between">
    <span className="text-[11px] font-medium text-[#766d69]">
      Wedding details
    </span>

    <span className="text-[11px] font-semibold text-[#a87868]">
      {leadCompleteness}% complete
    </span>
  </div>

  <div className="h-1.5 overflow-hidden rounded-full bg-[#eadfd9]">
    <div
      className="h-full rounded-full bg-[#a87868] transition-all duration-500"
      style={{
        width: `${leadCompleteness}%`,
      }}
    />
  </div>
</div>

                    {/* Wedding details summary */}

                    <div className="mt-4 overflow-hidden rounded-xl border border-[#eadfd9] bg-white">
                      <div className="border-b border-[#eee5e0] px-3 py-2.5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a87868]">
                          Your Wedding Details 💍
                        </p>
                      </div>

                      <div className="divide-y divide-[#f0e8e4] px-3">
                        <div className="flex items-start justify-between gap-4 py-2.5">
                          <span className="shrink-0 text-xs text-[#8d817b]">
                            Couple
                          </span>

                          <span className="text-right text-xs font-medium text-[#2f2927]">
                            {leadData.coupleName}
                          </span>
                        </div>

                        {leadData.weddingDate && (
                          <div className="flex items-start justify-between gap-4 py-2.5">
                            <span className="shrink-0 text-xs text-[#8d817b]">
                              Wedding Date
                            </span>

                            <span className="text-right text-xs font-medium text-[#2f2927]">
                              {leadData.weddingDate}
                            </span>
                          </div>
                        )}

                        {leadData.venue && (
                          <div className="flex items-start justify-between gap-4 py-2.5">
                            <span className="shrink-0 text-xs text-[#8d817b]">
                              Venue
                            </span>

                            <span className="text-right text-xs font-medium text-[#2f2927]">
                              {leadData.venue}
                            </span>
                          </div>
                        )}

                        {leadData.guestCount && (
                          <div className="flex items-start justify-between gap-4 py-2.5">
                            <span className="shrink-0 text-xs text-[#8d817b]">
                              Guests
                            </span>

                            <span className="text-right text-xs font-medium text-[#2f2927]">
                              {leadData.guestCount}
                            </span>
                          </div>
                        )}

                        {leadData.weddingType && (
                          <div className="flex items-start justify-between gap-4 py-2.5">
                            <span className="shrink-0 text-xs text-[#8d817b]">
                              Wedding Type
                            </span>

                            <span className="text-right text-xs font-medium text-[#2f2927]">
                              {leadData.weddingType}
                            </span>
                          </div>
                        )}

                        {leadData.service && (
                          <div className="flex items-start justify-between gap-4 py-2.5">
                            <span className="shrink-0 text-xs text-[#8d817b]">
                              Service
                            </span>

                            <span className="text-right text-xs font-medium text-[#2f2927]">
                              {leadData.service}
                            </span>
                          </div>
                        )}

                        <div className="flex items-start justify-between gap-4 py-2.5">
                          <span className="shrink-0 text-xs text-[#8d817b]">
                            Contact
                          </span>

                          <span className="text-right text-xs font-medium text-[#2f2927]">
                            {leadData.contactNumber}
                          </span>
                        </div>

                        {leadData.email && (
                          <div className="flex items-start justify-between gap-4 py-2.5">
                            <span className="shrink-0 text-xs text-[#8d817b]">
                              Email
                            </span>

                            <span className="break-all text-right text-xs font-medium text-[#2f2927]">
                              {leadData.email}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {missingLeadDetails.length > 0 && (
  <div className="mt-3 rounded-xl border border-[#eadfd9] bg-white px-3 py-3">
    <p className="text-[11px] font-semibold text-[#766d69]">
      Still not provided
    </p>

    <div className="mt-2 flex flex-wrap gap-1.5">
      {missingLeadDetails.map((detail) => (
        <span
          key={detail.key}
          className="
            rounded-full
            bg-[#f6efeb]
            px-2.5
            py-1
            text-[10px]
            font-medium
            text-[#8d817b]
          "
        >
          {detail.label}
        </span>
      ))}
    </div>

    <p className="mt-2 text-[10px] leading-4 text-[#9a8e88]">
      That's okay — you can still send your details to Chathu.
    </p>
  </div>
)}

                    <p className="mt-3 text-[11px] leading-5 text-[#8d817b]">
                      By confirming, these details will be shared with Chathu so
                      she can personally contact you regarding your wedding.
                    </p>

                    <button
                      type="button"
                      onClick={sendLeadToChathu}
                      disabled={leadSending}
                      className="
          mt-3
          w-full
          rounded-xl
          bg-[#a87868]
          px-4
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:bg-[#936856]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
                    >
                      {leadSending ? "Sending..." : "Confirm & Send to Chathu"}
                    </button>
                  </div>
                )}

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
