import { defineStore } from 'pinia'
import {
  company,
  navItems,
  modules,
  services,
  advantages,
  platformLogos,
  platforms,
  cases,
  newsList,
} from '@/data/content'

export const useSiteStore = defineStore('site', {
  state: () => ({
    company,
    navItems,
    modules,
    services,
    advantages,
    platformLogos,
    platforms,
    cases,
    newsList,
    mobileOpen: false,
  }),
  actions: {
    toggleMobile() {
      this.mobileOpen = !this.mobileOpen
    },
    closeMobile() {
      this.mobileOpen = false
    },
  },
})
