export interface UserProgress {
  id?: string
  user_id: string
  section: string
  completed: boolean
  last_updated: string
}

export interface SectionAnswer {
  id?: string
  user_id: string
  section: string
  question_id: string
  answer: string
  last_updated: string
}

export interface WorkbookSection {
  path: string
  label: string
  key: string
}

export const WORKBOOK_SECTIONS: WorkbookSection[] = [
  { path: "/workbook/introducao", label: "Introdução", key: "intro" },
  { path: "/workbook/secao-1", label: "Seção 1: O Reflexo do Amor Próprio", key: "secao1" },
  { path: "/workbook/secao-2", label: "Seção 2: Estilos de Apego", key: "secao2" },
  { path: "/workbook/secao-3", label: "Seção 3: Sinais de Desconexão", key: "secao3" },
  { path: "/workbook/secao-4", label: "Seção 4: Práticas de Mindfulness", key: "secao4" },
  { path: "/workbook/secao-5", label: "Seção 5: A Ciência da Reconexão", key: "secao5" },
  { path: "/workbook/secao-6", label: "Seção 6: Plano de Ação", key: "secao6" },
  { path: "/workbook/secao-7", label: "Seção 7: Integração", key: "secao7" },
]
