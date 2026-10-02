import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, DM_Sans, Kalam } from "next/font/google";
import { site } from "@/config/site";
import { EnquiryProvider } from "@/components/enquiry/EnquiryProvider";
import "./globals.css";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const hand = Kalam({
  variable: "--font-hand-face",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const title = "Washing Machine Repair in Mumbai | All Major Brands";
const description =
  "Doorstep washing machine repair in Mumbai for front load, top load & semi-automatic machines. Clear quote before work, warranty on replaced parts.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  other: { "geo.region": site.address.regionCode, "geo.placename": "Mumbai" },
};

export const viewport: Viewport = {
  themeColor: "#0b2a5b",
  width: "device-width",
  initialScale: 1,
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;
const TAG_ID = GA_ID ?? ADS_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${body.variable} ${display.variable} ${hand.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:shadow-lift"
        >
          Skip to content
        </a>
        <EnquiryProvider>{children}</EnquiryProvider>

        {TAG_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`} strategy="lazyOnload" />
            <Script id="gtag-init" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${
                GA_ID ? `gtag('config','${GA_ID}');` : ""
              }${ADS_ID ? `gtag('config','${ADS_ID}');` : ""}`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
