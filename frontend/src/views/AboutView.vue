<template>
  <div>
    <section class="page-banner">
      <div class="page-shell">
        <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">ABOUT</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">公司简介</h1>
        <p class="mt-2 text-sm text-white/70 sm:mt-3 sm:text-base">{{ site.company.name }}</p>
      </div>
    </section>

    <section class="section-y">
      <div class="page-shell">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-14">
          <div class="min-w-0">
            <h2 class="text-xl font-bold sm:text-2xl">{{ site.company.heroTitle }}</h2>
            <p class="mt-4 text-[14px] leading-7 text-muted sm:mt-6 sm:text-[15px] sm:leading-8">
              {{ site.company.intro }}
            </p>
            <p class="mt-4 text-[14px] leading-7 text-muted sm:text-[15px] sm:leading-8">
              {{ site.company.closing }}
            </p>
            <dl class="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              <div class="surface-card p-4">
                <dt class="text-xs text-muted">成立时间</dt>
                <dd class="mt-1 text-base font-bold sm:text-lg">{{ site.company.founded }} 年</dd>
              </div>
              <div class="surface-card p-4">
                <dt class="text-xs text-muted">总部</dt>
                <dd class="mt-1 text-base font-bold sm:text-lg">{{ site.company.city }}</dd>
              </div>
              <div class="surface-card p-4 sm:col-span-2">
                <dt class="text-xs text-muted">核心定位</dt>
                <dd class="mt-1 text-base font-bold sm:text-lg">
                  合法媒体曝光 · 维权舆论监督
                </dd>
              </div>
            </dl>
          </div>
          <ImagePlaceholder class="min-w-0" label="公司形象 / 办公环境" ratio="video" min-height="240px" />
        </div>
      </div>
    </section>

    <section class="border-y border-line bg-white/70 section-y">
      <div class="page-shell">
        <PlatformMatrix
          :logos="site.platformLogos"
          title="全媒体矩阵"
          subtitle="覆盖官方门户、垂直自媒体，支撑发稿与舆论扩散。"
          compact
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSiteStore } from '@/stores/site'
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'
import PlatformMatrix from '@/components/PlatformMatrix.vue'

const site = useSiteStore()
</script>
