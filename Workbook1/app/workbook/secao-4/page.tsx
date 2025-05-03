"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useWorkbook } from "@/contexts/workbook-context"
import { Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Secao4Page() {
  const { saveAnswer, getSectionAnswers, markSectionCompleted, isSaving, isLoading: isContextLoading } = useWorkbook()
  const [isLoading, setIsLoading] = useState(true)
  const [answers, setAnswers] = useState({
    experiencia_mindfulness: "",
    beneficios: "",
    desafios: "",
    frequencia: "",
    pratica_preferida: "",
  })

  useEffect(() => {
    const loadAnswers = async () => {
      if (isContextLoading) return

      try {
        const savedAnswers = await getSectionAnswers("secao4")
        setAnswers((prev) => ({
          ...prev,
          ...savedAnswers,
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
    await saveAnswer("secao4", name, value)
  }

  const handleRadioChange = async (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
    await saveAnswer("secao4", field, value)
  }

  const handleComplete = async () => {
    try {
      await markSectionCompleted("secao4")
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
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Seção 4: Práticas de Mindfulness</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Nesta seção, exploraremos práticas de mindfulness (atenção plena) que podem ajudar a fortalecer sua conexão
            consigo mesmo(a) e cultivar o amor próprio.
          </p>

          <p>Esta seção está alinhada com o conteúdo do Post "Práticas de Mindfulness" (03/05) do programa.</p>
        </div>

        <Card className="bg-purple-50 border-purple-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Sua Experiência com Mindfulness</h2>
            <p className="mb-4">
              Você já teve alguma experiência com práticas de mindfulness ou meditação? Se sim, descreva brevemente. Se
              não, o que você já ouviu falar sobre o assunto?
            </p>
            <Textarea
              name="experiencia_mindfulness"
              value={answers.experiencia_mindfulness}
              onChange={handleTextChange}
              placeholder="Compartilhe sua experiência aqui..."
              className="min-h-[120px] mb-6"
            />

            <p className="mb-4">Quais benefícios você espera obter com a prática regular de mindfulness?</p>
            <Textarea
              name="beneficios"
              value={answers.beneficios}
              onChange={handleTextChange}
              placeholder="Ex: redução de estresse, maior autoconhecimento..."
              className="min-h-[120px] mb-6"
            />

            <p className="mb-4">Quais desafios você antecipa encontrar na prática regular de mindfulness?</p>
            <Textarea
              name="desafios"
              value={answers.desafios}
              onChange={handleTextChange}
              placeholder="Ex: falta de tempo, dificuldade em manter o foco..."
              className="min-h-[120px]"
            />
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Compromisso com a Prática</h2>
            <p className="mb-6">Com que frequência você se compromete a praticar mindfulness nas próximas semanas?</p>

            <RadioGroup
              value={answers.frequencia}
              onValueChange={(value) => handleRadioChange("frequencia", value)}
              className="space-y-3"
            >
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="diariamente" id="diariamente" className="mt-1" />
                <Label htmlFor="diariamente" className="font-normal">
                  Diariamente (5-10 minutos)
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="3-4-vezes" id="3-4-vezes" className="mt-1" />
                <Label htmlFor="3-4-vezes" className="font-normal">
                  3-4 vezes por semana (10-15 minutos)
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="1-2-vezes" id="1-2-vezes" className="mt-1" />
                <Label htmlFor="1-2-vezes" className="font-normal">
                  1-2 vezes por semana (15-20 minutos)
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="ocasionalmente" id="ocasionalmente" className="mt-1" />
                <Label htmlFor="ocasionalmente" className="font-normal">
                  Ocasionalmente, quando sentir necessidade
                </Label>
              </div>
            </RadioGroup>

            <p className="mt-6 mb-4">Qual prática de mindfulness mais lhe atrai?</p>

            <RadioGroup
              value={answers.pratica_preferida}
              onValueChange={(value) => handleRadioChange("pratica_preferida", value)}
              className="space-y-3"
            >
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="respiracao" id="respiracao" className="mt-1" />
                <Label htmlFor="respiracao" className="font-normal">
                  Meditação focada na respiração
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="corpo" id="corpo" className="mt-1" />
                <Label htmlFor="corpo" className="font-normal">
                  Escaneamento corporal (body scan)
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="caminhada" id="caminhada" className="mt-1" />
                <Label htmlFor="caminhada" className="font-normal">
                  Caminhada consciente
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="compaixao" id="compaixao" className="mt-1" />
                <Label htmlFor="compaixao" className="font-normal">
                  Meditação de autocompaixão
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="outra" id="outra" className="mt-1" />
                <Label htmlFor="outra" className="font-normal">
                  Outra prática (especifique na reflexão final)
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Prática Guiada</h3>
          <p className="mb-4">Experimente esta breve prática de mindfulness agora:</p>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>Sente-se confortavelmente, com a coluna ereta mas relaxada</li>
            <li>Feche os olhos ou mantenha um olhar suave fixo em um ponto à sua frente</li>
            <li>Respire naturalmente e traga sua atenção para a sensação da respiração</li>
            <li>Observe a respiração entrando e saindo do corpo por 5 ciclos completos</li>
            <li>Perceba como você se sente agora, após este breve momento de atenção plena</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-handwritten text-lg text-center italic text-gray-700">
              "A prática de mindfulness nos convida a estar totalmente presentes, momento a momento, com aceitação e sem
              julgamento."
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/workbook/secao-3">Anterior</Link>
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
            <Link href="/workbook/secao-5">Próxima Seção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
