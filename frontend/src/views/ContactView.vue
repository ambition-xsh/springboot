<template>
  <div>
    <section class="page-banner">
      <div class="page-shell">
        <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">CONTACT</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">联系我们</h1>
        <p class="mt-2 text-sm text-white/70 sm:mt-3">留下您的诉求，我们将尽快与您联系。</p>
      </div>
    </section>

    <section class="section-y">
      <div class="page-shell">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div class="min-w-0">
            <h2 class="text-xl font-bold sm:text-2xl">联系方式</h2>
            <ul class="mt-5 space-y-3 text-[14px] text-muted sm:mt-6 sm:space-y-4 sm:text-[15px]">
              <li>
                <span class="font-semibold text-ink">公司：</span>{{ site.company.name }}
              </li>
              <li>
                <span class="font-semibold text-ink">地址：</span>{{ site.company.address }}
              </li>
              <li>
                <span class="font-semibold text-ink">电话：</span>
                <a :href="`tel:${site.company.phone}`" class="text-brand hover:underline">
                  {{ site.company.phone }}
                </a>
              </li>
              <li class="break-all">
                <span class="font-semibold text-ink">邮箱：</span>{{ site.company.email }}
              </li>
            </ul>
            <LocationMapArt
              class="mt-6 sm:mt-8"
              :title="site.company.name"
              :subtitle="`${site.company.address} · ${site.company.tagline}`"
            />
          </div>

          <form class="surface-card min-w-0 p-5 sm:p-6 md:p-8" @submit.prevent="onSubmit">
            <h2 class="text-xl font-bold sm:text-2xl">在线留言</h2>
            <p class="mt-2 text-[13px] text-muted sm:text-sm">
              提交后将写入服务器数据库，我们会尽快与您联系。
            </p>

            <label class="mt-5 block text-sm font-medium sm:mt-6">
              姓名
              <input
                v-model="form.name"
                required
                autocomplete="name"
                maxlength="64"
                class="mt-2 min-h-11 w-full border border-line bg-paper/40 px-3 py-2.5 text-base outline-none focus:border-brand"
              />
            </label>
            <label class="mt-4 block text-sm font-medium">
              电话
              <input
                v-model="form.phone"
                required
                inputmode="tel"
                autocomplete="tel"
                maxlength="32"
                class="mt-2 min-h-11 w-full border border-line bg-paper/40 px-3 py-2.5 text-base outline-none focus:border-brand"
              />
            </label>
            <label class="mt-4 block text-sm font-medium">
              留言内容
              <textarea
                v-model="form.content"
                required
                rows="5"
                maxlength="2000"
                class="mt-2 w-full border border-line bg-paper/40 px-3 py-2.5 text-base outline-none focus:border-brand"
              />
            </label>

            <button
              type="submit"
              class="btn-primary mt-6 w-full sm:w-auto disabled:opacity-60"
              :disabled="submitting"
            >
              {{ submitting ? '提交中…' : '提交留言' }}
            </button>
            <p v-if="okMsg" class="mt-4 text-sm text-brand">{{ okMsg }}</p>
            <p v-if="errMsg" class="mt-4 text-sm text-red-600">{{ errMsg }}</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useSiteStore } from '@/stores/site'
import LocationMapArt from '@/components/LocationMapArt.vue'
import { createMessage } from '@/api/message'

const site = useSiteStore()
const submitting = ref(false)
const okMsg = ref('')
const errMsg = ref('')
const form = reactive({
  name: '',
  phone: '',
  content: '',
})

async function onSubmit() {
  okMsg.value = ''
  errMsg.value = ''
  submitting.value = true
  try {
    await createMessage({
      name: form.name.trim(),
      phone: form.phone.trim(),
      content: form.content.trim(),
    })
    okMsg.value = '已收到您的留言，感谢联系。'
    form.name = ''
    form.phone = ''
    form.content = ''
  } catch (e) {
    errMsg.value = e instanceof Error ? e.message : String(e)
  } finally {
    submitting.value = false
  }
}
</script>
