import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://singularagency.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Singular Agency — Performance em Google Ads e Meta Ads",
    template: "%s | Singular Agency",
  },
  description:
    "Agência de performance em Google e Meta Ads com a régua estética de uma casa de branding premium. Diagnóstico gratuito em até 48h.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Singular Agency",
    url: siteUrl,
    title: "Singular Agency — Performance em Google Ads e Meta Ads",
    description:
      "Agência de performance em Google e Meta Ads com a régua estética de uma casa de branding premium.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Singular Agency — Performance em Google Ads e Meta Ads",
    description:
      "Agência de performance em Google e Meta Ads com a régua estética de uma casa de branding premium.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Singular Agency",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/singular-mark.png`,
  description:
    "Agência de performance em Google e Meta Ads com a régua estética de uma casa de branding premium.",
  sameAs: [],
  areaServed: "BR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {/* General Sans é licenciada pela Fontshare (ITF) apenas via API deles —
            self-host redistribuindo os arquivos exige autorização por escrito.
            Ver "Tokens — Typography" em singular-agency-style-reference.md. */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
