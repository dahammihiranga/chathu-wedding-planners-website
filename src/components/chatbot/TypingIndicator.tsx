"use client";

import { motion } from "motion/react";

export default function TypingIndicator() {
  return (
    <div className="flex">
      <div className="rounded-3xl bg-[#f8f3f0] px-5 py-4">
        <div className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: dot * 0.15,
              }}
              className="h-2 w-2 rounded-full bg-[#a87868]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}