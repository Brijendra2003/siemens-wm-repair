"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";

type Props = {
  open: boolean;
  source: string;
  defaultBrand?: string;
  defaultProblem?: string;
  onClose: () => void;
};

/** Native <dialog> gives us focus trapping, ESC handling and aria-modal semantics for free. */
export default function EnquiryModal({ open, source, defaultBrand, defaultProblem, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && d.open) {
      d.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="enquiry-title"
      onClose={() => {
        document.documentElement.style.overflow = "";
        onClose();
      }}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      className="m-auto w-[min(100%-1.5rem,40rem)] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl bg-white p-0 shadow-lift backdrop:bg-brand-950/55 backdrop:backdrop-blur-[2px] modal-in"
    >
      {open && (
        <div className="relative">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-ink-100 bg-white/95 px-5 pt-5 pb-4 backdrop-blur sm:px-8 sm:pt-7">
            <div>
              <p className="eyebrow">Book a technician</p>
              <h2 id="enquiry-title" className="mt-1 text-xl font-extrabold sm:text-2xl">
                Tell us what&apos;s wrong
              </h2>
              <p className="mt-1 text-sm text-ink-500">Takes 30 seconds. We&apos;ll call to confirm your slot.</p>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full bg-ink-100 text-ink-700 transition hover:bg-accent-100 hover:text-accent-700"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <EnquiryForm
            source={source}
            defaultBrand={defaultBrand}
            defaultProblem={defaultProblem}
            onDone={() => ref.current?.close()}
          />
        </div>
      )}
    </dialog>
  );
}
