<template>
  <div class="relative overflow-hidden bg-white dark:bg-stone-950">
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M0%200v40M40%200v40M0%200h40M0%2040h40%22%20stroke%3D%22%23e7e5e4%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M0%200v40M40%200v40M0%200h40M0%2040h40%22%20stroke%3D%22%2344403c%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')] opacity-60" />
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-50/80 dark:from-stone-950/80 to-transparent pointer-events-none" />

    <div class="relative pt-12 pb-20 md:pt-20 md:pb-28">
      <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="grid md:grid-cols-12 items-center gap-y-10 gap-x-8 lg:gap-x-12">

          <!-- Left: copy -->
          <div class="md:col-span-6 lg:col-span-5">
            <p class="mb-3 font-mono text-xs text-stone-400 uppercase tracking-widest">Tu copiloto de compliance</p>
            <h1 class="font-bold text-stone-900 dark:text-stone-50 text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
              {{ title }}
            </h1>
            <p class="mt-5 text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
              {{ description }}
            </p>

            <div class="mt-7 flex flex-wrap items-center gap-3">
              <a
                :href="primaryButton.to"
                class="py-2.5 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-violet-700 text-white hover:bg-violet-800 shadow-md hover:shadow-none transition-all focus:outline-none"
              >
                {{ primaryButton.text }}
              </a>
              <a
                :href="secondaryButton.to"
                class="group py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 focus:outline-none transition-colors"
              >
                {{ secondaryButton.text }}
                <svg class="shrink-0 size-3.5 transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>

            <!-- Trust badges -->
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <div class="flex items-center gap-1.5 text-xs text-stone-400">
                <svg class="size-4 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Trazabilidad completa
              </div>
              <div class="flex items-center gap-1.5 text-xs text-stone-400">
                <svg class="size-4 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pre-auditoría con IA
              </div>
            </div>
          </div>
          <!-- End Left -->

          <!-- Right: UI mockup -->
          <div class="md:col-span-6 lg:col-span-7">
            <div class="relative">
              <!-- Browser chrome -->
              <div class="rounded-xl border border-stone-200 dark:border-stone-700 shadow-2xl overflow-hidden bg-white dark:bg-stone-900">
                <!-- Browser bar -->
                <div class="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
                  <div class="flex gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-violet-400" />
                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div class="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div class="flex-1 mx-4">
                    <div class="bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 rounded px-3 py-0.5 text-[11px] text-stone-400 dark:text-stone-400 font-mono">
                      app.documentia.cl/cumplimiento
                    </div>
                  </div>
                </div>

                <!-- App UI -->
                <div class="bg-stone-50 dark:bg-stone-900 p-3">
                  <div class="flex gap-3" style="min-height: 320px">
                    <!-- Sidebar -->
                    <div class="w-36 shrink-0 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 p-2.5 flex flex-col gap-0.5">
                      <p class="text-[9px] font-semibold text-stone-400 uppercase tracking-wider px-2 mb-2">Documentia</p>
                      <div
                        v-for="item in sidebarItems"
                        :key="item.label"
                        class="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] transition-colors"
                        :class="item.active ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 font-medium' : 'text-stone-500 dark:text-stone-400'"
                      >
                        <svg class="size-3 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                        </svg>
                        {{ item.label }}
                      </div>
                    </div>

                    <!-- Main content -->
                    <div class="flex-1 flex flex-col gap-2.5 min-w-0">
                      <!-- Header row -->
                      <div class="flex items-center justify-between gap-2">
                        <div class="min-w-0">
                          <h3 class="text-xs font-semibold text-stone-800 dark:text-stone-200 truncate">Matriz de cumplimiento</h3>
                          <p class="text-[10px] text-stone-400">ISO 9001:2015 · 93 requisitos</p>
                        </div>
                        <div class="flex items-center gap-1.5 shrink-0">
                          <span class="px-2 py-0.5 rounded-full text-[9px] font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800">78% ✓</span>
                        </div>
                      </div>

                      <!-- Progress bars -->
                      <div class="bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 p-2.5 flex flex-col gap-2">
                        <p class="text-[9px] font-semibold text-stone-400 uppercase tracking-wider">Progreso por cláusula</p>
                        <div v-for="clause in clauses" :key="clause.name" class="space-y-0.5">
                          <div class="flex justify-between items-center">
                            <span class="text-[10px] text-stone-500 dark:text-stone-400 truncate pr-2">{{ clause.name }}</span>
                            <span class="text-[10px] font-semibold shrink-0" :class="clause.pct >= 80 ? 'text-green-600' : clause.pct >= 50 ? 'text-amber-600' : 'text-violet-600'">{{ clause.pct }}%</span>
                          </div>
                          <div class="h-1.5 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                            <div
                              class="h-full rounded-full"
                              :class="clause.pct >= 80 ? 'bg-green-500' : clause.pct >= 50 ? 'bg-amber-400' : 'bg-violet-500'"
                              :style="`width: ${clause.pct}%`"
                            />
                          </div>
                        </div>
                      </div>

                      <!-- Document list -->
                      <div class="bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 p-2.5">
                        <p class="text-[9px] font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Documentos recientes</p>
                        <div class="flex flex-col gap-1">
                          <div v-for="doc in recentDocs" :key="doc.name" class="flex items-center gap-2">
                            <svg class="size-3 text-stone-300 dark:text-stone-600 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <span class="text-[10px] text-stone-600 dark:text-stone-400 flex-1 truncate">{{ doc.name }}</span>
                            <span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium shrink-0" :class="doc.status === 'Vigente' ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' : doc.status === 'Vence pronto' ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'">{{ doc.status }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- AI badge floating -->
              <div class="absolute -bottom-3 -left-3 bg-stone-900 dark:bg-stone-800 text-white rounded-xl px-3.5 py-2.5 shadow-xl border border-stone-700 dark:border-stone-600 text-xs max-w-xs z-10">
                <div class="flex items-start gap-2.5">
                  <div class="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="size-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-stone-200 leading-tight">Copiloto detectó 3 brechas</p>
                    <p class="text-stone-400 leading-snug mt-0.5">Evidencia faltante en cláusula 8.4 — auditoría en 12 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Right -->

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  primaryButton: { type: Object as () => { text: string; to: string }, required: true },
  secondaryButton: { type: Object as () => { text: string; to: string }, required: true },
})

const sidebarItems = [
  { label: 'Dashboard', icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25', active: false },
  { label: 'Documentos', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', active: false },
  { label: 'Cumplimiento', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', active: true },
  { label: 'Evidencia', icon: 'M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13', active: false },
  { label: 'Auditoría IA', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z', active: false },
]

const clauses = [
  { name: 'Cláusula 4 · Contexto', pct: 95 },
  { name: 'Cláusula 6 · Planificación', pct: 82 },
  { name: 'Cláusula 7 · Apoyo', pct: 67 },
  { name: 'Cláusula 8 · Operación', pct: 54 },
  { name: 'Cláusula 9 · Evaluación', pct: 38 },
]

const recentDocs = [
  { name: 'Procedimiento gestión de riesgos v3.2', status: 'Vigente' },
  { name: 'Manual de calidad SGI 2024', status: 'Vence pronto' },
  { name: 'Política medioambiental', status: 'Vigente' },
  { name: 'Instructivo auditoría interna', status: 'Vencido' },
]
</script>
