"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useWorkbook } from "@/contexts/workbook-context"
import { Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Secao6Page() {
  const { saveAnswer, getSectionAnswers, markSectionCompleted, isSaving, isLoading: isContextLoading } = useWorkbook()
  const [isLoading, setIsLoading] = useState(true)
  const [answers, setAnswers] = useState({
    objetivo1: "",
    acao1: "",
    objetivo2: "",
    acao2: "",
    objetivo3: "",
    acao3: "",
    afirmacao: "",
    reflexao_final: "",
  })

  useEffect(() => {
    const loadAnswers = async () => {
      if (isContextLoading) return

      try {
        const savedAnswers = await getSectionAnswers("secao6")
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

  const handleTextChange = async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setAnswers((prev) => ({ ...prev, [name]: value }))
    await saveAnswer("secao6", name, value)
  }

  const handleComplete = async () => {
    try {
      await markSectionCompleted("secao6")
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
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Seção 6: Plano de Ação Personalizado</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Nesta seção, você criará um plano de ação personalizado para fortalecer seu amor próprio e manter a conexão
            consigo mesmo(a) no dia a dia.
          </p>

          <p>Esta seção está alinhada com o conteúdo do Post "Plano de Ação Personalizado" (05/05) do programa.</p>
        </div>

        <Card className="bg-purple-50 border-purple-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Seus Objetivos de Amor Próprio</h2>
            <p className="mb-6">
              Defina três objetivos específicos relacionados ao fortalecimento do seu amor próprio e, para cada um, uma
              ação concreta que você pode implementar:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-purple-700 mb-2">Objetivo 1:</h3>
                <Input
                  name="objetivo1"
                  value={answers.objetivo1}
                  onChange={handleTextChange}
                  placeholder="Ex: Melhorar minha relação com meu corpo"
                  className="mb-2"
                />
                <p className="text-sm text-gray-600 mb-2">Ação concreta para alcançar este objetivo:</p>
                <Textarea
                  name="acao1"
                  value={answers.acao1}
                  onChange={handleTextChange}
                  placeholder="Ex: Praticar 5 minutos de apreciação corporal no espelho todas as manhãs"
                  className="min-h-[80px]"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-purple-700 mb-2">Objetivo 2:</h3>
                <Input
                  name="objetivo2"
                  value={answers.objetivo2}
                  onChange={handleTextChange}
                  placeholder="Ex: Reduzir minha autocrítica"
                  className="mb-2"
                />
                <p className="text-sm text-gray-600 mb-2">Ação concreta para alcançar este objetivo:</p>
                <Textarea
                  name="acao2"
                  value={answers.acao2}
                  onChange={handleTextChange}
                  placeholder="Ex: Manter um diário de autocompaixão, registrando 3 momentos diários em que fui gentil comigo mesmo(a)"
                  className="min-h-[80px]"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-purple-700 mb-2">Objetivo 3:</h3>
                <Input
                  name="objetivo3"
                  value={answers.objetivo3}
                  onChange={handleTextChange}
                  placeholder="Ex: Estabelecer limites mais saudáveis nos relacionamentos"
                  className="mb-2"
                />
                <p className="text-sm text-gray-600 mb-2">Ação concreta para alcançar este objetivo:</p>
                <Textarea
                  name="acao3"
                  value={answers.acao3}
                  onChange={handleTextChange}
                  placeholder="Ex: Praticar dizer 'não' pelo menos uma vez por semana quando algo não estiver alinhado com minhas necessidades"
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Sua Afirmação de Amor Próprio</h2>
            <p className="mb-4">
              Crie uma afirmação pessoal de amor próprio que ressoe com você e que possa repetir diariamente:
            </p>
            <Input
              name="afirmacao"
              value={answers.afirmacao}
              onChange={handleTextChange}
              placeholder="Ex: Eu mereço amor e respeito, começando por mim mesmo(a)"
              className="mb-6"
            />

            <p className="mb-4">
              Reflexão final: Como você imagina que sua vida será diferente ao implementar este plano de ação e
              fortalecer seu amor próprio?
            </p>
            <Textarea
              name="reflexao_final"
              value={answers.reflexao_final}
              onChange={handleTextChange}
              placeholder="Compartilhe sua visão aqui..."
              className="min-h-[150px]"
            />
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Dicas para Implementação</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Comece com pequenos passos - mudanças sustentáveis acontecem gradualmente</li>
            <li>Estabeleça lembretes visuais para suas ações (post-its, alarmes no celular)</li>
            <li>Celebre seus progressos, por menores que sejam</li>
            <li>Pratique autocompaixão quando encontrar desafios</li>
            <li>Revise seu plano semanalmente e ajuste conforme necessário</li>
          </ul>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-handwritten text-lg text-center italic text-gray-700">
              "O amor próprio não é um destino, mas uma prática diária."
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/workbook/secao-5">Anterior</Link>
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
            <Link href="/workbook/secao-7">Próxima Seção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
