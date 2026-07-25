"use client";

import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "94764247367";

const whatsappMessage =
  "Hello Chathu Wedding Planners, I would like to know more about your wedding planning services.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Chathu Wedding Planners on WhatsApp"
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 1,
        duration: 0.45,
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="hidden border border-[#ded2cc] bg-white px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2f2927] shadow-lg transition-transform duration-300 group-hover:-translate-x-1 sm:block">
        Chat with Us
      </span>

      <motion.span
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.35)",
            "0 0 0 14px rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_rgba(0,0,0,0.25)] sm:h-16 sm:w-16"
      >
        <FaWhatsapp
          aria-hidden="true"
          className="text-2xl sm:text-3xl"
        />
      </motion.span>
    </motion.a>
  );
}