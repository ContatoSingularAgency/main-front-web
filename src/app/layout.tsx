import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { copy } from "@/content/copy.pt-BR";

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
  name: copy.company.tradeName,
  legalName: copy.company.legalName,
  taxID: copy.company.cnpj,
  url: siteUrl,
  logo: `${siteUrl}/images/logo/singular-mark.png`,
  description:
    "Agência de performance em Google e Meta Ads com a régua estética de uma casa de branding premium.",
  email: copy.company.email,
  telephone: copy.company.phoneLink,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${copy.company.address.street}, ${copy.company.address.complement}`,
    addressLocality: copy.company.address.city,
    addressRegion: copy.company.address.stateCode,
    postalCode: copy.company.address.zip,
    addressCountry: "BR",
  },
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
