<template>
  <div>
    <section class="page-banner">
      <div class="page-shell">
        <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">SERVICE</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">服务范围</h1>
        <p class="mt-2 max-w-2xl text-sm text-white/70 sm:mt-3 sm:text-base">
          采编、审核、发稿、媒体人调研 —— 全流程合规落地的维权舆论服务。
        </p>
      </div>
    </section>

    <section class="section-y">
      <div class="page-shell">
        <div class="grid gap-5 sm:gap-6 md:gap-8">
          <article v-for="(m, i) in site.modules" :key="m.key" class="surface-card min-w-0 p-4 sm:p-6 md:p-8">
            <div class="min-w-0">
              <p class="font-display text-[10px] tracking-[0.25em] text-brand sm:text-xs">
                {{ m.en }} · 0{{ i + 1 }}
              </p>
              <h2 class="mt-2 text-xl font-bold sm:text-2xl">{{ m.title }}</h2>
              <p class="mt-2 text-sm font-semibold text-ink/80 sm:text-base">
                {{ m.subtitle }}
              </p>
              <p class="mt-3 text-[13px] leading-6 text-muted sm:mt-4 sm:text-[15px] sm:leading-8">
                {{ m.desc }}
              </p>
            </div>
            <!-- 配图暂隐，后续需要再放开
            <ImagePlaceholder class="min-w-0" :label="`${m.title}配图`" ratio="video" />
            -->
          </article>
        </div>
      </div>
    </section>

    <section class="border-y border-line bg-white/70 section-y">
      <div class="page-shell">
        <h2 class="text-xl font-bold sm:text-2xl">服务优势</h2>
        <div class="mt-5 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-4">
          <article v-for="a in site.advantages" :key="a.key"
            class="surface-card flex min-w-0 flex-col items-center p-4 text-center sm:p-6">
            <AdvantageIcon :name="a.key" />
            <h3 class="mt-3 text-sm font-bold sm:mt-4 sm:text-lg">{{ a.title }}</h3>
            <p class="mt-2 text-[12px] leading-5 text-muted sm:text-sm sm:leading-6">
              {{ a.desc }}
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSiteStore } from '@/stores/site'
import AdvantageIcon from '@/components/AdvantageIcon.vue'
// import ImagePlaceholder from '@/components/ImagePlaceholder.vue'

const site = useSiteStore()
</script>
