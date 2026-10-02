"use client";

import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { useEnquiry } from "./EnquiryProvider";

type Props = {
  source: string;
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  brand?: string;
  problem?: string;
  className?: string;
  arrow?: boolean;
};

export const buttonStyles = {
  base: "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer select-none",
  primary:
    "bg-accent-600 text-white shadow-cta hover:bg-accent-700 hover:-translate-y-0.5",
  ghost: "bg-white text-ink-900 ring-1 ring-ink-300/80 shadow-soft hover:ring-ink-500/40 hover:-translate-y-0.5",
  link: "text-accent-700 hover:text-accent-600 p-0! shadow-none underline-offset-4 hover:underline",
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
};

export function BookButton({
  source,
  children = "Book a Repair",
  variant = "primary",
  size = "md",
  brand,
  problem,
  className,
  arrow = true,
}: Props) {
  const { openEnquiry, preload } = useEnquiry();
  return (
    <button
      type="button"
      onClick={() => openEnquiry({ source, brand, problem })}
      onPointerEnter={preload}
      onFocus={preload}
      onTouchStart={preload}
      className={clsx(buttonStyles.base, buttonStyles[variant], buttonStyles[size], className)}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}
