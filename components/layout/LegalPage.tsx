import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd name={title} path={path} />
      <TopBar />
      <Header home={false} />
      <main id="main" className="bg-brand-50 py-14 sm:py-20">
        <Container className="max-w-3xl!">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
            <ArrowLeft className="size-4" aria-hidden /> Back to home
          </Link>
          <article className="mt-6 rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-100 sm:p-12">
            <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
            <p className="mt-2 text-sm text-ink-500">Last updated: {updated}</p>
            <div className="mt-8 space-y-5 leading-relaxed text-ink-700 [&_a]:font-semibold [&_a]:text-brand-700 [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
              {children}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
