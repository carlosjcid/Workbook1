import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative w-32 h-32 mb-6">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Despertar do Amor Próprio"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">Despertar do Amor Próprio</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Uma jornada de autoconhecimento e desenvolvimento pessoal para transformar sua relação consigo mesmo e com
            os outros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-purple-100 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">7 Seções Interativas</h3>
              <p className="text-gray-600">
                Explore os conceitos apresentados na Semana 1 através de exercícios práticos e reflexões guiadas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-purple-100 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Salve Seu Progresso</h3>
              <p className="text-gray-600">
                Registre seus insights e reflexões com a possibilidade de salvar e revisitar seu trabalho a qualquer
                momento.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-purple-100 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Recursos Complementares</h3>
              <p className="text-gray-600">
                Acesse meditações guiadas, leituras recomendadas e outros materiais para enriquecer sua experiência.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
            Pronto para iniciar sua jornada de autoconhecimento e transformação pessoal?
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/workbook/introducao">Começar Agora</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
