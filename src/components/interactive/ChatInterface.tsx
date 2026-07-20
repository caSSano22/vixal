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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: "flex", justifyContent: "flex-start", marginBottom: "16px" }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "12px 18px",
          borderRadius: "18px 18px 18px 4px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
    </motion.div>
  );
}

function Message({ msg }: { msg: ChatMessageData }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          maxWidth: "82%",
          padding: "13px 18px",
          borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          fontSize: "14px",
          lineHeight: "1.65",
          background: isUser
            ? "rgba(0, 200, 5, 0.12)"
            : "rgba(255, 255, 255, 0.035)",
          border: isUser
            ? "1px solid rgba(0, 200, 5, 0.28)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          color: isUser ? "#FFFFFF" : "#D1D5DB",
          boxShadow: isUser
            ? "0 4px 20px rgba(0,200,5,0.12)"
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {msg.content}
        {msg.chips && msg.chips.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginTop: "12px",
            }}
          >
            {msg.chips.map((chip) => (
              <span
                key={chip}
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: "100px",
                  background: "rgba(0, 200, 5, 0.15)",
                  color: "#00FF66",
                  border: "1px solid rgba(0, 200, 5, 0.3)",
                  letterSpacing: "-0.01em",
                }}
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
    }, 2800);

    return () => clearInterval(timer);
  }, [idx, messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayed, showTyping]);

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(145deg, #12141A 0%, #0B0C10 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 20px 60px rgba(0, 0, 0, 0.55)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
          background: "rgba(22, 24, 30, 0.7)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 36,
            height: 36,
            borderRadius: "12px",
            background: "linear-gradient(135deg, #00FF66, #00C805)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 0 16px rgba(0,200,5,0.35)",
          }}
        >
          <Bot size={18} style={{ color: "#000000" }} />
          <div
            style={{
              position: "absolute",
              bottom: -1,
              right: -1,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#00C805",
              border: "2px solid #0B0C10",
            }}
          />
        </div>
        <div>
          <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "14px", letterSpacing: "-0.01em" }}>
            VIXAL AI Agent
          </div>
          <div
            style={{
              color: "#00C805",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 500,
            }}
          >
            <span
              className="pulse-green"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00C805",
                display: "inline-block",
              }}
            />
            Active — Processing live data
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        style={{
          padding: "20px",
          minHeight: "340px",
          maxHeight: "380px",
          overflowY: "auto",
        }}
      >
        <AnimatePresence initial={false}>
          {displayed.map((msg) => (
            <Message key={msg.id} msg={msg} />
          ))}
          {showTyping && <TypingIndicator key="typing" />}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div style={{ padding: "0 20px 20px 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 14px",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <input
            type="text"
            placeholder="Ask about your assets..."
            readOnly
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: "#FFFFFF",
              fontSize: "14px",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          <button
            style={{
              width: 32,
              height: 32,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #00FF66, #00C805)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              boxShadow: "0 0 12px rgba(0,200,5,0.3)",
            }}
          >
            <Send size={14} style={{ color: "#000000" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
