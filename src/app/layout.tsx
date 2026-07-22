import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-toggle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Software Engineer & Full Stack Developer",
  description: "I build beautiful, performant web applications with modern technologies. Passionate about creating exceptional user experiences.",
  keywords: ["Software Engineer", "Full Stack Developer", "Web Developer", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio - Software Engineer & Full Stack Developer",
    description: "I build beautiful, performant web applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}