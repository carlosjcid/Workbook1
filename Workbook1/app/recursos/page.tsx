import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Headphones, Video, ArrowLeft } from "lucide-react"

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-800">
            Despertar do Amor Próprio
          </Link>
          <Button asChild variant="ghost">
            <Link href="/workbook/introducao">Workbook</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center mb-8">
          <Button asChild variant="outline" size="sm" className="mr-4">
            <Link href="/workbook/secao-7">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Workbook
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800">Recursos Complementares</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="mr-2 h-5 w-5 text-purple-600" />
                Meditações Guiadas
              </CardTitle>
              <CardDescription>Áudios para apoiar sua prática diária</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Meditação de Autocompaixão (10 min)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Escaneamento Corporal (15 min)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Respiração para Ansiedade (5 min)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Visualização de Amor Próprio (12 min)
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-purple-600" />
                Bibliografia Recomendada
              </CardTitle>
              <CardDescription>Livros para aprofundar seu conhecimento</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">O Poder da Vulnerabilidade</p>
                  <p className="text-sm text-gray-500">Brené Brown</p>
                </li>
                <li>
                  <p className="font-medium">Ame-se: O Poder da Autocompaixão</p>
                  <p className="text-sm text-gray-500">Kristin Neff</p>
                </li>
                <li>
                  <p className="font-medium">Mindfulness: Atenção Plena</p>
                  <p className="text-sm text-gray-500">Mark Williams e Danny Penman</p>
                </li>
                <li>
                  <p className="font-medium">O Corpo Guarda as Marcas</p>
                  <p className="text-sm text-gray-500">Bessel van der Kolk</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-purple-600" />
                Artigos e Materiais de Apoio
              </CardTitle>
              <CardDescription>Conteúdos para expandir sua compreensão</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>A Neurociência do Amor Próprio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Estabelecendo Limites Saudáveis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Práticas Diárias de Autocompaixão
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Guia de Afirmações Positivas
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="mr-2 h-5 w-5 text-purple-600" />
                Conteúdo da Live (06/05)
              </CardTitle>
              <CardDescription>Material da live de encerramento</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Gravação da Live
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Slides da Apresentação
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-600 hover:underline flex items-center">
                    <span className="mr-2">•</span>
                    Perguntas e Respostas
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-purple-600" />
                Glossário de Termos
              </CardTitle>
              <CardDescription>Conceitos importantes para referência</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">Amor Próprio</p>
                  <p className="text-sm text-gray-500">Respeito, aceitação e cuidado consigo mesmo.</p>
                </li>
                <li>
                  <p className="font-medium">Autocompaixão</p>
                  <p className="text-sm text-gray-500">
                    Tratar a si mesmo com a mesma gentileza que trataria um amigo.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Mindfulness</p>
                  <p className="text-sm text-gray-500">Atenção plena ao momento presente, sem julgamento.</p>
                </li>
                <li>
                  <p className="font-medium">Neuroplasticidade</p>
                  <p className="text-sm text-gray-500">
                    Capacidade do cérebro de se reorganizar e formar novas conexões.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="mr-2 h-5 w-5 text-purple-600" />
                Comunidade de Suporte
              </CardTitle>
              <CardDescription>Conecte-se com outras pessoas na jornada</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Compartilhe suas experiências e aprenda com outros participantes do programa em nossa comunidade online.
              </p>
              <Button asChild className="w-full">
                <Link href="#">Acessar Comunidade</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Continuar a Jornada</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Lembre-se que o amor próprio é uma jornada contínua. Continue explorando, praticando e se desenvolvendo além
            deste workbook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/workbook/introducao">Revisar o Workbook</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Página Inicial</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Despertar do Amor Próprio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
