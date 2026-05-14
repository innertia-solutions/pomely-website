<template>
  <section class="border-y border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-stone-200 dark:divide-stone-700">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex-1 flex items-center gap-4 py-6 px-0 sm:px-8 first:pl-0 last:pr-0"
        >
          <div v-if="stat.icon" class="shrink-0 w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center">
            <UIcon :name="stat.icon" class="size-5 text-violet-700 dark:text-violet-400" />
          </div>
          <div>
            <p class="text-base font-bold text-stone-900 dark:text-stone-100">{{ stat.value }}</p>
            <p class="text-sm text-stone-500 dark:text-stone-400 mt-0.5 leading-snug">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  stats: {
    type: Array as () => Array<{ value: string; label: string; icon?: string }>,
    required: true
  }
})
</script>
