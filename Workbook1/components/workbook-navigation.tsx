"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home } from "lucide-react"

export function WorkbookNavigation() {
  const pathname = usePathname()
  const router = useRouter()

  const sections = [
    { path: "/workbook/introducao", label: "Introdução" },
    { path: "/workbook/secao-1", label: "Seção 1: O Reflexo do Amor Próprio" },
    { path: "/workbook/secao-2", label: "Seção 2: Estilos de Apego" },
    { path: "/workbook/secao-3", label: "Seção 3: Sinais de Desconexão" },
    { path: "/workbook/secao-4", label: "Seção 4: Práticas de Mindfulness" },
    { path: "/workbook/secao-5", label: "Seção 5: A Ciência da Reconexão" },
    { path: "/workbook/secao-6", label: "Seção 6: Plano de Ação" },
    { path: "/workbook/secao-7", label: "Seção 7: Integração" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h3 className="font-semibold text-lg mb-3 text-purple-800">Navegação</h3>
      <nav className="space-y-1">
        {sections.map((section) => (
          <Button
            key={section.path}
            variant="ghost"
            asChild
            className={cn(
              "w-full justify-start text-left font-normal h-auto py-2",
              pathname === section.path
                ? "bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
                : "text-gray-600 hover:text-gray-900",
            )}
          >
            <Link href={section.path}>{section.label}</Link>
          </Button>
        ))}
      </nav>
      <div className="mt-6 pt-6 border-t">
        <Button variant="outline" className="w-full flex items-center gap-2 text-gray-600" asChild>
          <Link href="/">
            <Home size={16} />
            Página Inicial
          </Link>
        </Button>
      </div>
    </div>
  )
}
