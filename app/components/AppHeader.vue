<script setup lang="ts">
const menuOpen = ref(false)
const colorMode = useColorMode()

const navItems = [
  { label: 'Producto', to: '/#producto' },
  { label: 'Cumplimiento', to: '/#cumplimiento' },
  { label: 'Pre-auditoría', to: '/#preauditoria' },
]

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="sticky top-0 inset-x-0 z-50 bg-white/95 dark:bg-stone-900/95 border-b border-stone-200/80 dark:border-stone-700/80 backdrop-blur-sm">
    <nav class="max-w-6xl w-full py-3 px-4 sm:px-6 lg:px-8 lg:mx-auto">
      <div class="flex items-center justify-between gap-x-4">

        <!-- Logo -->
        <NuxtLink to="/" class="flex-none" aria-label="Documentia">
          <img
            :src="colorMode.value === 'dark' ? '/logo-dark.png' : '/logo-light.png'"
            alt="Documentia"
            class="h-7 w-auto object-contain"
          />
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-0.5">
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="py-1.5 px-3 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors focus:outline-none"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- CTA group -->
        <div class="flex items-center gap-2">
          <!-- Dark mode toggle -->
          <button
            type="button"
            class="flex justify-center items-center size-9 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors focus:outline-none"
            :aria-label="colorMode.value === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'"
            @click="toggleColorMode"
          >
            <!-- Sun icon (shown in dark mode) -->
            <svg v-if="colorMode.value === 'dark'" class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="4" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <!-- Moon icon (shown in light mode) -->
            <svg v-else class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <a
            href="mailto:hola@documentia.app"
            class="py-1.5 px-3.5 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg bg-violet-700 text-white hover:bg-violet-800 shadow-sm hover:shadow-none transition-all focus:outline-none"
          >
            Solicitar demo
          </a>

          <!-- Mobile hamburger -->
          <button
            type="button"
            class="md:hidden flex justify-center items-center size-9 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors focus:outline-none"
            aria-label="Toggle menu"
            @click="menuOpen = !menuOpen"
          >
            <svg v-if="!menuOpen" class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </nav>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden border-t border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900">
      <div class="px-4 py-3 flex flex-col gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="py-2 px-3 text-sm text-stone-700 dark:text-stone-300 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <div class="mt-2 pt-2 border-t border-stone-100 dark:border-stone-800">
          <a
            href="mailto:hola@documentia.app"
            class="w-full py-2.5 px-3 flex justify-center text-sm font-medium rounded-lg bg-violet-700 text-white hover:bg-violet-800 transition-colors"
          >
            Solicitar demo
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
