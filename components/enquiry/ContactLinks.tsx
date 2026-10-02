"use client";

import { Phone } from "lucide-react";
import { clsx } from "clsx";
import { site } from "@/config/site";
import { track } from "@/lib/tracking";
import { buttonStyles } from "./BookButton";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.33-1.95 1.37-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34h.52c.17 0 .4-.06.62.48.24.56.8 1.94.87 2.08.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.7 1.16 1.51 1.88 1.04.93 1.91 1.21 2.18 1.35.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.58.75 1.85.88.27.14.45.2.52.32.07.11.07.66-.17 1.34Z" />
    </svg>
  );
}

type Props = { source: string; className?: string; size?: "sm" | "md" | "lg"; label?: string };

export function CallLink({ source, className, size = "md", label }: Props) {
  return (
    <a
      href={site.phone.href}
      onClick={() => track("click_call", { source })}
      className={clsx(buttonStyles.base, buttonStyles.ghost, buttonStyles[size], className)}
    >
      <Phone aria-hidden className="size-4 text-accent-600" />
      {label ?? site.phone.display}
    </a>
  );
}

export function WhatsAppLink({ source, className, size = "md", label = "WhatsApp" }: Props) {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("click_whatsapp", { source })}
      className={clsx(
        buttonStyles.base,
        buttonStyles[size],
        "bg-whatsapp-dark text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#0f7a40]",
        className,
      )}
    >
      <WhatsAppIcon className="size-[1.1rem]" />
      {label}
    </a>
  );
}
