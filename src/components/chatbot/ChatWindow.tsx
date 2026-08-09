"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ChatWindow({ isOpen }: Props) {
  const [message, setMessage] = useState("");

  const [reply, setReply] = useState("");

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setReply(data.reply);

    setLoading(false);
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
          bottom-44
          right-5
          z-[60]
          flex
          h-[650px]
          w-[380px]
          flex-col
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
          "
        >
          <div className="bg-[#2f2927] p-6 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-[#d6bba7]">
              Chathu Wedding Planners
            </p>

            <h2 className="mt-2 font-serif text-3xl">Wedding Concierge</h2>

            <p className="mt-2 text-sm text-white/70">
              Ask me anything about your wedding.
            </p>
          </div>

          <div className="flex-1 p-6">
            <div className="flex h-full flex-col">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="rounded-lg border p-3"
              />

              <button
                onClick={sendMessage}
                className="mt-4 rounded-lg bg-[#a87868] p-3 text-white"
              >
                Send
              </button>

              {loading && <p className="mt-5 text-sm">Thinking...</p>}

              {reply && (
                <div className="mt-5 rounded-lg bg-[#f8f3f0] p-4">{reply}</div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
