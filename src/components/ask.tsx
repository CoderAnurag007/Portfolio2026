"use client";

import { useEffect, useRef, useState } from "react";
import { CornerDownLeft, X } from "lucide-react";
import { ask, type Hit } from "@/lib/ask";
import { siteConfig } from "@/data/site";

const OPEN_EVENT = "anurag:ask";
const SUGGESTIONS = [
  "Has he built RAG systems?",
  "What does he do at OneChannelAdmin?",
  "Which databases does he use?",
  "Was he a founder?",
  "How do I contact him?",
];

export function openAsk(query?: string) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: query }));
}

type Turn = { q: string; hits: Hit[] };

export function Ask() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const submit = (q: string) => {
    const text = q.trim();
    if (!text) return;
    setTurns((t) => [...t, { q: text, hits: ask(text) }]);
    setValue("");
  };

  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const q = (e as CustomEvent<string | undefined>).detail;
      if (q) setTurns((t) => [...t, { q, hits: ask(q) }]);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [turns]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-3 pt-[10vh] backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Ask about Anurag"
        className="panel flex max-h-[78vh] w-full max-w-2xl flex-col overflow-hidden shadow-2xl shadow-black/60"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <p className="font-mono text-xs text-muted">
            <span className="text-ok">●</span> anurag.sys / ask{" "}
            <span className="text-dim">· retrieval runs in your browser, no LLM, no tracking</span>
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="focus-ring rounded p-1 text-muted hover:text-fg"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div ref={logRef} className="flex-1 space-y-5 overflow-y-auto px-4 py-4" aria-live="polite">
          {turns.length === 0 ? (
            <div>
              <p className="text-sm text-muted">
                Ask anything about Anurag&apos;s experience, stack or projects. Answers are retrieved from this site&apos;s
                own data, with the source shown.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => submit(s)}
                    className="focus-ring rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-ok/50 hover:text-fg"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            turns.map((turn, i) => (
              <div key={i} className="space-y-2">
                <p className="font-mono text-sm text-fg">
                  <span className="text-ok">❯</span> {turn.q}
                </p>
                {turn.hits.length ? (
                  <div className="rounded-lg border border-line bg-panel-2 p-3">
                    <p className="text-sm leading-relaxed text-fg/90">{turn.hits[0].doc.answer}</p>
                    <p className="mt-2 font-mono text-[11px] text-dim">
                      source: <span className="text-info">{turn.hits[0].doc.source}</span>
                      {turn.hits.length > 1 ? (
                        <>
                          {" "}
                          · related:{" "}
                          {turn.hits.slice(1).map((h, j) => (
                            <span key={h.doc.id}>
                              {j > 0 ? ", " : ""}
                              <button
                                type="button"
                                onClick={() => submit(h.doc.title)}
                                className="focus-ring rounded text-muted underline decoration-dotted underline-offset-2 hover:text-fg"
                              >
                                {h.doc.title}
                              </button>
                            </span>
                          ))}
                        </>
                      ) : null}
                    </p>
                  </div>
                ) : (
                  <div className="rounded-lg border border-warn/30 bg-warn/5 p-3 text-sm text-fg/90">
                    No match in my records for that. Try another phrasing, or ask Anurag directly:{" "}
                    <a className="text-ok underline underline-offset-2" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <form
          className="flex items-center gap-2 border-t border-line px-4 py-3"
          onSubmit={(e) => {
            e.preventDefault();
            submit(value);
          }}
        >
          <span className="font-mono text-ok" aria-hidden>
            ❯
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. what has he built with LLMs?"
            aria-label="Your question"
            className="flex-1 bg-transparent font-mono text-sm text-fg placeholder:text-dim focus:outline-none"
          />
          <button
            type="submit"
            className="focus-ring flex items-center gap-1 rounded border border-line px-2 py-1 font-mono text-[11px] text-muted hover:text-fg"
          >
            enter <CornerDownLeft size={12} aria-hidden />
          </button>
        </form>
      </div>
    </div>
  );
}
