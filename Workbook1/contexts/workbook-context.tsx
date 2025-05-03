"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useAnonymousId } from "@/hooks/use-anonymous-id"
import type { SectionAnswer, UserProgress } from "@/types/workbook"
import { initializeDatabase } from "@/lib/db-init"

type WorkbookContextType = {
  saveAnswer: (section: string, questionId: string, answer: string) => Promise<void>
  getSectionAnswers: (section: string) => Promise<Record<string, string>>
  markSectionCompleted: (section: string) => Promise<void>
  getUserProgress: () => Promise<UserProgress[]>
  isSaving: boolean
  isLoading: boolean
}

const WorkbookContext = createContext<WorkbookContextType | undefined>(undefined)

export function WorkbookProvider({ children }: { children: React.ReactNode }) {
  const { anonymousId, isLoading: isLoadingId } = useAnonymousId()
  const [isSaving, setIsSaving] = useState(false)
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false)

  useEffect(() => {
    const init = async () => {
      if (anonymousId && !isDatabaseInitialized) {
        const initialized = await initializeDatabase()
        setIsDatabaseInitialized(initialized)
      }
    }

    init()
  }, [anonymousId, isDatabaseInitialized])

  const saveAnswer = async (section: string, questionId: string, answer: string) => {
    if (!anonymousId) return

    setIsSaving(true)
    try {
      // Check if answer already exists
      const { data: existingAnswer } = await supabase
        .from("section_answers")
        .select("*")
        .eq("user_id", anonymousId)
        .eq("section", section)
        .eq("question_id", questionId)
        .single()

      if (existingAnswer) {
        // Update existing answer
        await supabase
          .from("section_answers")
          .update({
            answer,
            last_updated: new Date().toISOString(),
          })
          .eq("id", existingAnswer.id)
      } else {
        // Insert new answer
        await supabase.from("section_answers").insert({
          user_id: anonymousId,
          section,
          question_id: questionId,
          answer,
          last_updated: new Date().toISOString(),
        })
      }
    } catch (error) {
      console.error("Error saving answer:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const getSectionAnswers = async (section: string) => {
    if (!anonymousId) return {}

    try {
      const { data } = await supabase
        .from("section_answers")
        .select("*")
        .eq("user_id", anonymousId)
        .eq("section", section)

      const answers: Record<string, string> = {}
      if (data) {
        data.forEach((item: SectionAnswer) => {
          answers[item.question_id] = item.answer
        })
      }

      return answers
    } catch (error) {
      console.error("Error getting answers:", error)
      return {}
    }
  }

  const markSectionCompleted = async (section: string) => {
    if (!anonymousId) return

    setIsSaving(true)
    try {
      // Check if progress entry already exists
      const { data: existingProgress } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", anonymousId)
        .eq("section", section)
        .single()

      if (existingProgress) {
        // Update existing progress
        await supabase
          .from("user_progress")
          .update({
            completed: true,
            last_updated: new Date().toISOString(),
          })
          .eq("id", existingProgress.id)
      } else {
        // Insert new progress
        await supabase.from("user_progress").insert({
          user_id: anonymousId,
          section,
          completed: true,
          last_updated: new Date().toISOString(),
        })
      }
    } catch (error) {
      console.error("Error marking section as completed:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const getUserProgress = async () => {
    if (!anonymousId) return []

    try {
      // If database isn't initialized yet, return empty array
      if (!isDatabaseInitialized) {
        return []
      }

      const { data, error } = await supabase.from("user_progress").select("*").eq("user_id", anonymousId)

      if (error) {
        // If the table doesn't exist, return empty array
        if (error.message.includes("does not exist")) {
          console.log("user_progress table does not exist yet")
          return []
        }

        console.error("Error fetching progress:", error)
        return []
      }

      return data || []
    } catch (error) {
      console.error("Error getting user progress:", error)
      return []
    }
  }

  const value = {
    saveAnswer,
    getSectionAnswers,
    markSectionCompleted,
    getUserProgress,
    isSaving,
    isLoading: isLoadingId || !isDatabaseInitialized,
  }

  return <WorkbookContext.Provider value={value}>{children}</WorkbookContext.Provider>
}

export const useWorkbook = () => {
  const context = useContext(WorkbookContext)
  if (context === undefined) {
    throw new Error("useWorkbook must be used within a WorkbookProvider")
  }
  return context
}
