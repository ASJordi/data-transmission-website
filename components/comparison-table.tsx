"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Radio, Binary, Clock, Shuffle } from "lucide-react"

export function ComparisonTable() {
  const signalComparison = [
    { feature: "Tipo de señal", analog: "Continua", digital: "Discreta" },
    { feature: "Valores posibles", analog: "Infinitos", digital: "Finitos (0 y 1)" },
    { feature: "Resistencia al ruido", analog: "Baja", digital: "Alta" },
    { feature: "Regeneración", analog: "Solo amplificación", digital: "Regeneración perfecta" },
    { feature: "Detección de errores", analog: "Difícil", digital: "Fácil" },
    { feature: "Ancho de banda", analog: "Mayor requerido", digital: "Más eficiente" },
    { feature: "Costo de implementación", analog: "Menor (legacy)", digital: "Mayor inicial, menor operativo" },
  ]

  const timingComparison = [
    { feature: "Sincronización", sync: "Reloj compartido", async: "Bits de control" },
    { feature: "Eficiencia", sync: "Alta (menos overhead)", async: "Menor (2-3 bits extra por byte)" },
    { feature: "Velocidad típica", sync: "Alta velocidad", async: "Baja a media velocidad" },
    { feature: "Complejidad de hardware", sync: "Mayor", async: "Menor" },
    { feature: "Tolerancia a intervalos", sync: "Continuo requerido", async: "Intervalos variables OK" },
    { feature: "Uso en redes modernas", sync: "Backbone, multimedia", async: "Serial, IoT, terminales" },
  ]

  return (
    <section id="comparison" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Comparación
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Tablas Comparativas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resumen de las diferencias clave entre los tipos de transmisión
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Analog vs Digital */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Radio className="h-5 w-5 text-primary" />
                <span className="text-primary">Analógica</span>
                <span className="text-muted-foreground mx-2">vs</span>
                <Binary className="h-5 w-5 text-accent" />
                <span className="text-accent">Digital</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Característica</th>
                      <th className="text-left py-3 px-2 text-primary font-medium">Analógica</th>
                      <th className="text-left py-3 px-2 text-accent font-medium">Digital</th>
                    </tr>
                  </thead>
                  <tbody>
                    {signalComparison.map((row, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-3 px-2 font-medium">{row.feature}</td>
                        <td className="py-3 px-2 text-muted-foreground">{row.analog}</td>
                        <td className="py-3 px-2 text-muted-foreground">{row.digital}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Sync vs Async */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-primary">Síncrona</span>
                <span className="text-muted-foreground mx-2">vs</span>
                <Shuffle className="h-5 w-5 text-accent" />
                <span className="text-accent">Asíncrona</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-muted-foreground font-medium">Característica</th>
                      <th className="text-left py-3 px-2 text-primary font-medium">Síncrona</th>
                      <th className="text-left py-3 px-2 text-accent font-medium">Asíncrona</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timingComparison.map((row, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-3 px-2 font-medium">{row.feature}</td>
                        <td className="py-3 px-2 text-muted-foreground">{row.sync}</td>
                        <td className="py-3 px-2 text-muted-foreground">{row.async}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key takeaways */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="bg-primary/10 border-primary/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <Check className="h-5 w-5" />
                Cuándo usar Digital + Síncrona
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Transferencias de alta velocidad (Gigabit Ethernet)</li>
                <li>• Streaming de video/audio en tiempo real</li>
                <li>• Comunicación entre componentes de hardware</li>
                <li>• Redes de área local de alto rendimiento</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-accent/10 border-accent/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-accent mb-3 flex items-center gap-2">
                <Check className="h-5 w-5" />
                Cuándo usar Digital + Asíncrona
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Comunicación serial con dispositivos (Arduino, sensores)</li>
                <li>• Protocolos de red como TCP/IP</li>
                <li>• Sistemas de mensajería y email</li>
                <li>• Dispositivos IoT de bajo consumo</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
