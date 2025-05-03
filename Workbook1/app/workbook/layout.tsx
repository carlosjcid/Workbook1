import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WorkbookProgress } from "@/components/workbook-progress"
import { WorkbookNavigation } from "@/components/workbook-navigation"

export default function WorkbookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-800">
            Despertar do Amor Próprio
          </Link>
          <Button asChild variant="ghost">
            <Link href="/">Início</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <WorkbookProgress />
              <WorkbookNavigation />
            </div>
          </aside>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">{children}</div>
        </div>
      </main>

      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Despertar do Amor Próprio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
