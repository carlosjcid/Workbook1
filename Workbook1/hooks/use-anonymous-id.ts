"use client"

import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export function useAnonymousId() {
  const [anonymousId, setAnonymousId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if we have an ID in localStorage
    let id = localStorage.getItem("workbook_anonymous_id")

    // If not, create a new one
    if (!id) {
      id = uuidv4()
      localStorage.setItem("workbook_anonymous_id", id)
    }

    setAnonymousId(id)
    setIsLoading(false)
  }, [])

  return { anonymousId, isLoading }
}
