"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { SyncAnimation } from "@/components/sync-animation"
import { AsyncAnimation } from "@/components/async-animation"
import { Clock, Shuffle, Monitor, Video, Database, Mail, MessageSquare, FileText } from "lucide-react"

export function SyncAsyncSection() {
  const [activeTab, setActiveTab] = useState("sync")

  const syncExamples = [
    {
      icon: Video,
      title: "Videoconferencia en tiempo real",
      description:
        "Requiere sincronización perfecta entre emisor y receptor para mantener audio y video coordinados sin retrasos perceptibles.",
    },
    {
      icon: Monitor,
      title: "Transmisión HDMI/DisplayPort",
      description:
        "Los monitores reciben datos sincronizados por reloj para renderizar cada frame en el momento exacto.",
    },
    {
      icon: Database,
      title: "Buses de sistema (PCIe, SATA)",
      description:
        "Los componentes internos de la computadora se comunican usando señales de reloj compartidas para transferencias de alta velocidad.",
    },
  ]

  const asyncExamples = [
    {
      icon: Mail,
      title: "Correo electrónico (SMTP)",
      description:
        "Los mensajes se envían cuando están disponibles y se reciben cuando el destinatario consulta su bandeja, sin sincronización temporal.",
    },
    {
      icon: MessageSquare,
      title: "Comunicación serial (RS-232, USB)",
      description:
        "Usa bits de inicio y parada para delimitar cada byte, permitiendo transmisión sin reloj compartido.",
    },
    {
      icon: FileText,
      title: "Transferencia de archivos (FTP/HTTP)",
      description:
        "Los datos se envían en paquetes independientes que pueden llegar en diferente orden y ser reordenados.",
    },
  ]

  return (
    <section id="sync-async" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Parte 2
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Transmisión Síncrona vs Asíncrona</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo se coordina el envío y recepción de datos entre dispositivos de red.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="sync" className="gap-2">
              <Clock className="h-4 w-4" />
              Síncrona
            </TabsTrigger>
            <TabsTrigger value="async" className="gap-2">
              <Shuffle className="h-4 w-4" />
              Asíncrona
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sync" className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Transmisión Síncrona
                </CardTitle>
                <CardDescription>Comunicación coordinada por un reloj compartido</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-secondary/50 rounded-lg p-4 h-64 flex items-center justify-center">
                  <SyncAnimation />
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground/90">
                    En la <strong className="text-primary">transmisión síncrona</strong>, el emisor y el receptor
                    comparten una señal de reloj que sincroniza el envío y recepción de datos. Los bits se transmiten en
                    bloques continuos sin bits de inicio o parada entre caracteres, lo que resulta en mayor eficiencia.
                  </p>
                </div>

                <div className="grid gap-4">
                  <h4 className="font-semibold text-primary">Características Principales:</h4>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Reloj compartido:</strong> Emisor y receptor usan la misma
                        referencia temporal
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Transmisión continua:</strong> Los datos fluyen sin
                        interrupciones entre bloques
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Alta eficiencia:</strong> Menos overhead al no necesitar
                        bits de sincronización por carácter
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Mayor velocidad:</strong> Ideal para transferencias de
                        grandes volúmenes de datos
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Ejemplos y Aplicaciones</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {syncExamples.map((example, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
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

          <TabsContent value="async" className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shuffle className="h-5 w-5 text-accent" />
                  Transmisión Asíncrona
                </CardTitle>
                <CardDescription>Comunicación independiente sin reloj compartido</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-secondary/50 rounded-lg p-4 h-64 flex items-center justify-center">
                  <AsyncAnimation />
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground/90">
                    En la <strong className="text-accent">transmisión asíncrona</strong>, cada unidad de datos
                    (generalmente un byte) se envía de forma independiente, precedida por un bit de inicio y seguida por
                    bits de parada. No requiere sincronización continua entre emisor y receptor.
                  </p>
                </div>

                <div className="grid gap-4">
                  <h4 className="font-semibold text-accent">Características Principales:</h4>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Sin reloj compartido:</strong> Cada carácter lleva su propia
                        sincronización
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Bits de control:</strong> Start bit (0) y stop bit(s) (1)
                        delimitan cada byte
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Flexibilidad:</strong> Permite intervalos variables entre
                        transmisiones
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground">Simplicidad:</strong> Hardware más simple, ideal para
                        comunicaciones de baja velocidad
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Ejemplos y Aplicaciones</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {asyncExamples.map((example, index) => (
                  <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors">
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
