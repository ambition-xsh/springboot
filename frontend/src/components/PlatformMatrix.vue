<template>
  <div class="matrix" :class="{ 'matrix--compact': compact }">
    <div class="matrix__stage">
      <div class="matrix__glow" aria-hidden="true" />
      <div class="matrix__gridline" aria-hidden="true" />

      <header v-if="showHeader" class="matrix__head">
        <p class="font-display text-[10px] tracking-[0.28em] text-brand sm:text-xs">MATRIX</p>
        <h2 class="mt-1.5 text-xl font-bold text-white sm:text-3xl">{{ title }}</h2>
        <p
          v-if="subtitle"
          class="mx-auto mt-2 max-w-2xl text-[12px] leading-5 text-white/55 sm:mt-3 sm:text-sm sm:leading-7"
        >
          {{ subtitle }}
        </p>
      </header>

      <ul class="matrix__list">
        <li
          v-for="(p, i) in logos"
          :key="p.name"
          class="matrix__item animate__animated animate__fadeInUp"
          :style="{ animationDelay: `${Math.min(i, 10) * 0.04}s` }"
        >
          <div class="matrix__tile">
            <div class="matrix__logo-wrap">
              <img
                :src="p.src"
                :alt="p.name"
                class="matrix__logo"
                loading="lazy"
              />
            </div>
            <span class="matrix__name">{{ p.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logos: { type: Array, required: true },
  title: { type: String, default: '全媒体传播矩阵' },
  subtitle: {
    type: String,
    default: '覆盖官方门户与垂直自媒体全矩阵，助力维权诉求精准触达、全面扩散。',
  },
  showHeader: { type: Boolean, default: true },
  compact: { type: Boolean, default: false },
})
</script>

<style scoped>
.matrix {
  width: 100%;
}

.matrix__stage {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(192, 32, 38, 0.28), transparent 55%),
    linear-gradient(165deg, #161616 0%, #0c0c0e 55%, #121010 100%);
  padding: 1.25rem 1rem 1.5rem;
}

@media (min-width: 640px) {
  .matrix__stage {
    padding: 2rem 1.75rem 2.25rem;
  }
}

@media (min-width: 1024px) {
  .matrix__stage {
    padding: 2.5rem 2.25rem 2.75rem;
  }
}

.matrix__glow {
  pointer-events: none;
  position: absolute;
  inset: auto -20% -40% -20%;
  height: 55%;
  background: radial-gradient(ellipse at center, rgba(192, 32, 38, 0.18), transparent 65%);
}

.matrix__gridline {
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(180deg, black, transparent 90%);
}

.matrix__head {
  position: relative;
  z-index: 1;
  margin-bottom: 1.25rem;
  text-align: center;
}

@media (min-width: 640px) {
  .matrix__head {
    margin-bottom: 1.75rem;
  }
}

.matrix__list {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 480px) {
  .matrix__list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.85rem;
  }
}

@media (min-width: 768px) {
  .matrix__list {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 1rem;
  }
}

.matrix--compact .matrix__list {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

@media (min-width: 640px) {
  .matrix--compact .matrix__list {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
}

.matrix__tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  height: 100%;
  padding: 0.7rem 0.4rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(6px);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

@media (min-width: 640px) {
  .matrix__tile {
    gap: 0.7rem;
    padding: 0.95rem 0.5rem 1rem;
  }
}

.matrix__logo-wrap {
  display: grid;
  place-items: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 22%;
  background: rgba(0, 0, 0, 0.35);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 8px 20px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

@media (min-width: 640px) {
  .matrix__logo-wrap {
    width: 4rem;
    height: 4rem;
  }
}

@media (min-width: 1024px) {
  .matrix__logo-wrap {
    width: 4.5rem;
    height: 4.5rem;
  }
}

.matrix__logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.matrix__name {
  max-width: 100%;
  padding: 0 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.72);
  font-size: 10px;
  letter-spacing: 0.02em;
  line-height: 1.2;
}

@media (min-width: 640px) {
  .matrix__name {
    font-size: 12px;
  }
}

@media (hover: hover) {
  .matrix__tile:hover {
    border-color: rgba(192, 32, 38, 0.55);
    background: linear-gradient(180deg, rgba(192, 32, 38, 0.16), rgba(255, 255, 255, 0.03));
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(192, 32, 38, 0.2);
    transform: translateY(-3px);
  }

  .matrix__tile:hover .matrix__logo {
    transform: scale(1.06);
  }

  .matrix__tile:hover .matrix__name {
    color: #fff;
  }
}

@media (prefers-reduced-motion: reduce) {
  .matrix__item {
    animation: none !important;
  }

  .matrix__tile,
  .matrix__logo {
    transition: none;
  }
}
</style>
