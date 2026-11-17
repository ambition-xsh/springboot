<template>
  <div>
    <section class="relative isolate overflow-hidden bg-ink text-white">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_10%,rgba(192,32,38,0.5),transparent_50%),linear-gradient(155deg,#070707_0%,#1a1010_48%,#0c0c0c_100%)]" />
      <div class="absolute inset-0 opacity-[0.18]" style="
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        " />

      <div
        class="page-shell relative grid items-center gap-6 py-8 sm:gap-8 sm:py-12 lg:min-h-[68vh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
        <div class="order-1 min-w-0">
          <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs sm:tracking-[0.35em]">
            {{ site.company.en }} · WUHAN
          </p>
          <h1 class="mt-2 text-[1.55rem] font-black leading-[1.25] sm:mt-3 sm:text-4xl lg:text-5xl">
            {{ site.company.heroTitle }}
          </h1>
          <p class="mt-3 max-w-xl text-[13px] leading-6 text-white/75 sm:mt-5 sm:text-base sm:leading-8">
            {{ site.company.intro }}
          </p>
          <div class="mt-5 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
            <RouterLink to="/contact" class="btn-primary w-full sm:w-auto">
              预约咨询
            </RouterLink>
            <RouterLink to="/services" class="btn-ghost w-full sm:w-auto">
              服务模块
            </RouterLink>
          </div>
        </div>

        <div class="order-2 lg:justify-self-end">
          <div
            class="mx-auto w-full max-w-[260px] overflow-hidden border border-white/10 bg-black/40 p-2.5 sm:max-w-md sm:p-5 lg:mx-0 lg:max-w-none">
            <img :src="logo" alt="鼎立传媒标识" class="mx-auto h-auto max-h-28 w-full object-contain sm:max-h-none" />
          </div>
        </div>
      </div>
    </section>

    <!-- 四大模块 -->
    <section class="section-y">
      <div class="page-shell">
        <div class="mb-5 flex items-end justify-between gap-3 sm:mb-10">
          <div>
            <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">
              MODULES
            </p>
            <h2 class="mt-1.5 text-xl font-bold sm:text-3xl">业务模块</h2>
          </div>
          <RouterLink to="/services" class="shrink-0 text-xs font-semibold text-brand sm:text-sm">
            全部 →
          </RouterLink>
        </div>
        <div class="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          <article v-for="(m, i) in site.modules" :key="m.key"
            class="surface-card relative min-w-0 overflow-hidden bg-paper/50 p-4 sm:p-6">
            <span class="absolute -right-1 -top-2 font-display text-4xl font-bold text-brand/[0.07] sm:text-5xl">
              0{{ i + 1 }}
            </span>
            <p class="font-display text-[10px] tracking-[0.2em] text-brand sm:text-xs">
              {{ m.en }}
            </p>
            <h3 class="mt-1.5 text-base font-bold sm:mt-2 sm:text-xl">{{ m.title }}</h3>
            <p class="mt-1.5 text-[12px] leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-6">
              {{ m.subtitle }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- 服务优势 -->
    <section class="border-y border-line bg-white/75 section-y">
      <div class="page-shell">
        <div class="mb-5 text-center sm:mb-8">
          <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">
            ADVANTAGES
          </p>
          <h2 class="mt-1.5 text-xl font-bold sm:text-3xl">服务优势</h2>
        </div>
        <div class="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          <article v-for="a in site.advantages" :key="a.key"
            class="surface-card flex min-w-0 flex-col items-center p-3.5 text-center sm:p-6">
            <AdvantageIcon :name="a.key" />
            <h3 class="mt-3 text-sm font-bold sm:mt-4 sm:text-lg">{{ a.title }}</h3>
            <p class="mt-1.5 text-[11px] leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-6">
              {{ a.desc }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- 平台矩阵 -->
    <section class="section-y">
      <div class="page-shell">
        <PlatformMatrix :logos="site.platformLogos" />

        <div class="mt-6 overflow-hidden border border-line bg-white shadow-sm sm:mt-8">
          <p class="border-b border-line bg-paper/80 px-3 py-2 text-center text-[11px] text-muted sm:hidden">
            左右滑动查看平台价值对比
          </p>
          <div class="scroll-x">
            <img
              :src="platformsImg"
              alt="主流媒体平台维权曝光价值对比"
              class="block h-auto w-[min(920px,220vw)] max-w-none sm:w-full sm:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 收束文案 + CTA -->
    <section class="border-y border-line bg-white/75 section-y">
      <div class="page-shell">
        <div class="mx-auto max-w-3xl text-center">
          <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">
            COMMITMENT
          </p>
          <h2 class="mt-1.5 text-xl font-bold sm:text-3xl">合规底线 · 隐私护航</h2>
          <p class="mt-4 text-left text-[13px] leading-6 text-muted sm:mt-6 sm:text-center sm:text-[15px] sm:leading-8">
            {{ site.company.closing }}
          </p>
        </div>
      </div>
    </section>

    <section class="section-y">
      <div class="page-shell">
        <div class="relative overflow-hidden bg-brand px-4 py-10 text-center text-white sm:px-10 sm:py-14 md:px-16">
          <div class="pointer-events-none absolute inset-0 opacity-20" style="
              background: radial-gradient(circle at 20% 50%, white, transparent 40%),
                radial-gradient(circle at 80% 30%, white, transparent 35%);
            " />
          <h2 class="relative text-lg font-bold sm:text-2xl md:text-3xl">
            权益受损，不必独自为难
          </h2>
          <p class="relative mx-auto mt-2 max-w-xl text-[12px] text-white/85 sm:mt-3 sm:text-sm">
            告诉我们您的诉求，我们将以合规舆论传播助力纠纷妥善协调。
          </p>
          <RouterLink to="/contact"
            class="relative mt-5 inline-flex min-h-11 items-center bg-white px-6 py-3 text-sm font-bold text-brand sm:mt-7">
            联系我们
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useSiteStore } from '@/stores/site'
import AdvantageIcon from '@/components/AdvantageIcon.vue'
import PlatformMatrix from '@/components/PlatformMatrix.vue'
import logo from '@/assets/logo.png'
import platformsImg from '@/assets/image1.png'

const site = useSiteStore()
</script>
