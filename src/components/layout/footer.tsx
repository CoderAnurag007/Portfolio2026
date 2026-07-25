import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            Building intelligent software with production discipline.
          </p>
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
