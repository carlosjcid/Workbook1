"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useWorkbook } from "@/contexts/workbook-context"
import { Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Secao3Page() {
  const { saveAnswer, getSectionAnswers, markSectionCompleted, isSaving, isLoading: isContextLoading } = useWorkbook()
  const [isLoading, setIsLoading] = useState(true)
  const [answers, setAnswers] = useState({
    sinais_fisicos: "",
    sinais_emocionais: "",
    sinais_comportamentais: "",
    checklist: [] as string[],
  })

  useEffect(() => {
    const loadAnswers = async () => {
      if (isContextLoading) return

      try {
        const savedAnswers = await getSectionAnswers("secao3")

        // Processar a checklist que é armazenada como string
        const checklist = savedAnswers.checklist ? JSON.parse(savedAnswers.checklist) : []

        setAnswers((prev) => ({
          ...prev,
          ...savedAnswers,
          checklist,
        }))
      } catch (error) {
        console.error("Error loading answers:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (!isContextLoading) {
      loadAnswers()
    }
  }, [getSectionAnswers, isContextLoading])

  const handleTextChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAnswers((prev) => ({ ...prev, [name]: value }))
    await saveAnswer("secao3", name, value)
  }

  const handleCheckboxChange = async (value: string, checked: boolean) => {
    let newChecklist = [...answers.checklist]

    if (checked) {
      newChecklist.push(value)
    } else {
      newChecklist = newChecklist.filter((item) => item !== value)
    }

    setAnswers((prev) => ({ ...prev, checklist: newChecklist }))
    await saveAnswer("secao3", "checklist", JSON.stringify(newChecklist))
  }

  const handleComplete = async () => {
    try {
      await markSectionCompleted("secao3")
      toast({
        title: "Seção concluída!",
        description: "Seu progresso foi salvo com sucesso.",
      })
    } catch (error) {
      console.error("Error marking section as completed:", error)
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao salvar seu progresso.",
        variant: "destructive",
      })
    }
  }

  if (isLoading || isContextLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    )
  }

  return (
    <div>
      <MobileNavigation className="lg:hidden mb-6" />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Seção 3: Sinais de Desconexão</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Nesta seção, vamos explorar os sinais que indicam uma desconexão de si mesmo. Reconhecer esses sinais é o
            primeiro passo para retomar o contato com sua essência.
          </p>

          <p>Esta seção está alinhada com o conteúdo do Post "Sinais de Desconexão" (02/05) do programa.</p>
        </div>

        <Card className="bg-purple-50 border-purple-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Identificando Sinais de Desconexão</h2>
            <p className="mb-4">Quais sinais físicos você percebe quando está desconectado(a) de si mesmo(a)?</p>
            <Textarea
              name="sinais_fisicos"
              value={answers.sinais_fisicos}
              onChange={handleTextChange}
              placeholder="Ex: tensão muscular, dores de cabeça, problemas digestivos..."
              className="min-h-[120px] mb-6"
            />

            <p className="mb-4">Quais sinais emocionais você identifica quando está desconectado(a) de si mesmo(a)?</p>
            <Textarea
              name="sinais_emocionais"
              value={answers.sinais_emocionais}
              onChange={handleTextChange}
              placeholder="Ex: irritabilidade, ansiedade, sensação de vazio..."
              className="min-h-[120px] mb-6"
            />

            <p className="mb-4">Quais comportamentos você adota quando está desconectado(a) de si mesmo(a)?</p>
            <Textarea
              name="sinais_comportamentais"
              value={answers.sinais_comportamentais}
              onChange={handleTextChange}
              placeholder="Ex: procrastinação, isolamento social, uso excessivo de redes sociais..."
              className="min-h-[120px]"
            />
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Checklist de Desconexão</h2>
            <p className="mb-6">Marque os sinais que você tem experimentado com frequência nas últimas semanas:</p>

            <div className="space-y-4">
              {[
                { id: "dificuldade_decisoes", label: "Dificuldade em tomar decisões simples" },
                { id: "autocritica", label: "Autocrítica excessiva" },
                { id: "dificuldade_limites", label: "Dificuldade em estabelecer limites" },
                { id: "busca_aprovacao", label: "Busca constante por aprovação externa" },
                { id: "cansaco", label: "Cansaço persistente mesmo após descanso" },
                { id: "desconexao_corpo", label: "Desconexão com sensações corporais" },
                { id: "dificuldade_prazer", label: "Dificuldade em sentir prazer em atividades antes prazerosas" },
                { id: "pensamentos_ruminantes", label: "Pensamentos ruminantes sobre o passado ou futuro" },
                { id: "sensacao_automatico", label: "Sensação de estar no 'piloto automático'" },
                { id: "dificuldade_presente", label: "Dificuldade em estar presente no momento atual" },
              ].map((item) => (
                <div key={item.id} className="flex items-start space-x-2">
                  <Checkbox
                    id={item.id}
                    checked={answers.checklist.includes(item.id)}
                    onCheckedChange={(checked) => handleCheckboxChange(item.id, checked as boolean)}
                  />
                  <Label htmlFor={item.id} className="font-normal">
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Reflexão Final</h3>
          <p className="mb-4">
            Reconhecer os sinais de desconexão é um ato de amor próprio. Ao identificá-los, você já está dando o
            primeiro passo para retomar o contato consigo mesmo(a).
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-handwritten text-lg text-center italic text-gray-700">
              "A consciência é o primeiro passo para a transformação."
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/workbook/secao-2">Anterior</Link>
          </Button>

          <Button onClick={handleComplete} variant="secondary" disabled={isSaving} className="mx-2">
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Salvando...
              </>
            ) : (
              "Marcar como concluído"
            )}
          </Button>

          <Button asChild>
            <Link href="/workbook/secao-4">Próxima Seção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
