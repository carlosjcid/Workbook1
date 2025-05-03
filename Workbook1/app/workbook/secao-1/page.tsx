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

export default function Secao1Page() {
  const { saveAnswer, getSectionAnswers, markSectionCompleted, isSaving, isLoading: isContextLoading } = useWorkbook()
  const [isLoading, setIsLoading] = useState(true)
  const [answers, setAnswers] = useState({
    reflection1: "",
    reflection2: "",
    scale1: "",
    scale2: "",
    scale3: "",
    scale4: "",
    scale5: "",
  })

  useEffect(() => {
    const loadAnswers = async () => {
      if (isContextLoading) return

      try {
        const savedAnswers = await getSectionAnswers("secao1")
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
    await saveAnswer("secao1", name, value)
  }

  const handleRadioChange = async (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
    await saveAnswer("secao1", field, value)
  }

  const handleComplete = async () => {
    try {
      await markSectionCompleted("secao1")
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
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Seção 1: O Reflexo do Amor Próprio</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Nesta primeira seção, vamos explorar como o amor próprio se reflete em nossas vidas e relacionamentos. O
            amor próprio é a base para relacionamentos saudáveis e uma vida plena.
          </p>

          <p>
            Esta seção está alinhada com o conteúdo do Post Carrossel "O Reflexo do Amor Próprio" (30/04) do programa.
          </p>
        </div>

        <Card className="bg-purple-50 border-purple-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Reflexão Inicial</h2>
            <p className="mb-4">
              Quando você pensa em "amor próprio", quais palavras, imagens ou sentimentos vêm à sua mente? Descreva
              livremente:
            </p>
            <Textarea
              name="reflection1"
              value={answers.reflection1}
              onChange={handleTextChange}
              placeholder="Escreva sua reflexão aqui..."
              className="min-h-[120px] mb-4"
            />

            <p className="mb-4">
              Pense em um momento recente em que você sentiu que estava agindo com amor próprio. O que aconteceu e como
              você se sentiu?
            </p>
            <Textarea
              name="reflection2"
              value={answers.reflection2}
              onChange={handleTextChange}
              placeholder="Descreva a situação e seus sentimentos..."
              className="min-h-[120px]"
            />
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Escala de Amor Próprio</h2>
            <p className="mb-6">
              Para cada afirmação abaixo, escolha a opção que melhor representa como você se sente na maior parte do
              tempo:
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-medium mb-3">1. Eu me trato com gentileza e compaixão, mesmo quando cometo erros.</p>
                <RadioGroup
                  value={answers.scale1}
                  onValueChange={(value) => handleRadioChange("scale1", value)}
                  className="flex flex-wrap gap-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem value={num.toString()} id={`scale1-${num}`} />
                      <Label htmlFor={`scale1-${num}`}>{num}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex justify-between text-sm mt-1">
                  <span>Raramente</span>
                  <span>Sempre</span>
                </div>
              </div>

              <div>
                <p className="font-medium mb-3">2. Eu estabeleço limites saudáveis nos meus relacionamentos.</p>
                <RadioGroup
                  value={answers.scale2}
                  onValueChange={(value) => handleRadioChange("scale2", value)}
                  className="flex flex-wrap gap-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem value={num.toString()} id={`scale2-${num}`} />
                      <Label htmlFor={`scale2-${num}`}>{num}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex justify-between text-sm mt-1">
                  <span>Raramente</span>
                  <span>Sempre</span>
                </div>
              </div>

              <div>
                <p className="font-medium mb-3">3. Eu reconheço e valorizo minhas qualidades e conquistas.</p>
                <RadioGroup
                  value={answers.scale3}
                  onValueChange={(value) => handleRadioChange("scale3", value)}
                  className="flex flex-wrap gap-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem value={num.toString()} id={`scale3-${num}`} />
                      <Label htmlFor={`scale3-${num}`}>{num}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex justify-between text-sm mt-1">
                  <span>Raramente</span>
                  <span>Sempre</span>
                </div>
              </div>

              <div>
                <p className="font-medium mb-3">4. Eu priorizo meu bem-estar físico, mental e emocional.</p>
                <RadioGroup
                  value={answers.scale4}
                  onValueChange={(value) => handleRadioChange("scale4", value)}
                  className="flex flex-wrap gap-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem value={num.toString()} id={`scale4-${num}`} />
                      <Label htmlFor={`scale4-${num}`}>{num}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex justify-between text-sm mt-1">
                  <span>Raramente</span>
                  <span>Sempre</span>
                </div>
              </div>

              <div>
                <p className="font-medium mb-3">5. Eu me sinto merecedor(a) de amor, respeito e coisas boas na vida.</p>
                <RadioGroup
                  value={answers.scale5}
                  onValueChange={(value) => handleRadioChange("scale5", value)}
                  className="flex flex-wrap gap-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem value={num.toString()} id={`scale5-${num}`} />
                      <Label htmlFor={`scale5-${num}`}>{num}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex justify-between text-sm mt-1">
                  <span>Raramente</span>
                  <span>Sempre</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Reflexão Final</h3>
          <p className="mb-4">
            Observando suas respostas, quais áreas do amor próprio você percebe que são seus pontos fortes? E quais
            áreas você gostaria de desenvolver mais?
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-handwritten text-lg text-center italic text-gray-700">
              "Reconhecer onde estamos é o primeiro passo para decidir onde queremos chegar."
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/workbook/introducao">Anterior</Link>
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
            <Link href="/workbook/secao-2">Próxima Seção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
