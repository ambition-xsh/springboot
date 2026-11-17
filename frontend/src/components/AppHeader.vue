<template>
  <header class="sticky top-0 z-50 border-b border-line/70 bg-[#faf8f5]/95 backdrop-blur-xl">
    <div class="page-shell flex h-14 items-center justify-between gap-3 sm:h-16 md:h-20 lg:gap-6">
      <RouterLink to="/" class="site-logo" @click="closeMenu">
        <img :src="logo" alt="武汉市鼎立传媒有限公司" class="site-logo__img" />
      </RouterLink>

      <nav class="hidden min-w-0 flex-1 items-center justify-end gap-1 lg:flex">
        <RouterLink v-for="item in site.navItems" :key="item.path" :to="item.path" class="nav-link"
          :class="{ 'nav-link--active': isNavActive(item.path) }">
          {{ item.name }}
        </RouterLink>
        <RouterLink to="/contact" class="nav-cta ml-2">预约咨询</RouterLink>
      </nav>

      <button type="button"
        class="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-white sm:h-10 sm:w-10 lg:hidden"
        :aria-expanded="site.mobileOpen" aria-label="菜单" @click="site.toggleMobile()">
        <span class="relative block h-3.5 w-4">
          <span class="absolute left-0 top-0 block h-0.5 w-full bg-ink transition-transform duration-200"
            :class="site.mobileOpen ? 'translate-y-[6px] rotate-45' : ''" />
          <span class="absolute left-0 top-[6px] block h-0.5 w-full bg-ink transition-opacity duration-200"
            :class="site.mobileOpen ? 'opacity-0' : ''" />
          <span class="absolute left-0 top-[12px] block h-0.5 w-full bg-ink transition-transform duration-200"
            :class="site.mobileOpen ? '-translate-y-[6px] -rotate-45' : ''" />
        </span>
      </button>
    </div>

    <Teleport to="body">
      <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100"
        leave-active-class="transition duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="site.mobileOpen" class="fixed inset-0 z-[60] lg:hidden">
          <button type="button" class="absolute inset-0 bg-ink/45 backdrop-blur-[2px]" aria-label="关闭菜单"
            @click="closeMenu" />
          <aside class="absolute right-0 top-0 flex h-full w-[min(88vw,300px)] flex-col bg-[#faf8f5] shadow-2xl">
            <div class="flex items-center justify-between border-b border-line px-4 py-3.5">
              <p class="font-display text-xs tracking-[0.25em] text-brand">MENU</p>
              <button type="button" class="flex h-9 w-9 items-center justify-center border border-line text-lg"
                aria-label="关闭" @click="closeMenu">
                ×
              </button>
            </div>
            <nav class="flex-1 overflow-y-auto px-3 py-2">
              <RouterLink v-for="item in site.navItems" :key="item.path" :to="item.path"
                class="mb-1 flex items-center justify-between rounded-sm px-3 py-3.5 text-[15px] text-ink"
                :class="{ '!bg-brand !text-white': isNavActive(item.path) }" @click="closeMenu">
                <span>{{ item.name }}</span>
                <span class="text-xs opacity-50">›</span>
              </RouterLink>
            </nav>
            <div class="border-t border-line p-4" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
              <RouterLink to="/contact" class="btn-primary w-full" @click="closeMenu">
                立即咨询
              </RouterLink>
            </div>
          </aside>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { watch, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useSiteStore } from '@/stores/site'
import logo from '@/assets/logo.png'

const site = useSiteStore()
const route = useRoute()

function isNavActive(path) {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(`${path}/`)
}

function closeMenu() {
  site.closeMobile()
}

watch(
  () => site.mobileOpen,
  (open) => {
    document.body.classList.toggle('is-locked', open)
  },
)

onBeforeUnmount(() => {
  document.body.classList.remove('is-locked')
})
</script>

<style scoped>
/* 给汉堡按钮留位，避免 logo 把右侧挤没 */
.site-logo {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  height: 2.5rem;
  max-width: calc(100% - 3rem);
}

@media (min-width: 640px) {
  .site-logo {
    height: 2.85rem;
    max-width: calc(100% - 3.25rem);
  }
}

@media (min-width: 768px) {
  .site-logo {
    height: 3.5rem;
    max-width: 420px;
    flex: 0 0 auto;
  }
}

@media (min-width: 1024px) {
  .site-logo {
    height: 4rem;
    max-width: 480px;
  }
}

.site-logo__img {
  display: block;
  width: auto;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: left center;
}

.nav-link {
  flex-shrink: 0;
  border-radius: 2px;
  padding: 0.45rem 0.7rem;
  font-size: 14px;
  color: rgba(20, 20, 20, 0.78);
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav-link:hover,
.nav-link--active {
  background: var(--color-brand);
  color: #fff;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  background: var(--color-brand);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 0.5rem 0.9rem;
  white-space: nowrap;
}

.nav-cta:hover {
  background: var(--color-brand-dark);
}

@media (min-width: 1280px) {
  .nav-link {
    padding: 0.5rem 0.85rem;
    font-size: 15px;
  }
}
</style>
