<template>
  <section class="py-16 md:py-24 bg-white dark:bg-stone-950" id="producto">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">

      <div class="mb-12 max-w-xl">
        <p class="mb-1 font-mono text-xs text-stone-400 uppercase tracking-widest">Flujo de trabajo</p>
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
          Así trabaja Pomely.
        </h2>
        <p class="mt-2 text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
          Del pedido a la cotización enviada — sin fricción, sin pasos manuales.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        <!-- ── Izquierda: pasos ── -->
        <div class="relative">
          <div class="absolute w-px border-l border-dashed border-stone-200 dark:border-stone-800" style="left: 15px; top: 16px; bottom: 16px;" />

          <div
            v-for="(step, i) in steps"
            :key="step.title"
            :ref="(el) => { if (el) stepRefs[i] = el as HTMLElement }"
            class="flex gap-5 pb-8"
          >
            <div class="flex flex-col items-center w-8 shrink-0">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 text-xs font-bold border"
                :class="activeSteps[i]
                  ? 'bg-white dark:bg-stone-950 border-rose-300 text-rose-400'
                  : 'bg-white dark:bg-stone-950 border-stone-200 dark:border-stone-800 text-stone-300 dark:text-stone-700'"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </div>
            </div>

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

        <!-- ── Derecha: mock cotización ── -->
        <div class="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-xl shadow-stone-100 dark:shadow-none bg-white dark:bg-stone-900 select-none">

          <!-- Browser chrome -->
          <div class="flex items-center gap-1.5 px-3 py-2.5 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
            <div class="w-2.5 h-2.5 rounded-full bg-red-400 opacity-60" />
            <div class="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-60" />
            <div class="w-2.5 h-2.5 rounded-full bg-green-400 opacity-60" />
            <div class="ml-3 flex-1 bg-stone-100 dark:bg-stone-800 rounded text-[10px] text-stone-400 px-2 py-0.5 font-mono">
              app.pomely.cl/cotizacion/COT-2025-084
            </div>
          </div>

          <!-- App layout -->
          <div class="flex h-[400px]">

            <!-- Sidebar -->
            <div class="w-36 shrink-0 border-r border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-3 flex flex-col gap-1">
              <p class="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Pomely</p>
              <div v-for="item in sidebar" :key="item.label"
                class="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-colors"
                :class="item.active ? 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300' : 'text-stone-500 dark:text-stone-400'"
              >
                <UIcon :name="item.icon" class="size-3 shrink-0" />
                {{ item.label }}
              </div>
            </div>

            <!-- Main content -->
            <div class="flex-1 overflow-hidden p-4">

              <!-- Quote header -->
              <div class="flex items-center justify-between mb-4">
                <div>
                  <p class="text-[11px] text-stone-400 font-mono uppercase tracking-wide">Cotización</p>
                  <p class="text-sm font-bold text-stone-800 dark:text-stone-100">COT-2025-084 · Constructora Sur</p>
                </div>
                <span class="text-[10px] font-semibold bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-300 border border-rose-100 dark:border-rose-800 px-2 py-0.5 rounded-full">En negociación</span>
              </div>

              <!-- Line items -->
              <div class="space-y-2 mb-4">
                <div v-for="item in lineItems" :key="item.desc"
                  class="flex items-center gap-3 p-2.5 rounded-lg border border-stone-100 dark:border-stone-800"
                >
                  <div class="flex-1 min-w-0">
                    <p class="text-[11px] font-semibold text-stone-700 dark:text-stone-300 truncate">{{ item.desc }}</p>
                    <p class="text-[10px] text-stone-400">{{ item.qty }}</p>
                  </div>
                  <p class="text-[11px] font-bold text-stone-800 dark:text-stone-200 shrink-0">{{ item.price }}</p>
                </div>
              </div>

              <!-- Total + actions -->
              <div class="border border-stone-100 dark:border-stone-800 rounded-xl p-3 bg-stone-50 dark:bg-stone-900">
                <div class="flex items-center justify-between mb-2">
                  <p class="text-[10px] font-bold text-stone-500 uppercase tracking-wide">Total</p>
                  <p class="text-sm font-black text-stone-900 dark:text-stone-100">$4.200.000</p>
                </div>
                <div class="flex gap-2">
                  <div class="flex-1 text-center py-1.5 rounded-lg bg-rose-500 text-white text-[10px] font-semibold cursor-default">Enviar seguimiento</div>
                  <div class="flex-1 text-center py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-500 text-[10px] font-medium cursor-default">Exportar PDF</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const stepRefs = ref<(HTMLElement | null)[]>(new Array(4).fill(null))
const activeSteps = reactive<boolean[]>(new Array(4).fill(false))

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
  { label: 'Cotizaciones', icon: 'i-lucide-file-text', active: true },
  { label: 'Catálogo', icon: 'i-lucide-package', active: false },
  { label: 'Flujos', icon: 'i-lucide-git-branch', active: false },
  { label: 'IA', icon: 'i-lucide-brain-circuit', active: false },
]

const lineItems = [
  { desc: 'Hormigón H-30 (m³)', qty: '120 unidades', price: '$2.400.000' },
  { desc: 'Mano de obra especializada', qty: '80 hrs', price: '$1.200.000' },
  { desc: 'Arriendo andamios', qty: '2 semanas', price: '$600.000' },
]

const steps = [
  {
    title: 'Llega el pedido',
    sub: 'WhatsApp, correo o formulario',
    detail: 'La IA lo lee, entiende qué se necesita y crea el caso automáticamente — sin importar si llegó como audio, foto o texto informal.',
  },
  {
    title: 'La IA arma la cotización',
    sub: 'Catálogo + historial + condiciones',
    detail: 'Consulta tu catálogo, aplica precios, márgenes y condiciones comerciales. La cotización queda lista en segundos.',
  },
  {
    title: 'Tú apruebas',
    sub: 'Revisas y envías con un clic',
    detail: 'Revisas, ajustas si quieres, y la envías al cliente por email, PDF o link web — desde el escritorio o el celular.',
  },
  {
    title: 'Controlas el cierre',
    sub: 'Seguimiento automático hasta cerrar',
    detail: 'El flujo sigue: alertas de seguimiento, estado en tiempo real y métricas de cierre hasta que el trato se gana o se pierde.',
  },
]
</script>
