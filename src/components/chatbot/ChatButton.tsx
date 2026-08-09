"use client";

import { MessageCircle, X } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export default function ChatButton({
  isOpen,
  onClick,
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="
      fixed
      bottom-24
      right-5
      z-[60]
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-full
      bg-[#a87868]
      text-white
      shadow-2xl
      md:right-7
      "
    >
      {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
    </motion.button>
  );
}