import {
  BadgeCheck,
  CalendarCheck,
  CircuitBoard,
  Clock,
  Droplets,
  PackageCheck,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/content";

function FrontLoad(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="2" width="18" height="20" rx="2.5" />
      <path d="M3 7h18" />
      <circle cx="12" cy="14" r="4.5" />
      <path d="M7 4.5h.01M10 4.5h.01" />
    </svg>
  );
}
function TopLoad(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="6" width="18" height="16" rx="2.5" />
      <path d="M5 6 7 2h10l2 4" />
      <path d="M7 11h10M8 16h8" />
    </svg>
  );
}
function Semi(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="5" width="20" height="16" rx="2.5" />
      <path d="M12 5v16" />
      <circle cx="7" cy="13" r="2.5" />
      <circle cx="17" cy="13" r="2.5" />
    </svg>
  );
}

const map: Record<IconName, LucideIcon | ((p: React.SVGProps<SVGSVGElement>) => React.ReactElement)> = {
  front: FrontLoad,
  top: TopLoad,
  semi: Semi,
  drain: Droplets,
  noise: Waves,
  pcb: CircuitBoard,
  leak: Droplets,
  install: PackageCheck,
  search: Search,
  receipt: ReceiptText,
  shield: ShieldCheck,
  calendar: CalendarCheck,
  truck: Truck,
  wrench: Wrench,
  badge: BadgeCheck,
  clock: Clock,
  sparkles: Sparkles,
  users: Users,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const C = map[name];
  return <C className={className} aria-hidden />;
}
