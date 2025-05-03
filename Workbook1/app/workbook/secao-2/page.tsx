"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function Secao2Page() {
  const [answers, setAnswers] = useState({
    quiz1: "",
    quiz2: "",
    quiz3: "",
    quiz4: "",
    quiz5: "",
    reflection: "",
  })

  const handleChange = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    handleChange(name, value)
  }

  return (
    <div>
      <MobileNavigation className="lg:hidden mb-6" />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Seção 2: Estilos de Apego</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Nesta seção, vamos explorar os diferentes estilos de apego e como eles influenciam nossos relacionamentos.
            Os padrões de apego se formam na infância e continuam a moldar nossas interações na vida adulta.
          </p>

          <p>Esta seção está alinhada com o Quiz de Estilos de Apego (01/05) do programa.</p>
        </div>

        <Card className="bg-blue-50 border-blue-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Quiz de Estilos de Apego</h2>
            <p className="mb-6">
              Para cada pergunta, escolha a opção que melhor descreve como você geralmente se sente em relacionamentos
              próximos:
            </p>

            <div className="space-y-8">
              <div>
                <p className="font-medium mb-3">
                  1. Como você reage quando alguém próximo a você se torna emocionalmente distante?
                </p>
                <RadioGroup
                  value={answers.quiz1}
                  onValueChange={(value) => handleChange("quiz1", value)}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="ansioso" id="q1-ansioso" className="mt-1" />
                    <Label htmlFor="q1-ansioso" className="font-normal">
                      Fico ansioso(a) e tento me aproximar mais, muitas vezes buscando reasseguramento.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="evitativo" id="q1-evitativo" className="mt-1" />
                    <Label htmlFor="q1-evitativo" className="font-normal">
                      Também me afasto, valorizando minha independência.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="seguro" id="q1-seguro" className="mt-1" />
                    <Label htmlFor="q1-seguro" className="font-normal">
                      Comunico meus sentimentos de forma clara e busco entender o que está acontecendo.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="desorganizado" id="q1-desorganizado" className="mt-1" />
                    <Label htmlFor="q1-desorganizado" className="font-normal">
                      Sinto-me confuso(a) e tenho reações contraditórias, ora me aproximando, ora me afastando.
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <p className="font-medium mb-3">2. Como você lida com a intimidade emocional?</p>
                <RadioGroup
                  value={answers.quiz2}
                  onValueChange={(value) => handleChange("quiz2", value)}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="ansioso" id="q2-ansioso" className="mt-1" />
                    <Label htmlFor="q2-ansioso" className="font-normal">
                      Desejo muita proximidade e às vezes me preocupo que o outro não queira o mesmo nível de
                      intimidade.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="evitativo" id="q2-evitativo" className="mt-1" />
                    <Label htmlFor="q2-evitativo" className="font-normal">
                      Sinto-me desconfortável com muita proximidade e valorizo meu espaço pessoal.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="seguro" id="q2-seguro" className="mt-1" />
                    <Label htmlFor="q2-seguro" className="font-normal">
                      Sinto-me confortável com a intimidade e também com a autonomia, mantendo um equilíbrio saudável.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="desorganizado" id="q2-desorganizado" className="mt-1" />
                    <Label htmlFor="q2-desorganizado" className="font-normal">
                      Tenho sentimentos conflitantes, desejando intimidade mas também temendo-a.
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <p className="font-medium mb-3">3. Como você se sente em relação à dependência dos outros?</p>
                <RadioGroup
                  value={answers.quiz3}
                  onValueChange={(value) => handleChange("quiz3", value)}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="ansioso" id="q3-ansioso" className="mt-1" />
                    <Label htmlFor="q3-ansioso" className="font-normal">
                      Sinto-me confortável dependendo dos outros e gosto quando dependem de mim.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="evitativo" id="q3-evitativo" className="mt-1" />
                    <Label htmlFor="q3-evitativo" className="font-normal">
                      Prefiro não depender dos outros e não gosto quando os outros dependem de mim.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="seguro" id="q3-seguro" className="mt-1" />
                    <Label htmlFor="q3-seguro" className="font-normal">
                      Sinto-me confortável com a interdependência saudável, sabendo que posso contar com os outros e
                      também ser independente.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="desorganizado" id="q3-desorganizado" className="mt-1" />
                    <Label htmlFor="q3-desorganizado" className="font-normal">
                      Tenho dificuldade em encontrar equilíbrio, oscilando entre dependência excessiva e independência
                      extrema.
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <p className="font-medium mb-3">4. Como você lida com conflitos em relacionamentos?</p>
                <RadioGroup
                  value={answers.quiz4}
                  onValueChange={(value) => handleChange("quiz4", value)}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="ansioso" id="q4-ansioso" className="mt-1" />
                    <Label htmlFor="q4-ansioso" className="font-normal">
                      Tendo a me preocupar muito com o conflito e busco resolvê-lo imediatamente, às vezes cedendo para
                      evitar tensão.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="evitativo" id="q4-evitativo" className="mt-1" />
                    <Label htmlFor="q4-evitativo" className="font-normal">
                      Prefiro evitar conflitos e posso me distanciar quando eles surgem.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="seguro" id="q4-seguro" className="mt-1" />
                    <Label htmlFor="q4-seguro" className="font-normal">
                      Abordo conflitos de forma construtiva, expressando meus sentimentos e ouvindo o outro lado.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="desorganizado" id="q4-desorganizado" className="mt-1" />
                    <Label htmlFor="q4-desorganizado" className="font-normal">
                      Tenho reações intensas e imprevisíveis durante conflitos, podendo alternar entre confronto e
                      evitação.
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <p className="font-medium mb-3">5. Como você vê os outros em termos de confiabilidade?</p>
                <RadioGroup
                  value={answers.quiz5}
                  onValueChange={(value) => handleChange("quiz5", value)}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="ansioso" id="q5-ansioso" className="mt-1" />
                    <Label htmlFor="q5-ansioso" className="font-normal">
                      Às vezes me preocupo se posso realmente confiar nas pessoas e se elas estarão lá quando eu
                      precisar.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="evitativo" id="q5-evitativo" className="mt-1" />
                    <Label htmlFor="q5-evitativo" className="font-normal">
                      Prefiro confiar em mim mesmo(a) do que nos outros, pois as pessoas podem te decepcionar.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="seguro" id="q5-seguro" className="mt-1" />
                    <Label htmlFor="q5-seguro" className="font-normal">
                      Geralmente vejo os outros como confiáveis, embora reconheça que nem todos são igualmente
                      confiáveis.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="desorganizado" id="q5-desorganizado" className="mt-1" />
                    <Label htmlFor="q5-desorganizado" className="font-normal">
                      Tenho dificuldade em avaliar a confiabilidade dos outros, alternando entre confiar demais e
                      desconfiar excessivamente.
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-100 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Reflexão sobre seu Estilo de Apego</h2>
            <p className="mb-4">
              Com base nas suas respostas, reflita sobre qual estilo de apego parece predominante em você. Como esse
              estilo influencia seus relacionamentos atuais?
            </p>
            <Textarea
              name="reflection"
              value={answers.reflection}
              onChange={handleTextChange}
              placeholder="Escreva sua reflexão aqui..."
              className="min-h-[150px]"
            />
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Informação Complementar</h3>
          <p className="mb-4">
            <strong>Estilos de Apego:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Apego Seguro:</strong> Pessoas com este estilo geralmente têm relacionamentos saudáveis, sentem-se
              confortáveis com intimidade e autonomia.
            </li>
            <li>
              <strong>Apego Ansioso:</strong> Caracterizado por preocupação com rejeição, busca por reasseguramento e
              medo de abandono.
            </li>
            <li>
              <strong>Apego Evitativo:</strong> Tendência a valorizar independência, desconforto com intimidade e
              dificuldade em confiar nos outros.
            </li>
            <li>
              <strong>Apego Desorganizado:</strong> Combinação de comportamentos ansiosos e evitativos, com reações
              contraditórias e imprevisíveis.
            </li>
          </ul>
          <p>
            Lembre-se: Estilos de apego não são rótulos permanentes. Com consciência e prática, podemos desenvolver
            padrões mais seguros de relacionamento.
          </p>
        </div>

        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/workbook/secao-1">Anterior</Link>
          </Button>
          <Button asChild>
            <Link href="/workbook/secao-3">Próxima Seção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
