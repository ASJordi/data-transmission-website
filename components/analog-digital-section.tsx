"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AnalogWaveAnimation } from "@/components/analog-wave-animation"
import { DigitalWaveAnimation } from "@/components/digital-wave-animation"
import { Radio, Binary, Phone, Tv, Wifi, Server, HardDrive } from "lucide-react"

export function AnalogDigitalSection() {
  const [activeTab, setActiveTab] = useState("analog")

  const analogExamples = [
    {
      icon: Phone,
      title: "Telefonía tradicional (PSTN)",
      description:
        "Las señales de voz se convierten en ondas eléctricas continuas que varían en amplitud y frecuencia para representar el sonido.",
    },
    {
      icon: Radio,
      title: "Radio AM/FM",
      description:
        "Las ondas de radio transmiten audio modulando la amplitud (AM) o frecuencia (FM) de una onda portadora continua.",
    },
    {
      icon: Tv,
      title: "Televisión analógica",
      description:
        "La señal de video se transmite como ondas continuas que representan brillo, color y audio de forma simultánea.",
    },
  ]

  const digitalExamples = [
    {
      icon: Wifi,
      title: "Redes Ethernet/WiFi",
      description:
        "Los datos se transmiten como secuencias de bits (0s y 1s) codificados en pulsos eléctricos u ondas de radio.",
    },
    {
      icon: Server,
      title: "Comunicación TCP/IP",
      description:
        "Los paquetes de datos viajan como señales digitales, permitiendo detección y corrección de errores.",
    },
    {
      icon: HardDrive,
      title: "Almacenamiento y USB",
      description:
        "La información se guarda y transfiere en formato binario, garantizando integridad y precisión de los datos.",
    },
  ]

  return (
    <section id="analog-digital" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Parte 1
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Transmisión Analógica vs Digital</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprende las diferencias fundamentales entre cómo viajan las señales continuas y discretas en las redes.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="analog" className="gap-2">
              <Radio className="h-4 w-4" />
              Analógica
            </TabsTrigger>
            <TabsTrigger value="digital" className="gap-2">
              <Binary className="h-4 w-4" />
              Digital
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analog" className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Radio className="h-5 w-5 text-primary" />
                  Transmisión Analógica
                </CardTitle>
                <CardDescription>Señales continuas que varían suavemente en el tiempo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-secondary/50 rounded-lg p-4 h-48 flex items-center justify-center">
                  <AnalogWaveAnimation />
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground/90">
                    La <strong className="text-primary">transmisión analógica</strong> utiliza señales que varían de
                    forma continua en amplitud, frecuencia o fase para representar información. Estas señales pueden
                    tomar cualquier valor dentro de un rango determinado, similar a como varía el sonido o la luz en la
                    naturaleza.
                  </p>
                </div>

                <div className="grid gap-4">
                  <h4 className="font-semibold text-accent">Características Principales:</h4>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Señal continua:</strong> Puede tomar infinitos valores entre
                        dos puntos
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Susceptible al ruido:</strong> Se degrada con la distancia y
                        las interferencias
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Ancho de banda:</strong> Requiere más ancho de banda para la
                        misma cantidad de información
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Dificil regeneración:</strong> No puede regenerarse
                        perfectamente, solo amplificarse
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Ejemplos y Aplicaciones</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {analogExamples.map((example, index) => (
                  <Card key={index} className="bg-secondary/30 border-border hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <example.icon className="h-10 w-10 text-primary mb-4" />
                      <h4 className="font-semibold mb-2">{example.title}</h4>
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="digital" className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Binary className="h-5 w-5 text-accent" />
                  Transmisión Digital
                </CardTitle>
                <CardDescription>Señales discretas que representan información en bits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-secondary/50 rounded-lg p-4 h-48 flex items-center justify-center">
                  <DigitalWaveAnimation />
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground/90">
                    La <strong className="text-accent">transmisión digital</strong> codifica la información como una
                    secuencia de valores discretos, típicamente representados como bits (0s y 1s). A diferencia de las
                    señales analógicas, solo existen estados finitos y bien definidos, lo que permite mayor precisión y
                    resistencia al ruido.
                  </p>
                </div>

                <div className="grid gap-4">
                  <h4 className="font-semibold text-accent">Características Principales:</h4>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Señal discreta:</strong> Solo valores definidos (alto/bajo,
                        0/1)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Resistente al ruido:</strong> Puede regenerarse
                        perfectamente en cada repetidor
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Detección de errores:</strong> Permite implementar códigos
                        de corrección de errores
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Multiplexación eficiente:</strong> Múltiples canales pueden
                        compartir el mismo medio
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Ejemplos y Aplicaciones</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {digitalExamples.map((example, index) => (
                  <Card key={index} className="bg-secondary/30 border-border hover:border-accent/50 transition-colors">
                    <CardContent className="pt-6">
                      <example.icon className="h-10 w-10 text-accent mb-4" />
                      <h4 className="font-semibold mb-2">{example.title}</h4>
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
