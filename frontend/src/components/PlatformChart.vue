<template>
  <div ref="el" class="mt-2 h-[280px] w-full sm:mt-4 sm:h-[380px] md:h-[400px]"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  platforms: {
    type: Array,
    required: true,
  },
})

const el = ref(null)
let chart
let echarts

function isMobile() {
  return window.matchMedia('(max-width: 639px)').matches
}

async function ensureChart() {
  if (!el.value) return
  if (!echarts) {
    echarts = await import('echarts')
  }
  if (!chart) chart = echarts.init(el.value)
}

async function render() {
  await ensureChart()
  if (!chart) return

  const mobile = isMobile()
  const names = props.platforms.map((p) => p.name)
  const values = props.platforms.map((p) => ({
    value: p.value,
    itemStyle: {
      color: p.color,
      borderRadius: mobile ? [0, 4, 4, 0] : [4, 4, 0, 0],
    },
  }))

  if (mobile) {
    chart.setOption(
      {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          formatter(params) {
            const p = params[0]
            const item = props.platforms[p.dataIndex]
            return `${item.name}<br/>${item.tip}`
          },
        },
        grid: { left: 56, right: 28, top: 8, bottom: 8 },
        xAxis: {
          type: 'value',
          axisLabel: { color: '#5c5c5c', fontSize: 10 },
          splitLine: { lineStyle: { color: '#eeeae4' } },
        },
        yAxis: {
          type: 'category',
          data: names,
          axisLabel: { color: '#5c5c5c', fontSize: 11 },
          axisLine: { lineStyle: { color: '#e6e2de' } },
        },
        series: [
          {
            type: 'bar',
            barWidth: '55%',
            data: values,
          },
        ],
      },
      true,
    )
  } else {
    chart.setOption(
      {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          formatter(params) {
            const p = params[0]
            const item = props.platforms[p.dataIndex]
            return `${item.name}<br/>参考规模：${item.tip}`
          },
        },
        grid: { left: 48, right: 16, top: 28, bottom: 52 },
        xAxis: {
          type: 'category',
          data: names,
          axisLabel: { color: '#5c5c5c', interval: 0, rotate: 18, fontSize: 11 },
          axisLine: { lineStyle: { color: '#e6e2de' } },
        },
        yAxis: {
          type: 'value',
          name: '参考（亿）',
          nameTextStyle: { color: '#5c5c5c', fontSize: 11 },
          axisLabel: { color: '#5c5c5c' },
          splitLine: { lineStyle: { color: '#eeeae4' } },
        },
        series: [
          {
            type: 'bar',
            barWidth: '42%',
            data: values,
          },
        ],
      },
      true,
    )
  }
}

function onResize() {
  render()
  chart?.resize()
}

onMounted(() => {
  render()
  window.addEventListener('resize', onResize)
})

watch(
  () => props.platforms,
  () => render(),
  { deep: true },
)

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  chart?.dispose()
  chart = null
})
</script>
