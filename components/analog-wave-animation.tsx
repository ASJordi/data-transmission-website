"use client"

import { useEffect, useRef } from "react"

export function AnalogWaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 150

    let animationId: number
    let offset = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1
      for (let y = 0; y <= canvas.height; y += 30) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Center line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)
      ctx.lineTo(canvas.width, canvas.height / 2)
      ctx.stroke()

      // Analog wave
      ctx.beginPath()
      ctx.strokeStyle = "#38bdf8"
      ctx.lineWidth = 3
      ctx.shadowBlur = 10
      ctx.shadowColor = "#38bdf8"

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x + offset) * 0.03) * 40 + Math.sin((x + offset) * 0.01) * 15
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // Labels
      ctx.fillStyle = "#38bdf8"
      ctx.font = "12px sans-serif"
      ctx.fillText("Señal Analógica (continua)", 10, 20)

      offset += 1.5
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return <canvas ref={canvasRef} className="w-full max-w-[600px] h-auto" />
}
