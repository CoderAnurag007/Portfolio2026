"use client";

import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { siteConfig } from "@/data/site";
import { openAsk } from "@/components/ask";

export function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-14 items-center gap-4">
        <a href="#top" className="focus-ring flex items-center gap-2 rounded font-mono text-sm text-fg">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-ok text-ok" aria-hidden />
          {siteConfig.handle}
        </a>

        <nav aria-label="Primary" className="ml-6 hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => openAsk()}
            className="focus-ring hidden items-center gap-2 rounded-lg border border-line bg-panel px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-line-strong hover:text-fg sm:flex"
          >
            <Search size={13} aria-hidden />
            ask anurag.sys
            <kbd className="rounded border border-line px-1 text-[10px] text-dim">⌘K</kbd>
          </button>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-lg bg-ok px-3 py-1.5 font-mono text-xs font-medium text-bg transition-opacity hover:opacity-90"
          >
            resume.pdf
          </a>
          <button
            type="button"
            className="focus-ring rounded p-1.5 text-muted md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="wrap flex flex-col gap-1 pb-4 md:hidden">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded px-2 py-2 font-mono text-sm text-muted hover:text-fg"
            >
              <span className="text-ok">$</span> cd {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openAsk();
            }}
            className="focus-ring rounded px-2 py-2 text-left font-mono text-sm text-muted hover:text-fg"
          >
            <span className="text-ok">$</span> ask anurag.sys
          </button>
        </nav>
      ) : null}
    </header>
  );
}
