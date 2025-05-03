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

export default function Secao5Page() {
  const { saveAnswer, getSectionAnswers, markSectionCompleted, isSaving, isLoading: isContextLoading } = useWorkbook()
  const [isLoading, setIsLoading] = useState(true)
  const [answers, setAnswers] = useState({
    insights_neurociencia: "",
    padroes_identificados: "",
    estrategias_reconexao: "",
  })

  useEffect(() => {
    const loadAnswers = async () => {
      if (isContextLoading) return

      try {
        const savedAnswers = await getSectionAnswers("secao5")
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
    await saveAnswer("secao5", name, value)
  }

  const handleComplete = async () => {
    try {
      await markSectionCompleted("secao5")
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
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Seção 5: A Ciência da Reconexão</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Nesta seção, exploraremos como a neurociência explica os processos de desconexão e reconexão consigo mesmo,
            e como podemos usar esse conhecimento para fortalecer o amor próprio.
          </p>

          <p>Esta seção está alinhada com o conteúdo do Post "A Ciência da Reconexão" (04/05) do programa.</p>
        </div>

        <Card className="bg-blue-50 border-blue-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Neurociência do Amor Próprio</h2>
            <p className="mb-6">
              A neurociência moderna tem revelado como nosso cérebro funciona nos processos de conexão e desconexão
              interna. Alguns pontos importantes:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Neuroplasticidade:</strong> Nosso cérebro tem a capacidade de se reorganizar e formar novas
                conexões neurais ao longo da vida, permitindo que mudemos padrões de pensamento e comportamento.
              </li>
              <li>
                <strong>Sistema Nervoso Autônomo:</strong> Composto pelos sistemas simpático (resposta de luta ou fuga)
                e parassimpático (resposta de relaxamento), influencia diretamente nossa capacidade de autorregulação
                emocional.
              </li>
              <li>
                <strong>Ínsula:</strong> Região cerebral associada à consciência corporal e percepção das sensações
                internas, fundamental para a reconexão consigo mesmo.
              </li>
              <li>
                <strong>Córtex Pré-frontal:</strong> Responsável pelo pensamento racional, tomada de decisões e
                regulação emocional, pode ser fortalecido com práticas de mindfulness.
              </li>
              <li>
                <strong>Circuitos de Recompensa:</strong> Podem ser ativados tanto por comportamentos prejudiciais
                quanto benéficos, sendo importante redirecioná-los para hábitos saudáveis.
              </li>
            </ul>

            <p className="mb-4">
              Quais insights da neurociência você considera mais relevantes para sua jornada de reconexão e amor
              próprio?
            </p>
            <Textarea
              name="insights_neurociencia"
              value={answers.insights_neurociencia}
              onChange={handleTextChange}
              placeholder="Compartilhe suas reflexões aqui..."
              className="min-h-[120px]"
            />
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Identificando Padrões Neurais</h2>
            <p className="mb-4">
              Baseado no que você aprendeu sobre neurociência, identifique padrões de pensamento, emoção ou
              comportamento que você percebe em si mesmo(a) e que podem estar relacionados à desconexão do seu amor
              próprio:
            </p>
            <Textarea
              name="padroes_identificados"
              value={answers.padroes_identificados}
              onChange={handleTextChange}
              placeholder="Ex: tendência a ruminar pensamentos negativos, autocrítica excessiva..."
              className="min-h-[120px] mb-6"
            />

            <p className="mb-4">
              Quais estratégias baseadas na neurociência você gostaria de implementar para fortalecer sua reconexão
              interna?
            </p>
            <Textarea
              name="estrategias_reconexao"
              value={answers.estrategias_reconexao}
              onChange={handleTextChange}
              placeholder="Ex: prática regular de mindfulness, técnicas de respiração para ativar o sistema parassimpático..."
              className="min-h-[120px]"
            />
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Prática de Reconexão Neural</h3>
          <p className="mb-4">
            Experimente esta prática baseada em neurociência para fortalecer a conexão mente-corpo:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>Sente-se confortavelmente e feche os olhos</li>
            <li>Respire profundamente três vezes, expandindo o abdômen</li>
            <li>Escaneie seu corpo lentamente, dos pés à cabeça, notando sensações físicas</li>
            <li>Ao identificar áreas de tensão, envie conscientemente uma respiração relaxante para essa região</li>
            <li>Visualize seu sistema nervoso se acalmando e entrando em equilíbrio</li>
            <li>Permaneça neste estado por 2-3 minutos</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-handwritten text-lg text-center italic text-gray-700">
              "Cada vez que praticamos a reconexão consciente, fortalecemos os circuitos neurais do amor próprio."
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/workbook/secao-4">Anterior</Link>
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
            <Link href="/workbook/secao-6">Próxima Seção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
