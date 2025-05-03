"use client"

import type React from "react"
import { Inter, Caveat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WorkbookProvider } from "@/contexts/workbook-context"
import { Toaster } from "@/components/ui/toaster"
import { useEffect } from "react"
import { initializeDatabase } from "@/lib/db-init"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwritten" })

function WorkbookInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize database on client side
    initializeDatabase().catch(console.error)
  }, [])

  return <>{children}</>
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <WorkbookProvider>
            <WorkbookInitializer>
              {children}
              <Toaster />
            </WorkbookInitializer>
          </WorkbookProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
