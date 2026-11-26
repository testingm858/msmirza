import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { navLinks } from "@/data/achievements";
import { Icon } from "@/components/ui/icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-2">
              <Image
                src="/images/logo-b.png"
                alt={personalInfo.fullName}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full dark:hidden"
              />
              <Image
                src="/images/logo-w.png"
                alt={personalInfo.fullName}
                width={40}
                height={40}
                className="hidden h-10 w-10 rounded-full dark:block"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{personalInfo.bio}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {personalInfo.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">More</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {year} {personalInfo.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
