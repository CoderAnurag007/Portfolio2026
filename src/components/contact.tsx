"use client";

import { useState } from "react";
import { Check, Copy, FileText, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/brand-icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  const links = [
    { label: "linkedin", href: siteConfig.links.linkedin, icon: <LinkedinIcon size={15} /> },
    { label: "github", href: siteConfig.links.github, icon: <GithubIcon size={15} /> },
    { label: "instagram", href: siteConfig.links.instagram, icon: <InstagramIcon size={15} /> },
    { label: "resume.pdf", href: siteConfig.resumePath, icon: <FileText size={15} /> },
  ];

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <div className="panel relative overflow-hidden p-6 md:p-12">
          <div className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-ok/15 blur-[100px]" aria-hidden />
          <p className="font-mono text-sm text-muted">
            <span className="text-ok">$</span> <span className="caret">hire anurag --role full-stack</span>
          </p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold text-fg md:text-6xl">
            Have a product that needs to ship? Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
            Full-stack and AI-product roles, remote or in India. Email is the fastest way to reach me.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Hi Anurag")}`}
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-ok px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} aria-hidden /> {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={copy}
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-3 font-mono text-xs text-fg hover:border-ok/60"
            >
              {copied ? <Check size={14} className="text-ok" aria-hidden /> : <Copy size={14} aria-hidden />}
              {copied ? "copied" : "copy email"}
            </button>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-3 font-mono text-xs text-fg hover:border-ok/60"
            >
              <Phone size={14} aria-hidden /> {siteConfig.phone}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-xs">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded text-muted hover:text-fg">
                  {l.icon} {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-10 flex flex-col gap-2 font-mono text-[11px] text-dim sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} · built with Next.js, TypeScript and Tailwind
          </p>
          <p>
            <span className="text-ok">●</span> all systems operational
          </p>
        </footer>
      </div>
    </section>
  );
}
