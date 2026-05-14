<template>
  <section class="py-16 md:py-24 bg-white dark:bg-stone-950">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Heading -->
      <div class="mb-10 md:mb-14 max-w-2xl">
        <p class="mb-2 font-mono text-xs text-stone-400 uppercase tracking-widest">{{ eyebrow }}</p>
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-3 text-stone-500 dark:text-stone-400 leading-relaxed">
          {{ description }}
        </p>
      </div>

      <!-- Problems grid -->
      <div class="grid gap-5 sm:grid-cols-3">
        <div
          v-for="(item, i) in problems"
          :key="item.title"
          class="relative group p-6 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-600 hover:bg-white dark:hover:bg-stone-800 transition-all duration-200"
        >
          <div class="mb-4 flex items-center justify-between">
            <div class="w-10 h-10 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center shadow-xs">
              <UIcon :name="item.icon" class="size-5 text-stone-600 dark:text-stone-400" />
            </div>
            <span class="text-2xl font-black text-stone-100 dark:text-stone-800 select-none">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <h3 class="font-semibold text-stone-900 dark:text-stone-100 mb-2">{{ item.title }}</h3>
          <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{{ item.description }}</p>
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
  problems: Array<{
    icon: string
    title: string
    description: string
  }>
}>()
</script>
