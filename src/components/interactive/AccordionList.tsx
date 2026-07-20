"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItemComponent({ item, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true }}
      style={{
        borderBottom: index === 0 ? "none" : "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 0",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: isOpen ? "#FFFFFF" : "#E5E7EB",
            lineHeight: 1.4,
            transition: "color 0.2s",
          }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            flexShrink: 0,
            color: isOpen ? "#00C805" : "#6B7280",
            transition: "color 0.2s",
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: "15px",
                color: "#9CA3AF",
                lineHeight: 1.7,
                paddingBottom: "22px",
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface AccordionListProps {
  items: FAQItem[];
}

export function AccordionList({ items }: AccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #111111 0%, #0D0D0D 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "0 36px",
        boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {items.map((item, i) => (
        <AccordionItemComponent
          key={item.question}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          index={i}
        />
      ))}
    </div>
  );
}
