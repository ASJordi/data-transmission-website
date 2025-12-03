"use client"

import { useEffect, useRef } from "react"

export function AsyncAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 220

    let animationId: number
    let frame = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Title
      ctx.fillStyle = "#4ade80"
      ctx.font = "12px sans-serif"
      ctx.fillText("Transmisión Asíncrona - Bits de Start/Stop", 10, 20)

      // Idle line
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      ctx.font = "10px sans-serif"
      ctx.fillText("LÍNEA", 10, 75)

      const bitWidth = 35
      // Pattern: IDLE, START, D0, D1, D2, D3, D4, D5, D6, D7, STOP, IDLE
      // Example byte: 01001011 (ASCII 'K')
      const bytePattern = [
        { value: 1, label: "IDLE" },
        { value: 0, label: "START" },
        { value: 1, label: "1" },
        { value: 1, label: "0" },
        { value: 0, label: "0" },
        { value: 1, label: "1" },
        { value: 0, label: "0" },
        { value: 0, label: "0" },
        { value: 1, label: "1" },
        { value: 0, label: "0" },
        { value: 1, label: "STOP" },
        { value: 1, label: "IDLE" },
      ]

      const highY = 55
      const lowY = 95
      const offset = frame % (bytePattern.length * bitWidth)

      ctx.beginPath()
      ctx.strokeStyle = "#4ade80"
      ctx.lineWidth = 2
      ctx.shadowBlur = 5
      ctx.shadowColor = "#4ade80"

      let prevY = highY
      for (let i = 0; i < bytePattern.length * 2; i++) {
        const patternIndex = i % bytePattern.length
        const x = 60 + i * bitWidth - offset

        if (x < 40 || x > canvas.width) continue

        const currentY = bytePattern[patternIndex].value ? highY : lowY

        if (x === 60 - offset || prevY === 0) {
          ctx.moveTo(Math.max(60, x), currentY)
        } else if (currentY !== prevY) {
          ctx.lineTo(x, prevY)
          ctx.lineTo(x, currentY)
        }
        ctx.lineTo(Math.min(canvas.width - 20, x + bitWidth), currentY)
        prevY = currentY
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // Labels for bits
      ctx.font = "9px sans-serif"
      for (let i = 0; i < bytePattern.length * 2; i++) {
        const patternIndex = i % bytePattern.length
        const x = 60 + i * bitWidth - offset + bitWidth / 2

        if (x < 60 || x > canvas.width - 40) continue

        const bit = bytePattern[patternIndex]
        if (bit.label === "START") {
          ctx.fillStyle = "#fbbf24"
          ctx.fillText("START", x - 15, 115)
        } else if (bit.label === "STOP") {
          ctx.fillStyle = "#f87171"
          ctx.fillText("STOP", x - 12, 115)
        } else if (bit.label === "IDLE") {
          ctx.fillStyle = "rgba(255,255,255,0.4)"
          ctx.fillText("IDLE", x - 10, 115)
        } else {
          ctx.fillStyle = "#4ade80"
          ctx.fillText(`D${patternIndex - 2}`, x - 5, 115)
        }
      }

      // Frame structure diagram
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.font = "11px sans-serif"
      ctx.fillText("Estructura de trama:", 10, 145)

      const frameY = 155
      const frameStartX = 120
      const segmentWidth = 60

      // Start bit
      ctx.fillStyle = "#fbbf24"
      ctx.fillRect(frameStartX, frameY, 40, 25)
      ctx.fillStyle = "#000"
      ctx.font = "9px sans-serif"
      ctx.fillText("Start", frameStartX + 7, frameY + 16)

      // Data bits
      ctx.fillStyle = "#4ade80"
      ctx.fillRect(frameStartX + 45, frameY, 200, 25)
      ctx.fillStyle = "#000"
      ctx.fillText("8 bits de datos", frameStartX + 100, frameY + 16)

      // Stop bit
      ctx.fillStyle = "#f87171"
      ctx.fillRect(frameStartX + 250, frameY, 40, 25)
      ctx.fillStyle = "#000"
      ctx.fillText("Stop", frameStartX + 257, frameY + 16)

      // Idle
      ctx.fillStyle = "rgba(255,255,255,0.2)"
      ctx.fillRect(frameStartX + 295, frameY, 50, 25)
      ctx.fillStyle = "rgba(255,255,255,0.7)"
      ctx.fillText("Idle...", frameStartX + 305, frameY + 16)

      // Legend
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      ctx.font = "10px sans-serif"
      ctx.fillText("Alto = 1 (marca)", canvas.width - 100, 55)
      ctx.fillText("Bajo = 0 (espacio)", canvas.width - 100, 100)

      frame += 0.8
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return <canvas ref={canvasRef} className="w-full max-w-[600px] h-auto" />
}
