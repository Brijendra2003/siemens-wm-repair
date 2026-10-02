"use client";

import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { track } from "@/lib/tracking";
import { BookButton } from "@/components/enquiry/BookButton";
import { WhatsAppIcon } from "@/components/enquiry/ContactLinks";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-100 bg-white/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(15_23_42/0.25)] backdrop-blur md:hidden">
      <div className="grid grid-cols-[auto_auto_1fr] gap-2">
        <a
          href={site.phone.href}
          onClick={() => track("click_call", { source: "sticky-mobile" })}
          className="flex flex-col items-center justify-center rounded-xl bg-brand-50 px-4 py-1.5 text-[0.7rem] font-semibold text-brand-900"
        >
          <Phone className="size-5 text-brand-700" aria-hidden />
          Call
        </a>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_whatsapp", { source: "sticky-mobile" })}
          className="flex flex-col items-center justify-center rounded-xl bg-green-50 px-4 py-1.5 text-[0.7rem] font-semibold text-whatsapp-dark"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
        <BookButton source="sticky-mobile" size="md" className="w-full" />
      </div>
    </div>
  );
}
