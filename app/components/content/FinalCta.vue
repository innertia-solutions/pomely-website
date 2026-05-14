<template>
  <section class="py-16 md:py-20">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Card with gradient background -->
      <div class="relative overflow-hidden rounded-2xl bg-stone-900 px-6 py-12 md:px-14 md:py-16 text-center">
        <!-- Subtle glow -->
        <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-64 bg-violet-900/30 rounded-full blur-3xl pointer-events-none" />

        <div class="relative">
          <p class="mb-3 font-mono text-xs text-stone-400 uppercase tracking-widest">{{ eyebrow }}</p>
          <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-snug mb-4">
            {{ title }}
          </h2>
          <p class="max-w-xl mx-auto text-stone-400 leading-relaxed mb-8">
            {{ description }}
          </p>

          <div class="flex flex-wrap justify-center items-center gap-3">
            <a
              :href="primaryButton.to"
              class="py-2.5 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-violet-700 text-white hover:bg-violet-600 shadow-lg shadow-violet-900/40 hover:shadow-none transition-all focus:outline-none"
            >
              {{ primaryButton.text }}
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  primaryButton: { text: string; to: string }
  secondaryButton?: { text: string; to: string }
}>()
</script>
