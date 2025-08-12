// src/app/layout.tsx
// This is a Server Component by default

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientThemeProvider } from "@/components/theme-provider";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Daily Prompt",
  description: "A daily prompt generator for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientThemeProvider>
          <header className="flex justify-between items-center p-6">
            <nav>
              <Link href="/">
                <span className="text-xl font-bold hover:underline">
                  Dev Daily Prompt
                </span>
              </Link>
              <Link href="/guidance">
                <span className="ml-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  Prompt Guidance
                </span>
              </Link>
            </nav>
            <ThemeToggleButton />
          </header>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}
