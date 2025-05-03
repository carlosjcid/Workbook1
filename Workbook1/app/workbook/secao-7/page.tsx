"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useWorkbook } from "@/contexts/workbook-context"
import { Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Secao7Page() {
  const { saveAnswer, getSectionAnswers, markSectionCompleted, isSaving, isLoading: isContextLoading } = useWorkbook()
  const [isLoading, setIsLoading] = useState(true)
  const [answers, setAnswers] = useState({
    aprendizados: "",
    desafios: "",
    proximos_passos: "",
    carta: "",
  })

  useEffect(() => {
    const loadAnswers = async () => {
      if (isContextLoading) return

      try {
        const savedAnswers = await getSectionAnswers("secao7")
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
    await saveAnswer("secao7", name, value)
  }

  const handleComplete = async () => {
    try {
      await markSectionCompleted("secao7")
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
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Seção 7: Integração e Próximos Passos</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Nesta seção final, você integrará os aprendizados das seções anteriores e definirá seus próximos passos na
            jornada do amor próprio.
          </p>

          <p>Esta seção está alinhada com o conteúdo da Live de Encerramento (06/05) do programa.</p>
        </div>

        <Card className="bg-purple-50 border-purple-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Integrando a Jornada</h2>
            <p className="mb-4">Quais foram seus principais aprendizados ao longo deste workbook?</p>
            <Textarea
              name="aprendizados"
              value={answers.aprendizados}
              onChange={handleTextChange}
              placeholder="Compartilhe seus insights mais significativos..."
              className="min-h-[120px] mb-6"
            />

            <p className="mb-4">Quais desafios você ainda percebe em sua relação com o amor próprio?</p>
            <Textarea
              name="desafios"
              value={answers.desafios}
              onChange={handleTextChange}
              placeholder="Descreva os aspectos que ainda deseja trabalhar..."
              className="min-h-[120px] mb-6"
            />

            <p className="mb-4">Quais serão seus próximos passos após concluir este workbook?</p>
            <Textarea
              name="proximos_passos"
              value={answers.proximos_passos}
              onChange={handleTextChange}
              placeholder="Ex: continuar com práticas diárias, buscar terapia, participar de grupos de apoio..."
              className="min-h-[120px]"
            />
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Carta para o Seu Futuro Eu</h2>
            <p className="mb-4">
              Escreva uma carta para você mesmo(a) daqui a 3 meses. Inclua palavras de encorajamento, lembretes sobre o
              que aprendeu e suas esperanças para o futuro.
            </p>
            <Textarea
              name="carta"
              value={answers.carta}
              onChange={handleTextChange}
              placeholder="Querido(a) eu do futuro..."
              className="min-h-[250px]"
            />
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Celebrando Sua Jornada</h3>
          <p className="mb-4">
            Parabéns por completar o workbook "Despertar do Amor Próprio"! Este é um marco significativo em sua jornada
            de autoconhecimento e desenvolvimento pessoal.
          </p>
          <p className="mb-4">
            Lembre-se que o amor próprio é uma prática contínua, não um destino final. Haverá dias mais fáceis e dias
            mais desafiadores, mas cada passo que você dá em direção ao amor próprio é valioso.
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-handwritten text-lg text-center italic text-gray-700">
              "O maior ato de coragem é continuar escolhendo a si mesmo(a), dia após dia."
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/workbook/secao-6">Anterior</Link>
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
            <Link href="/recursos">Recursos Complementares</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
