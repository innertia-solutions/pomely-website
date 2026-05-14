<template>
  <section class="py-16 md:py-24 bg-white dark:bg-stone-950" id="producto">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">

      <div class="mb-12 max-w-xl">
        <p class="mb-1 font-mono text-xs text-stone-400 uppercase tracking-widest">Flujo de trabajo</p>
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
          Así trabaja Documentia.
        </h2>
        <p class="mt-2 text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
          Desde definir el programa hasta comparar ciclos — todo conectado, sin trabajo manual.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        <!-- ── Izquierda: pasos compactos ── -->
        <div class="relative">
          <div class="absolute w-px border-l border-dashed border-stone-200 dark:border-stone-800" style="left: 15px; top: 16px; bottom: 16px;" />

          <div
            v-for="(step, i) in steps"
            :key="step.title"
            :ref="(el) => { if (el) stepRefs[i] = el as HTMLElement }"
            class="flex gap-5 pb-8"
          >
            <!-- Número -->
            <div class="flex flex-col items-center w-8 shrink-0">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 text-xs font-bold border"
                :class="activeSteps[i]
                  ? 'bg-white dark:bg-stone-950 border-violet-400 text-violet-500'
                  : 'bg-white dark:bg-stone-950 border-stone-200 dark:border-stone-800 text-stone-300 dark:text-stone-700'"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </div>
            </div>

            <!-- Texto -->
            <div
              class="flex-1 transition-all duration-700 pt-0.5"
              :class="activeSteps[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
            >
              <div class="flex items-baseline gap-2 mb-0.5">
                <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm">{{ step.title }}</h3>
                <span class="text-xs text-stone-400">{{ step.sub }}</span>
              </div>
              <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{{ step.detail }}</p>
            </div>
          </div>
        </div>

        <!-- ── Derecha: mock del producto ── -->
        <div class="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-xl shadow-stone-100 dark:shadow-none bg-white dark:bg-stone-900 select-none">

          <!-- Browser chrome -->
          <div class="flex items-center gap-1.5 px-3 py-2.5 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
            <div class="w-2.5 h-2.5 rounded-full bg-red-400 opacity-60" />
            <div class="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-60" />
            <div class="w-2.5 h-2.5 rounded-full bg-green-400 opacity-60" />
            <div class="ml-3 flex-1 bg-stone-100 dark:bg-stone-800 rounded text-[10px] text-stone-400 px-2 py-0.5 font-mono">
              app.documentia.cl/programa/iso-9001
            </div>
          </div>

          <!-- App layout -->
          <div class="flex h-[400px]">

            <!-- Sidebar -->
            <div class="w-36 shrink-0 border-r border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-3 flex flex-col gap-1">
              <p class="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Documentia</p>
              <div v-for="item in sidebar" :key="item.label"
                class="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-colors"
                :class="item.active ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300' : 'text-stone-500 dark:text-stone-400'"
              >
                <UIcon :name="item.icon" class="size-3 shrink-0" />
                {{ item.label }}
              </div>
            </div>

            <!-- Main content -->
            <div class="flex-1 overflow-hidden p-4">

              <!-- Program header -->
              <div class="flex items-center justify-between mb-4">
                <div>
                  <p class="text-[11px] text-stone-400 font-mono uppercase tracking-wide">Programa</p>
                  <p class="text-sm font-bold text-stone-800 dark:text-stone-100">ISO 9001 · Planta Norte</p>
                </div>
                <span class="text-[10px] font-semibold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-800 px-2 py-0.5 rounded-full">Activo</span>
              </div>

              <!-- Campaigns list -->
              <div class="space-y-2 mb-5">
                <div v-for="c in campaigns" :key="c.name"
                  class="flex items-center gap-3 p-2.5 rounded-lg border transition-colors"
                  :class="c.active ? 'border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-900/20' : 'border-stone-100 dark:border-stone-800'"
                >
                  <div class="w-2 h-2 rounded-full shrink-0" :style="{ background: c.color }" />
                  <div class="flex-1 min-w-0">
                    <p class="text-[11px] font-semibold text-stone-700 dark:text-stone-300 truncate">{{ c.name }}</p>
                    <p class="text-[10px] text-stone-400">{{ c.date }}</p>
                  </div>
                  <div class="w-16 h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden shrink-0">
                    <div class="h-full rounded-full" :style="{ width: c.pct + '%', background: c.color }" />
                  </div>
                  <span class="text-[10px] text-stone-400 shrink-0">{{ c.status }}</span>
                </div>
              </div>

              <!-- Score strip -->
              <div class="border border-stone-100 dark:border-stone-800 rounded-xl p-3 bg-stone-50 dark:bg-stone-900">
                <div class="flex items-center justify-between mb-2">
                  <p class="text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wide">Score comparativo</p>
                  <div class="flex items-center gap-2 text-[9px] text-stone-400">
                    <span class="flex items-center gap-1"><span class="w-2 h-1.5 rounded-sm bg-stone-300 dark:bg-stone-600 inline-block" />2024</span>
                    <span class="flex items-center gap-1"><span class="w-2 h-1.5 rounded-sm bg-violet-500 inline-block" />2025</span>
                  </div>
                </div>
                <div class="space-y-1.5">
                  <div v-for="row in scoreRows" :key="row.label" class="flex items-center gap-2">
                    <span class="text-[9px] text-stone-500 w-16 shrink-0">{{ row.label }}</span>
                    <div class="flex-1 flex flex-col gap-0.5">
                      <div class="h-1 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                        <div class="h-full bg-stone-300 dark:bg-stone-600 rounded-full" :style="`width:${row.v24}%`" />
                      </div>
                      <div class="h-1 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                        <div class="h-full bg-violet-500 rounded-full" :style="`width:${row.v25}%`" />
                      </div>
                    </div>
                    <span class="text-[9px] font-bold text-green-500 w-6 text-right shrink-0">+{{ row.v25 - row.v24 }}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- ── Fin mock ── -->

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const stepRefs = ref<(HTMLElement | null)[]>(new Array(5).fill(null))
const activeSteps = reactive<boolean[]>(new Array(5).fill(false))

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = stepRefs.value.findIndex(el => el === entry.target)
        if (idx >= 0) activeSteps[idx] = true
      }
    })
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' })
  stepRefs.value.forEach(el => { if (el) observer.observe(el) })
  onUnmounted(() => observer.disconnect())
})

const sidebar = [
  { label: 'Dashboard', icon: 'i-lucide-layout-dashboard', active: false },
  { label: 'Programas', icon: 'i-lucide-layers', active: true },
  { label: 'Documentos', icon: 'i-lucide-file-text', active: false },
  { label: 'Cumplimiento', icon: 'i-lucide-shield-check', active: false },
  { label: 'Evidencia', icon: 'i-lucide-paperclip', active: false },
  { label: 'Auditoría IA', icon: 'i-lucide-brain-circuit', active: false },
]

const campaigns = [
  { name: 'Pre-auditoría — Abr 2025', date: 'En ejecución', pct: 71, color: '#a855f7', status: '71%', active: true },
  { name: 'Auditoría interna — Jun 2025', date: 'Próxima', pct: 8, color: '#94a3b8', status: 'Próx.', active: false },
  { name: 'Auditoría externa — Sep 2025', date: 'Planeada', pct: 4, color: '#cbd5e1', status: 'Plan.', active: false },
]

const scoreRows = [
  { label: 'Cláusula 4', v24: 62, v25: 95 },
  { label: 'Cláusula 7', v24: 48, v25: 67 },
  { label: 'Cláusula 8', v24: 31, v25: 54 },
  { label: 'Cláusula 9', v24: 20, v25: 38 },
]

const steps = [
  {
    title: 'Programa',
    sub: 'Marco normativo · siempre activo',
    detail: 'Defines las normas y cláusulas una sola vez. Cada campaña queda asociada al programa, acumulando historial año tras año.',
  },
  {
    title: 'Campañas',
    sub: 'Pre-auditoría, interna o externa',
    detail: 'Creas campañas por tipo y periodo dentro del programa. Cada una hereda la configuración pero tiene su propio flujo y equipo.',
  },
  {
    title: 'Auditoría',
    sub: 'Kanban con estados y evidencia',
    detail: 'La ejecución es un kanban. Cada requisito avanza entre estados, adjunta evidencia y el copiloto IA detecta brechas en tiempo real.',
  },
  {
    title: 'Resultado',
    sub: 'Score · hallazgos · no conformidades',
    detail: 'Al cerrar la campaña queda el score, hallazgos y no conformidades. Trazable, con responsable y fecha. Exportable para el auditor.',
  },
  {
    title: 'Comparativa',
    sub: 'Ciclo vs ciclo · inteligencia acumulada',
    detail: '¿En qué cláusula seguimos fallando? ¿Mejoró la Planta Norte? El historial acumulado convierte cada auditoría en aprendizaje.',
  },
]
</script>
