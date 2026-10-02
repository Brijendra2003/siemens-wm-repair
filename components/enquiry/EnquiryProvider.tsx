"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { captureAttribution, track } from "@/lib/tracking";

type Ctx = { openEnquiry: (opts: { source: string; brand?: string; problem?: string }) => void; preload: () => void };
const EnquiryContext = createContext<Ctx | null>(null);

const loadModal = () => import("./EnquiryModal");
const EnquiryModal = dynamic(loadModal, { ssr: false });

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ open: boolean; source: string; brand?: string; problem?: string }>({
    open: false,
    source: "",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    captureAttribution();
  }, []);

  const preload = useCallback(() => {
    void loadModal();
  }, []);

  const openEnquiry = useCallback<Ctx["openEnquiry"]>(({ source, brand, problem }) => {
    setMounted(true);
    setState({ open: true, source, brand, problem });
    track("open_enquiry", { source });
  }, []);

  return (
    <EnquiryContext.Provider value={{ openEnquiry, preload }}>
      {children}
      {mounted && (
        <EnquiryModal
          open={state.open}
          source={state.source}
          defaultBrand={state.brand}
          defaultProblem={state.problem}
          onClose={() => setState((s) => ({ ...s, open: false }))}
        />
      )}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}
