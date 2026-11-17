<template>
  <nav class="dock fixed inset-x-0 bottom-0 z-40 border-t border-line/80 bg-[#faf8f5]/96 backdrop-blur-xl lg:hidden"
    aria-label="底部导航">
    <ul class="mx-auto grid h-[3.75rem] max-w-lg grid-cols-4">
      <li v-for="item in items" :key="item.path" class="min-w-0">
        <RouterLink :to="item.path"
          class="flex h-full flex-col items-center justify-center gap-0.5 px-0.5 text-[10px] text-muted"
          :class="isActive(item.path) ? '!text-brand' : ''">
          <span class="flex h-6 w-6 items-center justify-center rounded-full"
            :class="isActive(item.path) ? 'bg-brand text-white' : 'text-ink/65'">
            <svg v-if="item.key === 'home'" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
            </svg>
            <svg v-else-if="item.key === 'services'" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            <svg v-else-if="item.key === 'cases'" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18" />
              <path d="M8 14h8" />
              <path d="M8 17h5" />
            </svg>
            <svg v-else class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
          </span>
          <span class="truncate font-medium leading-none">{{ item.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const items = [
  { key: 'home', path: '/', label: '首页' },
  { key: 'services', path: '/services', label: '服务' },
  { key: 'cases', path: '/cases', label: '案例' },
  { key: 'contact', path: '/contact', label: '咨询' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
.dock {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
</style>
