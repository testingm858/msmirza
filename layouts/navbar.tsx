"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/achievements";
import { personalInfo } from "@/data/personal";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <nav
          className={cn(
            "flex w-full items-center justify-between rounded-full px-4 py-2 transition-all duration-300",
            scrolled && "glass shadow-lg shadow-black/5"
          )}
        >
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/images/logo-b.png"
              alt={personalInfo.fullName}
              width={36}
              height={36}
              priority
              className="h-9 w-9 rounded-full dark:hidden"
            />
            <Image
              src="/images/logo-w.png"
              alt={personalInfo.fullName}
              width={36}
              height={36}
              priority
              className="hidden h-9 w-9 rounded-full dark:block"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active === link.href
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <ButtonLink href={personalInfo.resumeUrl} download variant="default" size="sm">
              Download CV
              <Icon name="download" className="h-3.5 w-3.5" />
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
            >
              <Icon name={open ? "close" : "menu"} className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-2 rounded-2xl border border-card-border glass p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium",
                      active === link.href ? "text-accent" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink
              href={personalInfo.resumeUrl}
              download
              variant="default"
              size="sm"
              className="mt-3 w-full"
            >
              Download CV
              <Icon name="download" className="h-3.5 w-3.5" />
            </ButtonLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
