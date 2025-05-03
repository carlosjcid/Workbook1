"use client"

import { Progress } from "@/components/ui/progress"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useWorkbook } from "@/contexts/workbook-context"
import { WORKBOOK_SECTIONS } from "@/types/workbook"
import { Loader2 } from "lucide-react"

export function WorkbookProgress() {
  const pathname = usePathname()
  const { getUserProgress, isLoading: isContextLoading } = useWorkbook()
  const [completedSections, setCompletedSections] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProgress = async () => {
      if (isContextLoading) return

      try {
        const progress = await getUserProgress()

        // If we got progress data, update the state
        if (progress) {
          const completed = progress.filter((p) => p.completed).map((p) => p.section)
          setCompletedSections(completed)
        }
      } catch (error) {
        console.error("Error fetching progress:", error)
        // Don't update state on error, keep the default empty array
      } finally {
        setIsLoading(false)
      }
    }

    if (!isContextLoading) {
      fetchProgress()
    }
  }, [getUserProgress, isContextLoading])

  // Calculate progress
  const totalSections = WORKBOOK_SECTIONS.length
  const completedCount = completedSections.length
  const progressPercentage = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0

  if (isLoading || isContextLoading) {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-purple-700 font-medium">Seu progresso</span>
          <Loader2 className="h-4 w-4 animate-spin text-purple-600" />
        </div>
        <Progress value={0} className="h-2" />
      </div>
    )
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-purple-700 font-medium">Seu progresso</span>
        <span className="text-gray-500">{progressPercentage}%</span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
      <div className="mt-2 text-xs text-gray-500 text-right">
        {completedCount} de {totalSections} seções concluídas
      </div>
    </div>
  )
}
