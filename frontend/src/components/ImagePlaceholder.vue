<template>
  <div class="media-slot flex items-center justify-center px-3 text-center text-muted" :class="ratioClass"
    :style="minHeight ? { minHeight } : undefined">
    <div>
      <p class="text-xs font-medium text-ink/55 sm:text-sm">{{ label }}</p>
      <p v-if="hint" class="mt-1 text-[11px] text-muted/80 sm:text-xs">{{ hint }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: '图片区域预留' },
  hint: { type: String, default: '后续补充素材' },
  ratio: { type: String, default: 'video' },
  minHeight: { type: String, default: '' },
})

const ratioClass = computed(() => {
  if (props.ratio === 'square') return 'aspect-square'
  if (props.ratio === 'wide') return 'aspect-[21/9]'
  if (props.ratio === 'banner') return 'aspect-[3/1]'
  return 'aspect-video'
})
</script>
