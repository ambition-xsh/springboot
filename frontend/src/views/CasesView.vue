<template>
  <div>
    <section class="page-banner">
      <div class="page-shell">
        <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">CASES</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">案例展示</h1>
        <p class="mt-2 text-sm text-white/70 sm:mt-3">
          部分服务方向示意，真实案例素材后续补充。
        </p>
      </div>
    </section>

    <section class="section-y">
      <div class="page-shell">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <article v-for="c in site.cases" :key="c.id" class="surface-card min-w-0 overflow-hidden">
            <ImagePlaceholder :label="c.category" :hint="'案例图 #' + c.id" />
            <div class="p-4 sm:p-5">
              <span class="text-[11px] font-semibold text-brand sm:text-xs">
                {{ c.category }}
              </span>
              <h2 class="mt-1.5 text-base font-bold sm:mt-2 sm:text-lg">{{ c.title }}</h2>
              <p class="mt-2 text-[13px] leading-6 text-muted sm:text-sm sm:leading-7">
                {{ c.summary }}
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
