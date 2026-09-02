"use client";

import { ArrowUpRight, Briefcase, FolderGit2, Mail, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { buttonClassName } from "@/components/ui/button";

const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Hello Anurag")}`;

const links = [
  {
    label: "Email",
    href: mailtoHref,
    detail: siteConfig.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    detail: "Professional profile",
    icon: Briefcase,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    detail: "Code & experiments",
    icon: FolderGit2,
  },
  {
    label: "Resume",
    href: siteConfig.resumePath,
    detail: "PDF download",
    icon: FileText,
  },
];

function openMail(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  window.location.href = mailtoHref;
}

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Contact"
              title="Let's connect."
              description="Open to full-stack, accessibility, and AI engineering roles. Based in Rewa, India — available remote."
            />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={mailtoHref}
                onClick={openMail}
                className={buttonClassName({ size: "lg" })}
              >
                Email me
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({
                  variant: "secondary",
                  size: "lg",
                })}
              >
                View Resume
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2">
          {links.map((link, index) => {
            const Icon = link.icon;
            const isEmail = link.label === "Email";
            const isExternal =
              link.href.startsWith("http") || link.href.endsWith(".pdf");

            return (
              <Reveal key={link.label} delay={index * 0.04}>
                <a
                  href={link.href}
                  onClick={isEmail ? openMail : undefined}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-3xl border border-border bg-card px-5 py-4 transition hover:border-border-strong hover:shadow-[var(--shadow)] focus-ring"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-display text-base font-semibold text-foreground">
                        {link.label}
                      </span>
                      <span className="block text-sm text-muted">
                        {link.detail}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:text-accent" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
