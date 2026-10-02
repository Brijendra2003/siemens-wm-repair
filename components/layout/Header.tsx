"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { nav } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { BookButton } from "@/components/enquiry/BookButton";
import { CallLink } from "@/components/enquiry/ContactLinks";
import { Logo } from "./Logo";

export function Header({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const href = (h: string) => (home ? h : `/${h}`);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 transition-[background-color,box-shadow] duration-300",
        scrolled || open ? "bg-white/90 shadow-[0_1px_0_rgb(15_23_42/0.06)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-8 text-[0.92rem] font-medium text-ink-700">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={href(n.href)}
                  className="relative py-2 transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent-500 after:transition-transform hover:text-ink-900 hover:after:scale-x-100"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <BookButton source="header" size="sm" className="hidden sm:inline-flex" />
          <button
            type="button"
            className="grid size-11 cursor-pointer place-items-center rounded-xl text-ink-900 ring-1 ring-ink-300/70 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </Container>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="fade-in border-t border-ink-100 bg-white xl:hidden">
          <Container className="py-4">
            <ul className="grid gap-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={href(n.href)}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-semibold text-ink-900 hover:bg-brand-50"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-3 pb-2">
              <CallLink source="mobile-menu" label="Call" size="sm" />
              <BookButton source="mobile-menu" size="sm" />
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
