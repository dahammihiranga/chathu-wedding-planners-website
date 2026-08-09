"use client";

import { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <ChatButton
        isOpen={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      />
    </>
  );
}