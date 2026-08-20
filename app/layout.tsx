import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navbar } from "@/layouts/navbar";
import { Footer } from "@/layouts/footer";
import { personalInfo } from "@/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-xi-seven-ll7hbw5vge.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.fullName} — ${personalInfo.title}`,
    template: `%s — ${personalInfo.fullName}`,
  },
  description: personalInfo.bio,
  keywords: [
    "QHSE Lead Auditor",
    "ISO 9001 Lead Auditor",
    "ISO 45001 Lead Auditor",
    "Management Representative",
    "Data Analytics",
    "Kaggle Expert",
    "Muhammad Shahid Mirza",
  ],
  authors: [{ name: personalInfo.fullName, url: siteUrl }],
  creator: personalInfo.fullName,
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${personalInfo.fullName} — ${personalInfo.title}`,
    description: personalInfo.bio,
    siteName: `${personalInfo.fullName} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.fullName} — ${personalInfo.title}`,
    description: personalInfo.bio,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.fullName,
  jobTitle: personalInfo.title,
  description: personalInfo.bio,
  email: `mailto:${personalInfo.email}`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  worksFor: {
    "@type": "Organization",
    name: "Al Sultan Industrial Cement",
  },
  sameAs: personalInfo.social.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScrollProvider>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
