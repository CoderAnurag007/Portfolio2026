"use client";

import { Search } from "lucide-react";
import { openAsk } from "@/components/ask";

export function AskButton() {
  return (
    <button
      type="button"
      onClick={() => openAsk()}
      className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line-strong bg-panel px-5 py-3 font-mono text-sm text-fg transition-colors hover:border-ok/60"
    >
      <Search size={15} aria-hidden className="text-ok" />
      ask anurag.sys
    </button>
  );
}
