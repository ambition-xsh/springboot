<template>
  <div
    class="contact-art relative overflow-hidden border border-line bg-ink"
    :style="{ aspectRatio }"
  >
    <canvas ref="canvas" class="block h-full w-full" aria-hidden="true" />
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3.5 pt-12 sm:px-5 sm:pb-4"
    >
      <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">
        CONNECT
      </p>
      <p class="mt-1 text-sm font-semibold text-white sm:text-base">{{ title }}</p>
      <p class="mt-0.5 text-[12px] text-white/70 sm:text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '武汉市鼎立传媒有限公司' },
  subtitle: { type: String, default: '专业发声 · 合规护航 · 诉求可见' },
  aspectRatio: { type: String, default: '16 / 9' },
})

const canvas = ref(null)
let raf = 0
let ro
let t0 = 0

function draw(ts) {
  const el = canvas.value
  if (!el) return
  const parent = el.parentElement
  if (!parent) return

  if (!t0) t0 = ts
  const t = (ts - t0) / 1000

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = parent.clientWidth
  const h = parent.clientHeight
  if (w < 2 || h < 2) {
    raf = requestAnimationFrame(draw)
    return
  }

  if (el.width !== Math.floor(w * dpr) || el.height !== Math.floor(h * dpr)) {
    el.width = Math.floor(w * dpr)
    el.height = Math.floor(h * dpr)
    el.style.width = `${w}px`
    el.style.height = `${h}px`
  }

  const ctx = el.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  // 深色品牌底
  const bg = ctx.createLinearGradient(0, 0, w, h)
  bg.addColorStop(0, '#120808')
  bg.addColorStop(0.5, '#1a0c0c')
  bg.addColorStop(1, '#0b0b0d')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)

  // 斜向光带
  ctx.save()
  ctx.translate(w * 0.7, h * 0.2)
  ctx.rotate(-0.5)
  const beam = ctx.createLinearGradient(-w, 0, w, 0)
  beam.addColorStop(0, 'rgba(192,32,38,0)')
  beam.addColorStop(0.5, 'rgba(192,32,38,0.14)')
  beam.addColorStop(1, 'rgba(192,32,38,0)')
  ctx.fillStyle = beam
  ctx.fillRect(-w, -h * 0.15, w * 2, h * 0.3)
  ctx.restore()

  const cx = w * 0.5
  const cy = h * 0.42

  // 声波动画环
  for (let i = 0; i < 5; i++) {
    const phase = (t * 0.55 + i * 0.2) % 1
    const r = 28 + phase * Math.min(w, h) * 0.32
    const alpha = (1 - phase) * 0.35
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(192,32,38,${alpha})`
    ctx.lineWidth = 1.5
    ctx.stroke()
  }

  // 抽象「媒体节点」连线
  const nodes = []
  const n = 8
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n + t * 0.15
    const rr = Math.min(w, h) * 0.26
    nodes.push({
      x: cx + Math.cos(a) * rr,
      y: cy + Math.sin(a) * rr * 0.72,
    })
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.1)'
  ctx.lineWidth = 1
  nodes.forEach((p, i) => {
    const q = nodes[(i + 3) % n]
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(p.x, p.y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(p.x, p.y)
    ctx.lineTo(q.x, q.y)
    ctx.stroke()
  })

  nodes.forEach((p, i) => {
    ctx.beginPath()
    ctx.arc(p.x, p.y, i % 2 ? 3.2 : 2.4, 0, Math.PI * 2)
    ctx.fillStyle = i % 2 ? '#c02026' : 'rgba(255,255,255,0.75)'
    ctx.fill()
  })

  // 中心盾牌简形（合规 / 守护）
  ctx.fillStyle = '#c02026'
  ctx.beginPath()
  ctx.moveTo(cx, cy - 26)
  ctx.bezierCurveTo(cx + 22, cy - 22, cx + 24, cy - 2, cx + 24, cy + 8)
  ctx.bezierCurveTo(cx + 24, cy + 24, cx + 10, cy + 34, cx, cy + 38)
  ctx.bezierCurveTo(cx - 10, cy + 34, cx - 24, cy + 24, cx - 24, cy + 8)
  ctx.bezierCurveTo(cx - 24, cy - 2, cx - 22, cy - 22, cx, cy - 26)
  ctx.fill()

  // 盾内对勾
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 3
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  ctx.moveTo(cx - 10, cy + 2)
  ctx.lineTo(cx - 2, cy + 12)
  ctx.lineTo(cx + 12, cy - 8)
  ctx.stroke()

  // 角落品牌线
  ctx.strokeStyle = 'rgba(192,32,38,0.65)'
  ctx.lineWidth = 2
  const m = 12
  const len = 26
  ;[
    [m, m, 1, 1],
    [w - m, m, -1, 1],
  ].forEach(([x, y, sx, sy]) => {
    ctx.beginPath()
    ctx.moveTo(x, y + len * sy)
    ctx.lineTo(x, y)
    ctx.lineTo(x + len * sx, y)
    ctx.stroke()
  })

  // 底部波形装饰
  ctx.beginPath()
  ctx.moveTo(0, h * 0.78)
  for (let x = 0; x <= w; x += 6) {
    const y =
      h * 0.78 +
      Math.sin(x * 0.035 + t * 2.2) * 6 +
      Math.sin(x * 0.02 - t * 1.4) * 4
    ctx.lineTo(x, y)
  }
  ctx.strokeStyle = 'rgba(192,32,38,0.35)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  raf = requestAnimationFrame(draw)
}

onMounted(() => {
  raf = requestAnimationFrame(draw)
  ro = new ResizeObserver(() => {
    t0 = 0
  })
  if (canvas.value?.parentElement) ro.observe(canvas.value.parentElement)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
})
</script>
