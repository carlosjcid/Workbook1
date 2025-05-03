"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface MobileNavigationProps {
  className?: string
}

export function MobileNavigation({ className }: MobileNavigationProps) {
  const router = useRouter()
  const pathname = usePathname()

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

  const handleNavigate = (value: string) => {
    router.push(value)
  }

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Select value={pathname} onValueChange={handleNavigate}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione uma seção" />
        </SelectTrigger>
        <SelectContent>
          {sections.map((section) => (
            <SelectItem key={section.path} value={section.path}>
              {section.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex justify-between">
        {pathname !== "/workbook/introducao" && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const currentIndex = sections.findIndex((section) => section.path === pathname)
              if (currentIndex > 0) {
                router.push(sections[currentIndex - 1].path)
              }
            }}
          >
            Anterior
          </Button>
        )}

        {pathname !== "/workbook/secao-7" && (
          <Button
            size="sm"
            onClick={() => {
              const currentIndex = sections.findIndex((section) => section.path === pathname)
              if (currentIndex < sections.length - 1) {
                router.push(sections[currentIndex + 1].path)
              }
            }}
            className="ml-auto"
          >
            Próxima
          </Button>
        )}
      </div>
    </div>
  )
}
