<template>
  <footer class="mt-8 bg-ink text-white sm:mt-16 md:mt-20">
    <!-- H5 -->
    <div class="page-shell py-8 md:hidden">
      <div class="flex flex-col items-center text-center">
        <div class="inline-flex items-center rounded-sm border border-white/15 bg-[#f5f2ed] px-3.5 py-2">
          <img :src="logo" alt="鼎立传媒" class="block h-11 w-auto max-w-[240px] object-contain" />
        </div>
        <p class="mt-3 text-[12px] leading-6 text-white/70">
          {{ site.company.tagline }}
          <br />
          深耕合法媒体曝光维权服务
        </p>
      </div>

      <div class="my-6 h-px bg-white/10" />

      <div>
        <h3 class="mb-3 text-center font-display text-[11px] tracking-[0.22em] text-brand">
          NAVIGATION
        </h3>
        <ul class="grid grid-cols-3 gap-2">
          <li v-for="item in site.navItems" :key="item.path">
            <RouterLink :to="item.path"
              class="flex min-h-9 items-center justify-center rounded-sm border border-white/10 bg-white/[0.04] px-1 text-[11px] text-white/85">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="mt-6">
        <h3 class="mb-3 text-center font-display text-[11px] tracking-[0.22em] text-brand">
          CONTACT
        </h3>
        <ul
          class="space-y-2.5 rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3.5 text-left text-[12px] leading-5 text-white/80">
          <li>
            <span class="text-white/45">地址</span>
            <span class="mt-0.5 block text-white/90">{{ site.company.address }}</span>
          </li>
          <li>
            <span class="text-white/45">电话</span>
            <a :href="`tel:${site.company.phone}`" class="mt-0.5 block text-white/90">
              {{ site.company.phone }}
            </a>
          </li>
          <li>
            <span class="text-white/45">邮箱</span>
            <span class="mt-0.5 block break-all text-white/90">
              {{ site.company.email }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Web -->
    <div class="page-shell hidden gap-10 py-12 md:grid md:grid-cols-3 md:py-14">
      <div>
        <div
          class="mb-4 inline-flex max-w-full items-center rounded-sm border border-white/15 bg-[#f5f2ed] px-4 py-2.5">
          <img :src="logo" alt="鼎立传媒" class="block h-14 w-auto max-h-14 max-w-[320px] object-contain object-left" />
        </div>
        <p class="text-sm leading-relaxed text-white/70">
          {{ site.company.tagline }}
          <br />
          深耕合法媒体曝光维权服务
        </p>
      </div>
      <div>
        <h3 class="mb-4 font-display text-sm tracking-[0.2em] text-brand">NAVIGATION</h3>
        <ul class="space-y-2 text-sm text-white/80">
          <li v-for="item in site.navItems" :key="item.path">
            <RouterLink :to="item.path" class="hover:text-white">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="mb-4 font-display text-sm tracking-[0.2em] text-brand">CONTACT</h3>
        <ul class="space-y-2 text-sm text-white/80">
          <li>地址：{{ site.company.address }}</li>
          <li>
            <a :href="`tel:${site.company.phone}`" class="hover:text-white">
              电话：{{ site.company.phone }}
            </a>
          </li>
          <li class="break-all">邮箱：{{ site.company.email }}</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 px-4 py-3 text-center text-[10px] leading-5 text-white/50 sm:py-4 sm:text-xs">
      Copyright © {{ year }} {{ site.company.name }} 版权所有
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useSiteStore } from '@/stores/site'
import logo from '@/assets/logo.png'

const site = useSiteStore()
const year = new Date().getFullYear()
</script>
