"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY && y > 120);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = siteConfig.nav.map((item) => item.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="container-page pt-4">
          <nav
            className={cn(
              "glass flex items-center justify-between rounded-full border px-3 py-2 shadow-[var(--shadow)] transition-all sm:px-4",
              scrolled ? "border-border" : "border-transparent"
            )}
            aria-label="Primary"
          >
            <a
              href="#about"
              className="font-display pl-2 text-[15px] font-semibold tracking-tight text-foreground focus-ring rounded-md"
            >
              Anurag<span className="text-accent">.</span>
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-[13px] font-medium transition focus-ring",
                      active === item.href
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonClassName({ size: "sm" }),
                  "hidden sm:inline-flex"
                )}
              >
                Resume
              </a>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden focus-ring"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-opacity lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container-page flex h-full flex-col justify-center gap-2 pt-20">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-4 text-2xl font-display font-semibold transition focus-ring",
                active === item.href ? "text-accent" : "text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonClassName({ size: "lg" }), "mt-6 w-fit")}
            onClick={() => setOpen(false)}
          >
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}
