"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import type { NetworkNode, NetworkEdge } from "@/types";

interface NetworkGraphProps {
  nodes: NetworkNode[];
  edges: [string, string][];
}

export function NetworkGraph({ nodes, edges }: NetworkGraphProps) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getNodeById = (id: string) => nodes.find((n) => n.id === id);

  const isConnected = (nodeId: string) => {
    if (!activeNode) return true;
    if (nodeId === activeNode) return true;
    return edges.some(
      ([a, b]) => (a === activeNode && b === nodeId) || (b === activeNode && a === nodeId)
    );
  };

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        position: "relative",
        display: "block",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        {/* Edges */}
        {edges.map(([from, to], i) => {
          const a = getNodeById(from);
          const b = getNodeById(to);
          if (!a || !b) return null;
          const active = activeNode && (from === activeNode || to === activeNode);
          return (
            <motion.line
              key={`edge-${from}-${to}`}
              x1={a.x} y1={a.y}
              x2={b.x} y2={b.y}
              stroke={active ? "rgba(0,200,5,0.5)" : "rgba(255,255,255,0.12)"}
              strokeWidth="0.3"
              strokeDasharray="1 0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ transition: "stroke 0.2s, opacity 0.2s" }}
              opacity={activeNode && !active ? 0.1 : 1}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const dimmed = activeNode && !isConnected(node.id) && node.id !== activeNode;
          return (
            <g
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Pulse ring */}
              <motion.circle
                cx={node.x} cy={node.y}
                r={node.size * 0.7}
                fill="none"
                stroke={node.color}
                strokeWidth="0.3"
                animate={{ r: [node.size * 0.7, node.size * 1.1], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              />
              {/* Main circle */}
              <motion.circle
                cx={node.x} cy={node.y}
                r={node.isCenter ? 6 : 3.5}
                fill={`${node.color}${node.isCenter ? "30" : "20"}`}
                stroke={node.color}
                strokeWidth={node.isCenter ? "0.6" : "0.4"}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: dimmed ? 0.15 : 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                viewport={{ once: true }}
                style={{
                  transformOrigin: `${node.x}px ${node.y}px`,
                  transition: "opacity 0.2s",
                }}
              />
              {/* Label */}
              {!node.isCenter ? (
                <motion.text
                  x={node.x} y={node.y + 6}
                  textAnchor="middle"
                  fill={node.color}
                  fontSize="3.5"
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: dimmed ? 0.1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                  viewport={{ once: true }}
                  style={{ transition: "opacity 0.2s" }}
                >
                  {node.label}
                </motion.text>
              ) : (
                <motion.text
                  x={node.x} y={node.y + 1.5}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="4"
                  fontWeight="900"
                  fontFamily="Inter, sans-serif"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  VIXAL
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
