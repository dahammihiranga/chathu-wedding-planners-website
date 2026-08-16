"use client";

import { MessageCircle, X } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export default function ChatButton({ isOpen, onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`
  fixed
  z-[70]
  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-full
  bg-[#a87868]
  text-white
  shadow-2xl
  sm:h-16
  sm:w-16
  sm:bottom-24
  sm:right-7

  ${isOpen ? "bottom-5 right-24" : "bottom-24 right-5"}
`}
    >
      {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
    </motion.button>
  );
}
