import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/ui/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MepScans - Modern MEP Scanning Solutions",
  description: "Professional MEP scanning and documentation services for construction and engineering projects.",
  keywords: ["MEP scanning", "construction", "engineering", "documentation", "3D scanning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`} style={{transition: "background-color 0.3s ease, color 0.3s ease"}}>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
            <Navigation />
          </header>
          <main className="flex-grow pt-16">
            {children}
          </main>
          <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <p className="text-center text-sm opacity-60">
                © {new Date().getFullYear()} MepScans. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}