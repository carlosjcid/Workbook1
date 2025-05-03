import type React from "react"
import ClientLayout from "./client"

export const metadata = {
  title: "Despertar do Amor Próprio | Workbook",
  description: "Uma jornada de autoconhecimento e desenvolvimento pessoal",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'