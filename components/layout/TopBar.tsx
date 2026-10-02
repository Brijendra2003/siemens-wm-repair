import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function TopBar() {
  return (
    <div className="bg-brand-900 text-[0.8rem] text-brand-100">
      <Container className="flex h-9 items-center justify-between gap-4">
        <p className="flex items-center gap-2">
          <Clock className="size-3.5 text-accent-200" aria-hidden />
          <span>{site.hours.label}</span>
          <span className="hidden text-brand-200/60 sm:inline">·</span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <MapPin className="size-3.5 text-accent-200" aria-hidden />
            {site.serviceAreaLabel}
          </span>
        </p>
        <a href={site.phone.href} className="flex items-center gap-1.5 font-semibold text-white hover:text-accent-200">
          <Phone className="size-3.5" aria-hidden />
          <span className="hidden sm:inline">Call</span> {site.phone.display}
        </a>
      </Container>
    </div>
  );
}
