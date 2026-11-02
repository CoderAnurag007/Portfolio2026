"use client";

import { useEffect, useState } from "react";

const NODES = [
  { id: "ui", label: "React", sub: "next.js ui", x: 60, color: "var(--info)" },
  { id: "api", label: "Node", sub: "fastapi · express", x: 200, color: "var(--ok)" },
  { id: "db", label: "Postgres", sub: "mongodb", x: 340, color: "var(--warn)" },
  { id: "llm", label: "LLM", sub: "rag · vectors", x: 480, color: "var(--violet)" },
];

// Decorative log lines describing the kind of work, not real production numbers.
const LOG = [
  ["GET", "/api/orders?status=new", "200"],
  ["SYNC", "inventory → marketplace channels", "ok"],
  ["POST", "/webhooks/order.created", "202"],
  ["AGG", "reports.daily (mongo pipeline)", "ok"],
  ["EMBED", "docs → vector store", "ok"],
  ["RAG", "answer grounded=true", "ok"],
  ["PATCH", "/api/listings/:sku", "200"],
  ["DEPLOY", "portfolio@main → vercel", "live"],
] as const;

const ms = () => [8 + Math.floor(Math.random() * 10), 20 + Math.floor(Math.random() * 30), 2 + Math.floor(Math.random() * 6), 180 + Math.floor(Math.random() * 220)];

export function Trace() {
  const [tick, setTick] = useState(0);
  const [lat, setLat] = useState([12, 34, 4, 260]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setTick((t) => t + 1);
      setLat(ms());
    }, 1600);
    return () => window.clearInterval(id);
  }, []);

  const lines = Array.from({ length: 5 }, (_, i) => LOG[(tick + i) % LOG.length]);
  const time = (offset: number) => {
    const s = (tick * 1.6 + offset) % 60;
    return `14:0${Math.floor(((tick * 1.6 + offset) / 60) % 10)}:${s.toFixed(0).padStart(2, "0")}`;
  };

  return (
    <div className="panel overflow-hidden" aria-label="Animated diagram of a request flowing through Anurag's stack">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <p className="font-mono text-[11px] text-dim">trace · request lifecycle</p>
        <p className="flex items-center gap-1.5 font-mono text-[11px] text-ok">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-ok text-ok" aria-hidden />
          healthy
        </p>
      </div>

      <svg viewBox="0 0 540 170" className="w-full" role="img" aria-label="React to Node to Postgres to LLM">
        <defs>
          <linearGradient id="wire" x1="0" x2="1">
            <stop offset="0" stopColor="var(--info)" />
            <stop offset="0.5" stopColor="var(--ok)" />
            <stop offset="1" stopColor="var(--violet)" />
          </linearGradient>
        </defs>
        <path id="route" d="M60 72 L480 72" stroke="url(#wire)" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="4 6" fill="none" />
        <g className="motion-reduce:hidden">
          {[0, 0.55, 1.1].map((delay) => (
            <circle key={delay} r="4" fill="var(--fg)">
              <animateMotion dur="1.6s" begin={`${delay}s`} repeatCount="indefinite" path="M60 72 L480 72" />
              <animate attributeName="opacity" values="0;1;1;0" dur="1.6s" begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
        {NODES.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy="72" r="26" fill="var(--panel-2)" stroke={n.color} strokeOpacity="0.7" strokeWidth="1.5" />
            <circle cx={n.x} cy="72" r="5" fill={n.color} />
            <text x={n.x} y="22" textAnchor="middle" className="fill-[var(--fg)] font-mono" fontSize="13">
              {n.label}
            </text>
            <text x={n.x} y="37" textAnchor="middle" className="fill-[var(--dim)] font-mono" fontSize="10">
              {n.sub}
            </text>
            <text x={n.x} y="122" textAnchor="middle" className="font-mono" fontSize="12" fill={n.color}>
              {lat[i]}ms
            </text>
          </g>
        ))}
        <text x="270" y="158" textAnchor="middle" className="fill-[var(--dim)] font-mono" fontSize="9.5">
          simulated trace · illustrative, not production metrics
        </text>
      </svg>

      <ol className="border-t border-line bg-black/20 px-4 py-3 font-mono text-[11px] leading-6 sm:text-xs" aria-hidden>
        {lines.map(([verb, path, status], i) => (
          <li key={`${tick}-${i}`} className={`flex gap-3 ${i === lines.length - 1 ? "text-fg" : "text-muted"}`}>
            <span className="hidden text-dim sm:inline">{time(i)}</span>
            <span className="w-14 shrink-0 text-info">{verb}</span>
            <span className="min-w-0 flex-1 truncate">{path}</span>
            <span className={status === "live" ? "text-violet" : "text-ok"}>{status}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
