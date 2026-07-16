import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/theme-toggle";
import { MotionProvider } from "@/components/ui/motion";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} - Software Engineer Portfolio`,
    template: `%s - ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.fullName} Portfolio`,
  keywords: [
    "Software Engineer",
    "Information Science",
    "Jimma University",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  openGraph: {
    title: `${siteConfig.fullName} - Software Engineer Portfolio`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.fullName} Portfolio`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} - Software Engineer Portfolio`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.university,
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <div className="relative flex min-h-screen flex-col overflow-hidden">
              <div className="pointer-events-none fixed inset-0 -z-10 grid-mask" />
              <div className="pointer-events-none fixed inset-0 -z-10 noise opacity-[0.025]" />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
