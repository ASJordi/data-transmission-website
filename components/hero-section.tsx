"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 500
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let offset = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Analog wave (cyan)
      ctx.beginPath()
      ctx.strokeStyle = "rgba(56, 189, 248, 0.6)"
      ctx.lineWidth = 3
      for (let x = 0; x < canvas.width; x++) {
        const y = 150 + Math.sin((x + offset) * 0.02) * 50
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Digital wave (green)
      ctx.beginPath()
      ctx.strokeStyle = "rgba(74, 222, 128, 0.6)"
      ctx.lineWidth = 3
      let digitalY = 350
      for (let x = 0; x < canvas.width; x++) {
        const shouldBeHigh = Math.sin((x + offset) * 0.015) > 0
        const targetY = shouldBeHigh ? 300 : 400
        if (x === 0) {
          digitalY = targetY
          ctx.moveTo(x, digitalY)
        } else {
          if (digitalY !== targetY) {
            ctx.lineTo(x, digitalY)
            digitalY = targetY
          }
          ctx.lineTo(x, digitalY)
        }
      }
      ctx.stroke()

      offset += 2
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Tipos de <span className="text-primary">Transmisión</span> de Datos
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Explora los fundamentos de cómo viaja la información en las redes de computadoras: señales analógicas y
          digitales, transmisión síncrona y asíncrona.
        </p>
        <a
          href="#analog-digital"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          Comenzar a explorar
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
