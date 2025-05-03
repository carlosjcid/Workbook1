import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Despertar do Amor Próprio</h1>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Bem-vindo(a)!</CardTitle>
            <CardDescription>
              Estamos felizes em tê-lo(a) aqui. Comece sua jornada de autoconhecimento agora mesmo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Este workbook interativo foi projetado para acompanhar sua jornada de desenvolvimento pessoal. Suas
              respostas serão salvas automaticamente para que você possa continuar de onde parou.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild size="lg" className="w-full">
              <Link href="/workbook/introducao">Começar Agora</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
