<template>
  <div>
    <section class="page-banner">
      <div class="page-shell">
        <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">NEWS</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">新闻资讯</h1>
        <p class="mt-2 text-sm text-white/70 sm:mt-3">公司动态与行业观察。</p>
      </div>
    </section>

    <section class="section-y">
      <div class="page-shell">
        <div class="grid gap-4 sm:gap-5 md:gap-6">
          <article v-for="n in site.newsList" :key="n.id"
            class="surface-card grid min-w-0 gap-4 p-4 sm:gap-5 sm:p-5 md:grid-cols-[220px_1fr] md:p-6">
            <ImagePlaceholder label="资讯配图" :hint="n.date" ratio="video" />
            <div class="flex min-w-0 flex-col justify-center">
              <time class="text-[11px] text-muted sm:text-xs">{{ n.date }}</time>
              <h2 class="mt-1.5 text-lg font-bold sm:mt-2 sm:text-xl">{{ n.title }}</h2>
              <p class="mt-2 text-[13px] leading-6 text-muted sm:mt-3 sm:text-sm sm:leading-7">
                {{ n.summary }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSiteStore } from '@/stores/site'
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'

const site = useSiteStore()
</script>
