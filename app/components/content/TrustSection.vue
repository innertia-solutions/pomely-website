<template>
  <section class="py-16 md:py-24 bg-white dark:bg-stone-950" id="preauditoria">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
        <!-- Left heading -->
        <div class="lg:col-span-4">
          <p class="mb-2 font-mono text-xs text-stone-400 uppercase tracking-widest">{{ eyebrow }}</p>
          <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">{{ title }}</h2>
          <p class="mt-3 text-stone-500 dark:text-stone-400 leading-relaxed">{{ description }}</p>
        </div>

        <!-- Right items -->
        <div class="grid gap-4 lg:col-span-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="item in items"
            :key="item.title"
            class="group p-5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 hover:bg-white dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-md transition-all duration-200"
          >
            <div class="w-10 h-10 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center mb-4 shadow-xs group-hover:bg-violet-50 dark:group-hover:bg-violet-900/30 group-hover:border-violet-100 dark:group-hover:border-violet-800 transition-colors">
              <UIcon :name="item.icon" class="size-5 text-stone-500 dark:text-stone-400 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors" />
            </div>
            <h3 class="font-semibold text-stone-900 dark:text-stone-100 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{{ item.description }}</p>
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
  items: Array<{
    icon: string
    title: string
    description: string
  }>
}>()
</script>
