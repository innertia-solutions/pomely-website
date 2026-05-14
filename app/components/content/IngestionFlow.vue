<template>
  <section class="py-16 md:py-24 bg-stone-50 dark:bg-stone-900 overflow-hidden">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- ── Left: Flow diagram ── -->
        <div class="relative flex flex-col items-center select-none">

          <!-- File type pills -->
          <div class="flex flex-wrap justify-center gap-1.5 z-10 mb-4">
            <div
              v-for="ft in fileTypes"
              :key="ft.label"
              class="flex items-center gap-1 border rounded-md px-2 py-1 text-[10px] font-semibold bg-white dark:bg-stone-900"
              :style="{ borderColor: ft.color + '44', color: ft.color }"
            >
              <svg class="size-2.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
              {{ ft.label }}
            </div>
          </div>

          <!-- Sources: 4 columnas compactas -->
          <div class="w-full grid grid-cols-4 gap-2 z-10">
            <div
              v-for="src in sources"
              :key="src.label"
              class="flex flex-col items-center gap-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-2.5 shadow-xs"
            >
              <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" :style="{ background: src.iconBg }">
                <component :is="src.icon" class="w-4 h-4" />
              </div>
              <span class="text-[10px] font-medium text-stone-500 dark:text-stone-400 text-center leading-tight">{{ src.label }}</span>
            </div>
          </div>

          <!-- Connector 4→1 -->
          <div class="w-full relative h-10 z-0">
            <div class="absolute top-0 w-px h-5 bg-stone-200 dark:bg-stone-700" style="left:12.5%" />
            <div class="absolute top-0 w-px h-5 bg-stone-200 dark:bg-stone-700" style="left:37.5%" />
            <div class="absolute top-0 w-px h-5 bg-stone-200 dark:bg-stone-700" style="left:62.5%" />
            <div class="absolute top-0 w-px h-5 bg-stone-200 dark:bg-stone-700" style="left:87.5%" />
            <div class="absolute h-px bg-stone-200 dark:bg-stone-700" style="top:20px; left:12.5%; right:12.5%" />
            <div class="absolute left-1/2 -translate-x-1/2 w-px h-5 bg-stone-200 dark:bg-stone-700" style="top:20px" />
            <div class="absolute left-1/2 top-[38px] -translate-x-1/2 w-2 h-2 rounded-full bg-violet-400 ring-2 ring-stone-50 dark:ring-stone-900" />
          </div>

          <!-- Ingestor de conocimiento -->
          <div class="w-full max-w-xs rounded-2xl bg-stone-900 dark:bg-stone-800 border border-stone-700 shadow-xl z-10 overflow-hidden">
            <div class="px-4 py-3 flex items-center gap-3 border-b border-stone-700/60">
              <div class="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center shrink-0 relative">
                <UIcon name="i-lucide-hard-drive-upload" class="size-4 text-white" />
                <span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 ring-2 ring-stone-900 animate-pulse" />
              </div>
              <div>
                <p class="text-xs font-bold text-white">Ingestor de conocimiento</p>
                <p class="text-[10px] text-stone-400">OCR · Clasificación · Indexación</p>
              </div>
            </div>
            <!-- Animated processing rows -->
            <div class="px-4 py-3 space-y-2">
              <div v-for="(doc, i) in processingDocs" :key="doc.name" class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full shrink-0" :class="doc.done ? 'bg-green-400' : 'bg-violet-400 animate-pulse'" />
                <span class="text-[10px] text-stone-400 flex-1 truncate">{{ doc.name }}</span>
                <span class="text-[9px]" :class="doc.done ? 'text-green-400' : 'text-violet-400'">{{ doc.status }}</span>
              </div>
            </div>
            <div class="px-4 py-2 border-t border-stone-800 flex items-center justify-between">
              <span class="text-[10px] text-stone-500">Total procesados</span>
              <span class="text-xs font-bold text-violet-400 font-mono scanning-counter">2.847</span>
            </div>
          </div>

          <!-- Connector ingestor → IA -->
          <div class="relative flex flex-col items-center z-0">
            <div class="w-px h-5 bg-stone-200 dark:bg-stone-700" />
            <div class="w-2 h-2 rounded-full bg-violet-400 ring-2 ring-stone-50 dark:ring-stone-900" />
            <div class="w-px h-5 bg-stone-200 dark:bg-stone-700" />
          </div>

          <!-- IA Motor de conocimiento -->
          <div class="w-full max-w-xs rounded-2xl bg-violet-950 border border-violet-800/60 shadow-lg shadow-violet-900/30 z-10 overflow-hidden">
            <div class="px-4 py-3 flex items-center gap-3">
              <div class="w-8 h-8 rounded-xl bg-violet-600/80 flex items-center justify-center shrink-0">
                <UIcon name="i-lucide-brain-circuit" class="size-4 text-white" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-bold text-violet-100">IA · Motor de conocimiento</p>
                <p class="text-[10px] text-violet-400">Análisis semántico · Mapeo normativo</p>
              </div>
            </div>
            <div class="px-4 pb-3 flex flex-wrap gap-1.5">
              <span v-for="tag in aiTags" :key="tag" class="text-[9px] font-semibold px-1.5 py-0.5 rounded-md bg-violet-900/60 text-violet-300 border border-violet-800/50">{{ tag }}</span>
            </div>
          </div>

          <!-- Connector IA → outputs (1→4) -->
          <div class="w-full relative h-12 z-0">
            <div class="absolute left-1/2 -translate-x-1/2 top-0 w-px h-5 bg-stone-200 dark:bg-stone-700" />
            <div class="absolute h-px bg-stone-200 dark:bg-stone-700" style="top:20px; left:12%;right:12%" />
            <div class="absolute top-5 w-px h-7 bg-stone-200 dark:bg-stone-700" style="left:12%" />
            <div class="absolute top-5 w-px h-7 bg-stone-200 dark:bg-stone-700" style="left:37.5%" />
            <div class="absolute top-5 w-px h-7 bg-stone-200 dark:bg-stone-700" style="right:37.5%" />
            <div class="absolute top-5 w-px h-7 bg-stone-200 dark:bg-stone-700" style="right:12%" />
          </div>

          <!-- Output nodes -->
          <div class="w-full grid grid-cols-4 gap-2 z-10">
            <div
              v-for="out in outputs"
              :key="out.label"
              class="flex flex-col items-center gap-1.5 rounded-xl border p-2.5 text-center"
              :class="out.cardClass"
            >
              <div class="w-7 h-7 rounded-lg flex items-center justify-center" :class="out.iconBg">
                <UIcon :name="out.icon" class="size-3.5" :class="out.iconColor" />
              </div>
              <span class="text-[9px] font-semibold leading-tight" :class="out.labelColor">{{ out.label }}</span>
            </div>
          </div>

        </div>
        <!-- ── End diagram ── -->

        <!-- ── Right: Text + features ── -->
        <div>
          <p class="mb-3 font-mono text-xs text-stone-400 uppercase tracking-widest">Ingesta documental</p>
          <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
            Distintas fuentes,<br />un solo repositorio.
          </h2>
          <p class="mt-1 text-lg font-semibold text-violet-600 dark:text-violet-400">
            La IA organiza y analiza.
          </p>
          <p class="mt-4 text-stone-500 dark:text-stone-400 leading-relaxed">
            Tus documentos en un solo lugar seguro, analizados, versionados y gestionados — listos para ser cruzados con tus auditorías por Documentia.
          </p>

          <div class="mt-8 grid grid-cols-2 gap-4">
            <div
              v-for="feat in features"
              :key="feat.title"
              class="group p-4 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-200"
            >
              <div class="w-8 h-8 rounded-lg bg-stone-50 dark:bg-stone-700 border border-stone-200 dark:border-stone-600 flex items-center justify-center mb-3 group-hover:bg-violet-50 group-hover:border-violet-100 transition-colors">
                <UIcon :name="feat.icon" class="size-4 text-stone-400 group-hover:text-violet-600 transition-colors" />
              </div>
              <p class="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1">{{ feat.title }}</p>
              <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{{ feat.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

// Icons
const GoogleDriveIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', class: 'w-4 h-4' }, [
    h('path', { d: 'M4.5 19.5l3-5.25H19.5L16.5 19.5H4.5z', fill: '#34A853' }),
    h('path', { d: 'M8.25 6L4.5 12.75l3 5.25L11.25 12 8.25 6z', fill: '#FBBC05' }),
    h('path', { d: 'M15.75 6H8.25L11.25 12h7.5l-3-6z', fill: '#4285F4' }),
  ]),
})

const OneDriveIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', class: 'w-4 h-4', fill: 'none' }, [
    h('path', { d: 'M20.5 14.5a4 4 0 0 0-4-4 4 4 0 0 0-.5.03A5.5 5.5 0 0 0 5.5 13.5a3.5 3.5 0 0 0 .5 7h13a3 3 0 0 0 1.5-5.6V14.5z', fill: '#0078D4' }),
  ]),
})

const UploadIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', class: 'w-4 h-4', fill: 'none', stroke: '#78716c', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
    h('polyline', { points: '17 8 12 3 7 8' }),
    h('line', { x1: '12', y1: '3', x2: '12', y2: '15' }),
  ]),
})

const DatabaseIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', class: 'w-4 h-4', fill: 'none', stroke: '#6366f1', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
    h('path', { d: 'M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5' }),
    h('path', { d: 'M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3' }),
  ]),
})

const sources = [
  { label: 'Base de datos', icon: DatabaseIcon, iconBg: '#eef2ff' },
  { label: 'Google Drive', icon: GoogleDriveIcon, iconBg: '#f8f9fa' },
  { label: 'OneDrive', icon: OneDriveIcon, iconBg: '#e8f4fd' },
  { label: 'Archivos', icon: UploadIcon, iconBg: '#f5f4f3' },
]

const fileTypes = [
  { label: 'PDF', color: '#dc2626' },
  { label: 'Word', color: '#2563eb' },
  { label: 'Excel', color: '#16a34a' },
  { label: 'Imágenes', color: '#9333ea' },
  { label: 'Correos', color: '#d97706' },
  { label: 'XML', color: '#0891b2' },
]

const processingDocs = [
  { name: 'Manual de calidad SGI v3.pdf', status: '✓ listo', done: true },
  { name: 'Proc. inspección Planta Norte', status: 'indexando…', done: false },
  { name: 'Política HSSEQ 2025.docx', status: 'en cola', done: false },
]

const aiTags = ['ISO 9001', 'ISO 45001', 'SGI', 'Cláusulas', 'Evidencia', 'Versiones']

const outputs = [
  {
    label: 'Resultado',
    icon: 'i-lucide-file-check-2',
    cardClass: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900',
    iconBg: 'bg-green-100 dark:bg-green-900/40',
    iconColor: 'text-green-600 dark:text-green-400',
    labelColor: 'text-green-700 dark:text-green-400',
  },
  {
    label: 'Brechas',
    icon: 'i-lucide-scan-search',
    cardClass: 'bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-900',
    iconBg: 'bg-amber-100 dark:bg-amber-900/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
    labelColor: 'text-amber-700 dark:text-amber-400',
  },
  {
    label: 'Análisis',
    icon: 'i-lucide-chart-no-axes-combined',
    cardClass: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900',
    iconBg: 'bg-blue-100 dark:bg-blue-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    labelColor: 'text-blue-700 dark:text-blue-400',
  },
  {
    label: 'Índice',
    icon: 'i-lucide-library',
    cardClass: 'bg-violet-50 dark:bg-violet-900/20 border-violet-100 dark:border-violet-900',
    iconBg: 'bg-violet-100 dark:bg-violet-900/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
    labelColor: 'text-violet-700 dark:text-violet-400',
  },
]

const features = [
  { icon: 'i-lucide-scan-text', title: 'OCR e indexación', desc: 'Extrae texto de PDFs escaneados, imágenes y archivos legacy.' },
  { icon: 'i-lucide-tags', title: 'Clasificación automática', desc: 'Categoriza por tipo, proceso y relevancia normativa sin intervención.' },
  { icon: 'i-lucide-git-merge', title: 'Deduplicación', desc: 'Detecta versiones duplicadas y consolida el documento vigente.' },
  { icon: 'i-lucide-link-2', title: 'Mapeo a requisitos', desc: 'Vincula automáticamente documentos a cláusulas de tu sistema de gestión.' },
]
</script>
