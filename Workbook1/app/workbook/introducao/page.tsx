import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function IntroducaoPage() {
  return (
    <div>
      <MobileNavigation className="lg:hidden mb-6" />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Introdução</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Bem-vindo ao Workbook "Despertar do Amor Próprio", uma ferramenta de desenvolvimento pessoal projetada para
            acompanhar sua jornada de autoconhecimento iniciada na Semana 1 do programa.
          </p>

          <p>
            Este material interativo permite que você explore, reflita e registre insights sobre sua relação com o amor
            próprio e como ele impacta seus relacionamentos interpessoais.
          </p>

          <h2 className="text-2xl font-bold text-purple-700 mt-8 mb-4">Como usar este workbook</h2>

          <p>
            Cada seção deste workbook corresponde a um dia da Semana 1 do programa "Despertar do Amor Próprio".
            Recomendamos que você:
          </p>

          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Reserve um momento tranquilo do seu dia para trabalhar em cada seção</li>
            <li>Tenha um caderno adicional para anotações complementares, se desejar</li>
            <li>Seja honesto(a) em suas respostas - este é um espaço seguro para sua verdade</li>
            <li>Revisit suas respostas anteriores periodicamente para observar sua evolução</li>
            <li>Compartilhe seus insights na comunidade, se sentir-se confortável</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-purple-50 border-purple-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Estrutura do Workbook</h3>
              <ul className="space-y-2">
                <li>Seção 1: O Reflexo do Amor Próprio</li>
                <li>Seção 2: Estilos de Apego</li>
                <li>Seção 3: Sinais de Desconexão</li>
                <li>Seção 4: Práticas de Mindfulness</li>
                <li>Seção 5: A Ciência da Reconexão</li>
                <li>Seção 6: Plano de Ação Personalizado</li>
                <li>Seção 7: Integração e Próximos Passos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Recursos Complementares</h3>
              <ul className="space-y-2">
                <li>Meditações guiadas</li>
                <li>Bibliografia recomendada</li>
                <li>Glossário de termos</li>
                <li>Comunidade de suporte</li>
                <li>Conteúdo da Live (06/05)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Compromisso Pessoal</h3>
          <p className="mb-4">
            Antes de começar, convido você a fazer um compromisso consigo mesmo(a) para dedicar tempo e atenção a este
            processo de autoconhecimento:
          </p>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="font-handwritten text-lg text-center italic text-gray-700">
              "Eu me comprometo a estar presente nesta jornada de autoconhecimento, honrando meu processo e celebrando
              cada passo em direção ao amor próprio."
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" disabled>
            Anterior
          </Button>
          <Button asChild>
            <Link href="/workbook/secao-1">Próxima Seção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
