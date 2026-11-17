<template>
  <div>
    <section class="page-banner">
      <div class="page-shell">
        <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">ADMIN</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">留言记录</h1>
        <p class="mt-2 text-sm text-white/70 sm:mt-3">
          需管理密钥查看，仅内部使用。地址：/#/messages
        </p>
      </div>
    </section>

    <section class="section-y">
      <div class="page-shell">
        <form
          class="surface-card mb-6 flex flex-col gap-3 p-4 sm:flex-row sm:items-end sm:p-5"
          @submit.prevent="load"
        >
          <label class="min-w-0 flex-1 text-sm font-medium">
            管理密钥（X-Admin-Key）
            <input
              v-model="adminKey"
              type="password"
              required
              autocomplete="current-password"
              class="mt-2 min-h-11 w-full border border-line bg-paper/40 px-3 py-2.5 text-base outline-none focus:border-brand"
              placeholder="默认 dingli-admin"
            />
          </label>
          <button type="submit" class="btn-primary shrink-0 disabled:opacity-60" :disabled="loading">
            {{ loading ? '加载中…' : '刷新列表' }}
          </button>
        </form>

        <p v-if="error" class="mb-4 text-sm text-red-600">{{ error }}</p>
        <p v-else-if="!loading && unlocked && list.length === 0" class="text-sm text-muted">
          暂无留言。
        </p>

        <div v-if="list.length" class="grid gap-3 sm:gap-4">
          <article
            v-for="m in list"
            :key="m.id"
            class="surface-card min-w-0 p-4 sm:p-5"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h2 class="text-base font-bold sm:text-lg">{{ m.name }}</h2>
              <time class="text-[11px] text-muted sm:text-xs">{{ formatTime(m.createdAt) }}</time>
            </div>
            <p class="mt-1 text-sm text-brand">
              <a :href="`tel:${m.phone}`">{{ m.phone }}</a>
            </p>
            <p class="mt-3 whitespace-pre-wrap text-[13px] leading-6 text-muted sm:text-sm sm:leading-7">
              {{ m.content }}
            </p>
            <p class="mt-2 text-[11px] text-muted/70">#{{ m.id }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { fetchMessages } from '@/api/message'

const STORAGE_KEY = 'dingli_admin_key'

const adminKey = ref(sessionStorage.getItem(STORAGE_KEY) || '')
const list = ref([])
const loading = ref(false)
const error = ref('')
const unlocked = ref(false)

function formatTime(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleString('zh-CN', { hour12: false })
  } catch {
    return String(iso)
  }
}

async function load() {
  error.value = ''
  loading.value = true
  try {
    const key = adminKey.value.trim()
    sessionStorage.setItem(STORAGE_KEY, key)
    list.value = await fetchMessages(key)
    unlocked.value = true
  } catch (e) {
    list.value = []
    unlocked.value = false
    error.value = e instanceof Error ? e.message : String(e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (adminKey.value.trim()) {
    load()
  }
})
</script>
