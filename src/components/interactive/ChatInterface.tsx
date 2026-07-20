"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send } from "lucide-react";
import type { ChatMessageData } from "@/types";

interface ChatInterfaceProps {
  messages: ChatMessageData[];
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex justify-start"
    >
      <div className="bg-bg-surface border border-white/[0.08] px-4 py-3 rounded-2xl flex items-center gap-1.5">
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
    </motion.div>
  );
}

function Message({ msg }: { msg: ChatMessageData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          msg.role === "user"
            ? "bg-[#00C805]/10 border border-[#00C805]/20 text-white"
            : "bg-bg-surface border border-white/[0.08] text-[#9CA3AF]"
        }`}
      >
        {msg.content}
        {msg.chips && msg.chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {msg.chips.map((chip) => (
              <span
                key={chip}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#00C805]/10 text-[#00C805] border border-[#00C805]/20"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ChatInterface({ messages }: ChatInterfaceProps) {
  const [displayed, setDisplayed] = useState<ChatMessageData[]>(messages.slice(0, 2));
  const [showTyping, setShowTyping] = useState(false);
  const [idx, setIdx] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (idx >= messages.length) {
        setTimeout(() => {
          setDisplayed(messages.slice(0, 2));
          setIdx(2);
        }, 2000);
        return;
      }

      const next = messages[idx];
      if (next.role === "user") {
        setDisplayed((prev) => [...prev, next]);
        setIdx((i) => i + 1);
      } else {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setDisplayed((prev) => [...prev, next]);
          setIdx((i) => i + 1);
        }, 1800);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [idx, messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayed, showTyping]);

  return (
    <div className="relative glass border border-white/[0.08] rounded-[24px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
        <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C805] to-[#00A804] flex items-center justify-center flex-shrink-0">
          <Bot size={18} className="text-black" />
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00C805] border-2 border-bg-surface" />
        </div>
        <div>
          <div className="text-white font-semibold text-sm">VIXAL AI Agent</div>
          <div className="text-[#00C805] text-xs flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C805] animate-pulse" />
            Active — Processing live data
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="p-5 space-y-4 min-h-[340px] max-h-[380px] overflow-y-auto">
        <AnimatePresence initial={false}>
          {displayed.map((msg) => (
            <Message key={msg.id} msg={msg} />
          ))}
          {showTyping && <TypingIndicator key="typing" />}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-surface border border-white/[0.08]">
          <input
            type="text"
            placeholder="Ask about your assets..."
            className="flex-1 bg-transparent text-white text-sm placeholder-[#6B7280] outline-none"
            readOnly
          />
          <button className="w-8 h-8 rounded-lg bg-[#00C805] flex items-center justify-center flex-shrink-0 hover:bg-[#00A804] transition-colors">
            <Send size={14} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
