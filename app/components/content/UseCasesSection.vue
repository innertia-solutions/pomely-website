<template>
  <section id="casos" class="py-16 md:py-24 bg-stone-50 dark:bg-stone-900">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Heading -->
      <div class="mb-10 md:mb-14 max-w-xl mx-auto text-center">
        <p class="mb-2 font-mono text-xs text-stone-400 uppercase tracking-widest">{{ eyebrow }}</p>
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
          {{ title }}
        </h2>
      </div>

      <!-- Cards grid -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="useCase in useCases"
          :key="useCase.title"
          class="group bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 p-5 hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-md transition-all duration-200"
        >
          <div class="w-10 h-10 rounded-lg bg-stone-50 dark:bg-stone-700 border border-stone-200 dark:border-stone-600 flex items-center justify-center mb-4 group-hover:bg-violet-50 dark:group-hover:bg-violet-900/30 group-hover:border-violet-100 dark:group-hover:border-violet-800 transition-colors">
            <UIcon :name="useCase.icon" class="size-5 text-stone-500 dark:text-stone-400 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors" />
          </div>
          <h3 class="font-semibold text-stone-900 dark:text-stone-100 mb-2">{{ useCase.title }}</h3>
          <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{{ useCase.description }}</p>
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
  useCases: Array<{
    icon: string
    title: string
    description: string
  }>
}>()
</script>
