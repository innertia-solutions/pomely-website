<template>
  <section class="py-16 md:py-24 bg-white dark:bg-stone-950" id="cumplimiento">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Heading -->
      <div class="mb-10 md:mb-14 max-w-xl mx-auto text-center">
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="mt-3 text-stone-500 dark:text-stone-400 leading-relaxed">
          {{ subtitle }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-10 lg:gap-y-12 lg:gap-x-16">
        <div v-for="(feature, index) in features" :key="index" class="flex gap-5">
          <UIcon :name="feature.icon" class="shrink-0 size-6 md:size-8 mt-0.5 text-violet-700 dark:text-violet-400" />
          <div class="grow">
            <p class="font-semibold text-stone-900 dark:text-stone-100">
              {{ feature.title }}
            </p>
            <p class="mt-1.5 text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: false, default: '' },
  features: { type: Array as () => Array<{ icon: string; title: string; description: string }>, required: true }
})
</script>
