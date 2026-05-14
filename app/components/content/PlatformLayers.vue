<template>
  <section id="producto" class="py-16 md:py-24 bg-stone-50 dark:bg-stone-900">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Heading -->
      <div class="mb-10 md:mb-14 max-w-xl mx-auto text-center">
        <p class="mb-2 font-mono text-xs text-stone-400 uppercase tracking-widest">{{ eyebrow }}</p>
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-3 text-stone-500 dark:text-stone-400 leading-relaxed">
          {{ description }}
        </p>
      </div>

      <!-- Layers -->
      <div class="grid gap-5 lg:grid-cols-3">
        <div
          v-for="(layer, index) in layers"
          :key="layer.title"
          class="relative group bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 p-6 hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-md transition-all duration-200"
        >
          <!-- Step number + icon -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-9 h-9 rounded-lg bg-violet-700 text-white flex items-center justify-center text-sm font-bold shrink-0">
              {{ index + 1 }}
            </div>
            <div class="w-9 h-9 rounded-lg bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center shrink-0">
              <UIcon :name="layer.icon" class="size-5 text-violet-700 dark:text-violet-400" />
            </div>
          </div>

          <h3 class="font-semibold text-stone-900 dark:text-stone-100 text-lg mb-2">{{ layer.title }}</h3>
          <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4">{{ layer.description }}</p>

          <ul class="space-y-2">
            <li v-for="point in layer.points" :key="point" class="flex gap-2.5 text-sm text-stone-600 dark:text-stone-400">
              <svg class="shrink-0 size-4 mt-0.5 text-violet-600 dark:text-violet-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
              {{ point }}
            </li>
          </ul>
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
  layers: Array<{
    icon: string
    title: string
    description: string
    points: string[]
  }>
}>()
</script>
