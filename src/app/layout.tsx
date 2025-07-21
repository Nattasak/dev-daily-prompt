// src/app/layout.tsx
// This is a Server Component by default

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ClientThemeProvider } from '@/components/theme-provider'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dev Daily Prompt",
  description: "A daily prompt generator for developers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap children with the client-side ThemeProvider */}
        <ClientThemeProvider>
          {/* Render the client-side ThemeToggleButton */}
          <ThemeToggleButton />
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  )
}
