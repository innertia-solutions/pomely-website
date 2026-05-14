<template>
  <section class="py-16 md:py-24 bg-stone-50 dark:bg-stone-900 overflow-hidden">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- ── Left: Flow diagram ── -->
        <div class="relative flex flex-col items-center select-none">

          <!-- Input type pills -->
          <div class="flex flex-wrap justify-center gap-1.5 z-10 mb-4">
            <div
              v-for="ft in inputTypes"
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

          <!-- Sources: 4 columnas -->
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
            <div class="absolute left-1/2 top-[38px] -translate-x-1/2 w-2 h-2 rounded-full bg-orange-400 ring-2 ring-stone-50 dark:ring-stone-900" />
          </div>

          <!-- Motor de cotización -->
          <div class="w-full max-w-xs rounded-2xl bg-stone-900 dark:bg-stone-800 border border-stone-700 shadow-xl z-10 overflow-hidden">
            <div class="px-4 py-3 flex items-center gap-3 border-b border-stone-700/60">
              <div class="w-8 h-8 rounded-xl bg-orange-600 flex items-center justify-center shrink-0 relative">
                <UIcon name="i-lucide-hard-drive-upload" class="size-4 text-white" />
                <span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 ring-2 ring-stone-900 animate-pulse" />
              </div>
              <div>
                <p class="text-xs font-bold text-white">Motor de cotización</p>
                <p class="text-[10px] text-stone-400">Lectura · Extracción · Clasificación</p>
              </div>
            </div>
            <div class="px-4 py-3 space-y-2">
              <div v-for="doc in processingDocs" :key="doc.name" class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full shrink-0" :class="doc.done ? 'bg-green-400' : 'bg-orange-400 animate-pulse'" />
                <span class="text-[10px] text-stone-400 flex-1 truncate">{{ doc.name }}</span>
                <span class="text-[9px]" :class="doc.done ? 'text-green-400' : 'text-orange-400'">{{ doc.status }}</span>
              </div>
            </div>
            <div class="px-4 py-2 border-t border-stone-800 flex items-center justify-between">
              <span class="text-[10px] text-stone-500">Cotizaciones este mes</span>
              <span class="text-xs font-bold text-orange-400 font-mono">1.243</span>
            </div>
          </div>

          <!-- Connector motor → IA -->
          <div class="relative flex flex-col items-center z-0">
            <div class="w-px h-5 bg-stone-200 dark:bg-stone-700" />
            <div class="w-2 h-2 rounded-full bg-orange-400 ring-2 ring-stone-50 dark:ring-stone-900" />
            <div class="w-px h-5 bg-stone-200 dark:bg-stone-700" />
          </div>

          <!-- IA Motor -->
          <div class="w-full max-w-xs rounded-2xl bg-orange-950 border border-orange-800/60 shadow-lg shadow-orange-900/30 z-10 overflow-hidden">
            <div class="px-4 py-3 flex items-center gap-3">
              <div class="w-8 h-8 rounded-xl bg-orange-600/80 flex items-center justify-center shrink-0">
                <UIcon name="i-lucide-brain-circuit" class="size-4 text-white" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-bold text-orange-100">IA · Motor de cotización</p>
                <p class="text-[10px] text-orange-400">Catálogo · Precios · Historial</p>
              </div>
            </div>
            <div class="px-4 pb-3 flex flex-wrap gap-1.5">
              <span v-for="tag in aiTags" :key="tag" class="text-[9px] font-semibold px-1.5 py-0.5 rounded-md bg-orange-900/60 text-orange-300 border border-orange-800/50">{{ tag }}</span>
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

        <!-- ── Right: Text ── -->
        <div>
          <p class="mb-3 font-mono text-xs text-stone-400 uppercase tracking-widest">Captura omnicanal</p>
          <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
            Pomely escucha<br />donde llegan los pedidos.
          </h2>
          <p class="mt-1 text-lg font-semibold text-orange-600 dark:text-orange-400">
            La IA entiende y cotiza.
          </p>
          <p class="mt-4 text-stone-500 dark:text-stone-400 leading-relaxed">
            Llega un audio por WhatsApp, un correo con un Excel adjunto o un formulario web — Pomely los procesa todos, extrae la información y arma el caso de cotización automáticamente.
          </p>

          <div class="mt-8 grid grid-cols-2 gap-4">
            <div
              v-for="feat in features"
              :key="feat.title"
              class="group p-4 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-200"
            >
              <div class="w-8 h-8 rounded-lg bg-stone-50 dark:bg-stone-700 border border-stone-200 dark:border-stone-600 flex items-center justify-center mb-3 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                <UIcon :name="feat.icon" class="size-4 text-stone-400 group-hover:text-orange-600 transition-colors" />
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

const WhatsAppIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', class: 'w-4 h-4', fill: '#25D366' }, [
    h('path', { d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z' }),
    h('path', { d: 'M11.5 2C6.253 2 2 6.253 2 11.5c0 1.89.52 3.658 1.428 5.168L2 22l5.5-1.404A9.448 9.448 0 0011.5 21c5.247 0 9.5-4.253 9.5-9.5S16.747 2 11.5 2zm0 17.25a7.718 7.718 0 01-3.944-1.082l-.283-.168-2.928.748.778-2.845-.185-.292A7.699 7.699 0 013.75 11.5c0-4.273 3.477-7.75 7.75-7.75s7.75 3.477 7.75 7.75-3.477 7.75-7.75 7.75z' }),
  ]),
})

const GmailIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', class: 'w-4 h-4' }, [
    h('path', { d: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z', fill: '#EA4335' }),
  ]),
})

const OutlookIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', class: 'w-4 h-4', fill: 'none' }, [
    h('rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', fill: '#0078D4' }),
    h('path', { d: 'M2 8l10 6 10-6', stroke: 'white', 'stroke-width': '1.5', fill: 'none' }),
  ]),
})

const FormIcon = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', class: 'w-4 h-4', fill: 'none', stroke: '#78716c', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' }),
    h('polyline', { points: '14 2 14 8 20 8' }),
    h('line', { x1: '8', y1: '13', x2: '16', y2: '13' }),
    h('line', { x1: '8', y1: '17', x2: '16', y2: '17' }),
  ]),
})

const sources = [
  { label: 'WhatsApp', icon: WhatsAppIcon, iconBg: '#dcfce7' },
  { label: 'Gmail', icon: GmailIcon, iconBg: '#fef2f2' },
  { label: 'Outlook', icon: OutlookIcon, iconBg: '#eff6ff' },
  { label: 'Formulario', icon: FormIcon, iconBg: '#f5f4f3' },
]

const inputTypes = [
  { label: 'Audio', color: '#25D366' },
  { label: 'Imagen', color: '#f97316' },
  { label: 'PDF', color: '#dc2626' },
  { label: 'Email', color: '#0078D4' },
  { label: 'Texto', color: '#78716c' },
]

const processingDocs = [
  { name: 'Pedido Constructora Sur (audio WA)', status: '✓ listo', done: true },
  { name: 'Solicitud Retail Norte — correo', status: 'extrayendo…', done: false },
  { name: 'Formulario web — Clínica Providencia', status: 'en cola', done: false },
]

const aiTags = ['Catálogo', 'Precios', 'Historial', 'Márgenes', 'Condiciones', 'Cliente']

const outputs = [
  {
    label: 'PDF',
    icon: 'i-lucide-file-text',
    cardClass: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900',
    iconBg: 'bg-red-100 dark:bg-red-900/40',
    iconColor: 'text-red-600 dark:text-red-400',
    labelColor: 'text-red-700 dark:text-red-400',
  },
  {
    label: 'Email',
    icon: 'i-lucide-mail',
    cardClass: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900',
    iconBg: 'bg-blue-100 dark:bg-blue-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    labelColor: 'text-blue-700 dark:text-blue-400',
  },
  {
    label: 'Link web',
    icon: 'i-lucide-link',
    cardClass: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900',
    iconBg: 'bg-green-100 dark:bg-green-900/40',
    iconColor: 'text-green-600 dark:text-green-400',
    labelColor: 'text-green-700 dark:text-green-400',
  },
  {
    label: 'WhatsApp',
    icon: 'i-lucide-message-circle',
    cardClass: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    labelColor: 'text-emerald-700 dark:text-emerald-400',
  },
]

const features = [
  { icon: 'i-lucide-mic', title: 'Audio e imagen', desc: 'Entiende pedidos en audio de WhatsApp o fotos de listas escritas a mano.' },
  { icon: 'i-lucide-mail-open', title: 'Lectura de correos', desc: 'Conecta Gmail u Outlook y Pomely procesa los correos de cotización automáticamente.' },
  { icon: 'i-lucide-package-search', title: 'Extracción de ítems', desc: 'Identifica productos, cantidades y condiciones sin importar el formato del pedido.' },
  { icon: 'i-lucide-send', title: 'Multicanal de salida', desc: 'Envía la cotización por PDF, email, link web o directamente por WhatsApp.' },
]
</script>
