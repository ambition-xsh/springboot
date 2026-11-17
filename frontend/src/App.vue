<template>
  <div class="app-shell flex min-h-screen min-h-dvh flex-col">
    <AppHeader />
    <main class="flex-1">
      <RouterView v-slot="{ Component, route }">
        <Transition
          enter-active-class="animate__animated animate__fadeIn animate__faster"
          mode="out-in"
        >
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
    <MobileDock />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import MobileDock from '@/components/MobileDock.vue'
</script>
