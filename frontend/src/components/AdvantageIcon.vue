<template>
  <span
    class="inline-flex items-center justify-center rounded-full bg-brand-soft text-brand"
    :class="sizeClass"
    aria-hidden="true"
  >
    <!-- 巨量资源：矩阵节点 -->
    <svg
      v-if="name === 'resource'"
      class="h-[55%] w-[55%]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M8 7.2 10.2 10.2" />
      <path d="M16 7.2 13.8 10.2" />
      <path d="M8 16.8 10.2 13.8" />
      <path d="M16 16.8 13.8 13.8" />
    </svg>

    <!-- 定制方案：文档 + 笔 -->
    <svg
      v-else-if="name === 'custom'"
      class="h-[55%] w-[55%]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 3.5h6.5L19 8v12.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
      <path d="M14.5 3.5V8H19" />
      <path d="M10 13h5" />
      <path d="M10 16.5h3.5" />
      <path d="M15.2 18.8 19.5 14.5l1.4 1.4-4.3 4.3H15.2v-1.4z" />
    </svg>

    <!-- 专业团队：人物 -->
    <svg
      v-else-if="name === 'team'"
      class="h-[55%] w-[55%]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="16.5" cy="9" r="2" />
      <path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8S14 16 14.6 19" />
      <path d="M14.2 14.8c1.4-.6 3-.6 4.5.2 1.4.8 2.2 2.2 2.5 4" />
    </svg>

    <!-- 隐私保护：盾牌 -->
    <svg
      v-else
      class="h-[55%] w-[55%]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 3.2 19 6.2v5.2c0 4.4-2.9 7.6-7 9.1-4.1-1.5-7-4.7-7-9.1V6.2L12 3.2z" />
      <path d="M9.2 12.2 11.1 14l3.8-4" />
    </svg>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
  },
})

const sizeClass = computed(() => {
  if (props.size === 'lg') return 'h-14 w-14 sm:h-16 sm:w-16'
  if (props.size === 'sm') return 'h-10 w-10'
  return 'h-12 w-12 sm:h-14 sm:w-14'
})
</script>
