# Pomely Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the Documentia landing page into the Pomely landing page — same Nuxt 4 / Nuxt UI v3 structure, all content and colors replaced.

**Architecture:** Pure content migration — no new components needed. Each component that has hardcoded content gets rewritten in-place. All data-driven components (StatsSection, PlatformLayers, FeaturesSection, UseCasesSection, TrustSection) are fed from `index.vue`. Color changes from `violet` → `orange` throughout.

**Tech Stack:** Nuxt 4, Nuxt UI v3, Tailwind CSS v4, Vue 3, Bun

---

### Task 1: Global config — color + branding

**Files:**
- Modify: `app.config.ts`

- [ ] **Step 1: Update app.config.ts**

Replace the full file content:

```ts
export default defineAppConfig({
  github: false,

  ui: {
    colors: {
      primary: 'orange',
      secondary: 'stone',
      neutral: 'stone',
    },
    button: {
      color: {
        stone: {
          solid: 'bg-stone-900 text-white hover:bg-stone-800',
        }
      }
    }
  },

  docus: {
    title: 'Pomely',
    description: 'Sistema de cotización con IA. Captura pedidos, arma cotizaciones automáticamente y controla tus flujos comerciales.',

    image: '/isologo.png',

    socials: {},

    header: {
      logo: {
        light: '/isologo.png',
        dark: '/isologo.png',
      },
      title: 'Pomely',
      showTitle: true,
      colorMode: false,
    },

    aside: {
      level: 0,
      collapsed: false,
    },

    main: {
      padded: true,
      fluid: false,
    },

    footer: {
      credits: {
        text: '© 2026 Pomely. Todos los derechos reservados.',
        href: '',
      },
      textLinks: [],
      iconLinks: [],
    },
  },
})
```

- [ ] **Step 2: Commit**

```bash
git add app.config.ts
git commit -m "feat: set Pomely branding and orange primary color"
```

---

### Task 2: index.vue — all page data

**Files:**
- Modify: `app/pages/index.vue`

- [ ] **Step 1: Replace index.vue content**

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'Pomely — Cotiza, controla, cierra.',
  description: 'Sistema de cotización con IA. Captura pedidos desde WhatsApp, Gmail u Outlook, arma cotizaciones en segundos y controla tus flujos comerciales.',
})

const stats = [
  { value: 'Captura', label: 'Recibe pedidos desde cualquier canal — WhatsApp, correo o formulario', icon: 'i-lucide-inbox' },
  { value: 'Cotiza con IA', label: 'La IA arma la cotización en segundos usando tu catálogo e historial', icon: 'i-lucide-brain-circuit' },
  { value: 'Controla y cierra', label: 'Flujos configurables, alertas, seguimiento y métricas de cierre', icon: 'i-lucide-git-branch' },
]

const platformLayers = [
  {
    icon: 'i-lucide-inbox',
    title: 'Captura omnicanal',
    description: 'Recibe pedidos desde WhatsApp, Gmail y Outlook. La IA entiende el contexto y crea el caso automáticamente.',
    points: [
      'Lectura automática de correos entrantes',
      'Extracción de productos y cantidades',
      'Sin carga manual de datos',
    ],
  },
  {
    icon: 'i-lucide-brain-circuit',
    title: 'Motor de cotización con IA',
    description: 'Arma cotizaciones en segundos usando tu catálogo, historial y condiciones comerciales.',
    points: [
      'Precios y márgenes aplicados automáticamente',
      'Aprende del historial de cotizaciones',
      'Formato y branding de tu empresa',
    ],
  },
  {
    icon: 'i-lucide-git-branch',
    title: 'Flujos configurables',
    description: 'Define estados, restricciones, alertas y condiciones. Tu proceso, no el nuestro.',
    points: [
      'Plantillas listas para venta simple, proyectos y licitaciones',
      'Editor visual drag-and-drop',
      'Alertas automáticas de seguimiento',
    ],
  },
]

const features = [
  {
    icon: 'i-lucide-zap',
    title: 'Cotización por IA',
    description: 'De audio, foto o texto a cotización formal en segundos.',
  },
  {
    icon: 'i-lucide-package',
    title: 'Catálogo inteligente',
    description: 'Productos, precios y condiciones que la IA consulta al cotizar.',
  },
  {
    icon: 'i-lucide-git-branch',
    title: 'Flujos configurables',
    description: 'Estados, restricciones y alertas a medida de tu empresa.',
  },
  {
    icon: 'i-lucide-layers',
    title: 'Multicanal',
    description: 'WhatsApp, Gmail y Outlook conectados en un solo hub.',
  },
  {
    icon: 'i-lucide-bell',
    title: 'Seguimiento automático',
    description: 'Alertas cuando una cotización lleva días sin respuesta.',
  },
  {
    icon: 'i-lucide-chart-no-axes-combined',
    title: 'Métricas de cierre',
    description: 'Tasa de conversión, tiempo promedio, pipeline activo en tiempo real.',
  },
]

const useCases = [
  {
    icon: 'i-lucide-hard-hat',
    title: 'Construcción y proyectos',
    description: 'Cotizaciones complejas con múltiples ítems, partidas y condiciones de obra.',
  },
  {
    icon: 'i-lucide-shopping-cart',
    title: 'Retail y distribución',
    description: 'Volumen alto, catálogo grande, equipos de vendedores que cotizan en terreno.',
  },
  {
    icon: 'i-lucide-briefcase',
    title: 'Servicios profesionales',
    description: 'Propuestas con desglose de horas, alcances y condiciones de contrato.',
  },
  {
    icon: 'i-lucide-factory',
    title: 'Proveedores industriales',
    description: 'Licitaciones y pedidos recurrentes con clientes grandes y plazos ajustados.',
  },
]

const trustItems = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Tus datos, seguros',
    description: 'Todo cifrado, con control de acceso por roles. Cada acción queda registrada con usuario y fecha.',
  },
  {
    icon: 'i-lucide-brain-circuit',
    title: 'IA sobre tu contexto',
    description: 'El motor entiende tu catálogo, tus precios, tus condiciones y el historial de tu empresa.',
  },
  {
    icon: 'i-lucide-plug',
    title: 'Se conecta a lo que ya usas',
    description: 'Gmail, Outlook y WhatsApp integrados. API abierta para conectar con tu ERP o sistema interno.',
  },
]
</script>

<template>
  <div class="relative">

    <!-- Glow de fondo: naranja difuminado en la transición hero → body -->
    <div class="pointer-events-none absolute inset-x-0 top-[380px] -z-10 flex justify-center overflow-hidden" aria-hidden="true">
      <div class="w-[900px] h-[500px] rounded-full bg-orange-500/10 dark:bg-orange-500/8 blur-[140px]" />
    </div>

    <ContentCustomHero
      title="Toma el control de tus flujos de cotización con IA."
      description="Pomely captura pedidos desde WhatsApp, correo o donde lleguen — la IA entiende el contexto, arma la cotización y tu equipo solo tiene que aprobar y cerrar."
      :primary-button="{ text: 'Solicitar demo', to: 'mailto:hola@pomely.cl' }"
      :secondary-button="{ text: 'Ver cómo funciona', to: '/#producto' }"
    />

    <ContentStatsSection :stats="stats" />

    <ContentWorkflowSection />

    <ContentIngestionFlow />

    <ContentAuditKanbanSection />

    <ContentPlatformLayers
      eyebrow="Plataforma"
      title="Tres capas para cotizar más rápido y cerrar más tratos."
      description="De la captura del pedido al cierre del trato — todo conectado, sin trabajo manual."
      :layers="platformLayers"
    />

    <ContentFeaturesSection
      title="Todo lo que necesitas para cotizar y cerrar sin fricción"
      subtitle="Captura, IA, flujos configurables y métricas en una sola plataforma."
      :features="features"
    />

    <ContentUseCasesSection
      eyebrow="Casos de uso"
      title="Para equipos comerciales que quieren cotizar mejor."
      description=""
      :use-cases="useCases"
    />

    <ContentTrustSection
      eyebrow="Diseñado para crecer contigo"
      title="Simple de arrancar, potente para escalar."
      description="Funciona desde el día uno y se adapta a medida que tu equipo crece."
      :items="trustItems"
    />

    <ContentPositioningSection />

    <ContentCelebrationSection />

    <ContentFaqSection />
  </div>
</template>
```

- [ ] **Step 2: Commit**

```bash
git add app/pages/index.vue
git commit -m "feat: replace all page data with Pomely content"
```

---

### Task 3: CustomHero.vue — mockup + copy

**Files:**
- Modify: `app/components/content/CustomHero.vue`

- [ ] **Step 1: Update hardcoded copy, mock UI and colors**

Replace the full file:

```vue
<template>
  <div class="relative overflow-hidden bg-white dark:bg-stone-950">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M0%200v40M40%200v40M0%200h40M0%2040h40%22%20stroke%3D%22%23e7e5e4%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M0%200v40M40%200v40M0%200h40M0%2040h40%22%20stroke%3D%22%2344403c%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')] opacity-60" />
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-50/80 dark:from-stone-950/80 to-transparent pointer-events-none" />

    <div class="relative pt-12 pb-20 md:pt-20 md:pb-28">
      <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="grid md:grid-cols-12 items-center gap-y-10 gap-x-8 lg:gap-x-12">

          <!-- Left: copy -->
          <div class="md:col-span-6 lg:col-span-5">
            <p class="mb-3 font-mono text-xs text-stone-400 uppercase tracking-widest">Sistema de cotización con IA</p>
            <h1 class="font-bold text-stone-900 dark:text-stone-50 text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
              {{ title }}
            </h1>
            <p class="mt-5 text-base md:text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
              {{ description }}
            </p>

            <div class="mt-7 flex flex-wrap items-center gap-3">
              <a
                :href="primaryButton.to"
                class="py-2.5 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-none transition-all focus:outline-none"
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
                IA lista en segundos
              </div>
              <div class="flex items-center gap-1.5 text-xs text-stone-400">
                <svg class="size-4 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Flujos configurables
              </div>
            </div>
          </div>

          <!-- Right: UI mockup -->
          <div class="md:col-span-6 lg:col-span-7">
            <div class="relative">
              <div class="rounded-xl border border-stone-200 dark:border-stone-700 shadow-2xl overflow-hidden bg-white dark:bg-stone-900">
                <!-- Browser bar -->
                <div class="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
                  <div class="flex gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-orange-400" />
                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div class="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div class="flex-1 mx-4">
                    <div class="bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 rounded px-3 py-0.5 text-[11px] text-stone-400 font-mono">
                      app.pomely.cl/cotizaciones
                    </div>
                  </div>
                </div>

                <!-- App UI -->
                <div class="bg-stone-50 dark:bg-stone-900 p-3">
                  <div class="flex gap-3" style="min-height: 320px">
                    <!-- Sidebar -->
                    <div class="w-36 shrink-0 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 p-2.5 flex flex-col gap-0.5">
                      <p class="text-[9px] font-semibold text-stone-400 uppercase tracking-wider px-2 mb-2">Pomely</p>
                      <div
                        v-for="item in sidebarItems"
                        :key="item.label"
                        class="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] transition-colors"
                        :class="item.active ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium' : 'text-stone-500 dark:text-stone-400'"
                      >
                        <svg class="size-3 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                        </svg>
                        {{ item.label }}
                      </div>
                    </div>

                    <!-- Main content -->
                    <div class="flex-1 flex flex-col gap-2.5 min-w-0">
                      <!-- Header -->
                      <div class="flex items-center justify-between gap-2">
                        <div class="min-w-0">
                          <h3 class="text-xs font-semibold text-stone-800 dark:text-stone-200 truncate">Cotizaciones activas</h3>
                          <p class="text-[10px] text-stone-400">Mayo 2025 · 14 cotizaciones</p>
                        </div>
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-medium bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-100 dark:border-orange-800 shrink-0">$28.4M pipeline</span>
                      </div>

                      <!-- Quote list -->
                      <div class="bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 p-2.5 flex flex-col gap-1.5">
                        <p class="text-[9px] font-semibold text-stone-400 uppercase tracking-wider mb-0.5">Recientes</p>
                        <div v-for="q in quotes" :key="q.client" class="flex items-center gap-2">
                          <span class="w-1.5 h-1.5 rounded-full shrink-0" :style="{ background: q.color }" />
                          <span class="text-[10px] text-stone-600 dark:text-stone-400 flex-1 truncate">{{ q.client }}</span>
                          <span class="text-[9px] font-medium text-stone-500 shrink-0">{{ q.amount }}</span>
                          <span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium shrink-0"
                            :class="q.statusClass">{{ q.status }}</span>
                        </div>
                      </div>

                      <!-- Metrics strip -->
                      <div class="border border-stone-100 dark:border-stone-800 rounded-xl p-3 bg-stone-50 dark:bg-stone-900">
                        <p class="text-[9px] font-bold text-stone-500 uppercase tracking-wide mb-2">Esta semana</p>
                        <div class="grid grid-cols-3 gap-2">
                          <div v-for="m in metrics" :key="m.label" class="text-center">
                            <p class="text-sm font-bold" :class="m.color">{{ m.value }}</p>
                            <p class="text-[9px] text-stone-400 leading-tight">{{ m.label }}</p>
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
                  <div class="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="size-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-stone-200 leading-tight">Pomely IA armó la cotización</p>
                    <p class="text-stone-400 leading-snug mt-0.5">Constructora Sur · $4.2M · Lista en 8 segundos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
  { label: 'Cotizaciones', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', active: true },
  { label: 'Catálogo', icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z', active: false },
  { label: 'Flujos', icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5', active: false },
  { label: 'IA', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z', active: false },
]

const quotes = [
  { client: 'Constructora del Sur', amount: '$4.200.000', status: 'En negociación', color: '#f97316', statusClass: 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
  { client: 'Retail Zona Norte', amount: '$890.000', status: 'Enviada', color: '#6366f1', statusClass: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' },
  { client: 'Minera Los Andes', amount: '$12.500.000', status: 'Cerrada', color: '#22c55e', statusClass: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
  { client: 'Clínica Providencia', amount: '$320.000', status: 'Armando', color: '#f59e0b', statusClass: 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
]

const metrics = [
  { value: '8', label: 'Cotizaciones enviadas', color: 'text-stone-800 dark:text-stone-200' },
  { value: '68%', label: 'Tasa de apertura', color: 'text-orange-600' },
  { value: '3', label: 'Cierres', color: 'text-green-600' },
]
</script>
```

- [ ] **Step 2: Commit**

```bash
git add app/components/content/CustomHero.vue
git commit -m "feat: update CustomHero with Pomely mockup and orange branding"
```

---

### Task 4: WorkflowSection.vue — pasos + mock cotización

**Files:**
- Modify: `app/components/content/WorkflowSection.vue`

- [ ] **Step 1: Update steps (4 pasos) and mock UI**

Replace the full `<script setup>` section (keep the template structure, only change data and colors):

The template structure is unchanged except replacing all `violet` class references with `orange`. Replace the full file:

```vue
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
                  ? 'bg-white dark:bg-stone-950 border-orange-400 text-orange-500'
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
                :class="item.active ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' : 'text-stone-500 dark:text-stone-400'"
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
                <span class="text-[10px] font-semibold bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-800 px-2 py-0.5 rounded-full">En negociación</span>
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
                  <div class="flex-1 text-center py-1.5 rounded-lg bg-orange-600 text-white text-[10px] font-semibold cursor-default">Enviar seguimiento</div>
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
```

- [ ] **Step 2: Commit**

```bash
git add app/components/content/WorkflowSection.vue
git commit -m "feat: update WorkflowSection with Pomely 4-step flow and quote mockup"
```

---

### Task 5: IngestionFlow.vue — canales de entrada y salida

**Files:**
- Modify: `app/components/content/IngestionFlow.vue`

- [ ] **Step 1: Replace sources, processing docs, AI tags, outputs, and copy**

Replace full file:

```vue
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
```

- [ ] **Step 2: Commit**

```bash
git add app/components/content/IngestionFlow.vue
git commit -m "feat: update IngestionFlow with WhatsApp/Gmail/Outlook sources and Pomely outputs"
```

---

### Task 6: PositioningSection.vue — comparativa Pomely vs competidores

**Files:**
- Modify: `app/components/content/PositioningSection.vue`

- [ ] **Step 1: Replace with Pomely comparison grid**

Replace full file:

```vue
<template>
  <section class="py-16 md:py-24 bg-stone-50 dark:bg-stone-900">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">

      <div class="max-w-xl mb-12">
        <p class="mb-2 font-mono text-xs text-stone-400 uppercase tracking-widest">Por qué Pomely</p>
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
          No más Excel.<br />
          No más CRM que nadie usa.
        </h2>
        <p class="mt-3 text-stone-500 dark:text-stone-400 leading-relaxed">
          El mercado tiene dos extremos: WhatsApp + Excel, o CRMs complejos que nadie termina de implementar. Pomely está en el medio — simple de arrancar, potente para escalar.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-5">
        <div
          v-for="col in columns"
          :key="col.label"
          class="rounded-xl border p-6"
          :class="col.highlight
            ? 'bg-stone-900 dark:bg-stone-800 border-stone-700 shadow-xl'
            : 'bg-white dark:bg-stone-800/50 border-stone-200 dark:border-stone-700'"
        >
          <div class="flex items-center gap-2 mb-5">
            <span
              class="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              :class="col.highlight
                ? 'bg-orange-600 text-white'
                : 'bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400'"
            >{{ col.label }}</span>
          </div>

          <ul class="space-y-3.5">
            <li
              v-for="item in col.items"
              :key="item.text"
              class="flex items-start gap-3"
            >
              <span class="shrink-0 mt-0.5">
                <svg v-if="item.type === 'yes'" class="size-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <svg v-else-if="item.type === 'no'" class="size-4 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <svg v-else class="size-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
              <span class="text-sm leading-snug" :class="col.highlight ? 'text-stone-300' : 'text-stone-500 dark:text-stone-400'">
                {{ item.text }}
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const columns = [
  {
    label: 'Excel + WhatsApp',
    highlight: false,
    items: [
      { type: 'no', text: 'Sin trazabilidad de cotizaciones' },
      { type: 'no', text: 'Cada vendedor cotiza a su manera' },
      { type: 'no', text: 'No hay seguimiento automático' },
      { type: 'no', text: 'Métricas imposibles de calcular' },
      { type: 'partial', text: 'Costo cero, pero te cobra en caos y tiempo perdido' },
    ],
  },
  {
    label: 'Pomely',
    highlight: true,
    items: [
      { type: 'yes', text: 'IA arma la cotización en segundos' },
      { type: 'yes', text: 'Flujos y estados configurables por empresa' },
      { type: 'yes', text: 'WhatsApp, Gmail y Outlook integrados' },
      { type: 'yes', text: 'Seguimiento automático con alertas' },
      { type: 'yes', text: 'Listo en minutos, no en meses' },
    ],
  },
  {
    label: 'CRM / Otros cotizadores',
    highlight: false,
    items: [
      { type: 'no', text: 'Sin IA que arme cotizaciones automáticamente' },
      { type: 'partial', text: 'Flujos básicos, difíciles de adaptar' },
      { type: 'no', text: 'Sin integración real con WhatsApp' },
      { type: 'partial', text: 'Seguimiento manual o básico' },
      { type: 'no', text: 'Meses de implementación y configuraciones infinitas' },
    ],
  },
]
</script>
```

- [ ] **Step 2: Commit**

```bash
git add app/components/content/PositioningSection.vue
git commit -m "feat: update PositioningSection with Pomely vs Excel+WA vs CRM comparison"
```

---

### Task 7: CelebrationSection.vue + FaqSection.vue

**Files:**
- Modify: `app/components/content/CelebrationSection.vue`
- Modify: `app/components/content/FaqSection.vue`

- [ ] **Step 1: Update CelebrationSection — copy y colores**

Replace `<script setup>` colors array and template content. Replace full file:

```vue
<template>
  <section class="relative py-20 md:py-28 overflow-hidden bg-stone-900 dark:bg-stone-950">

    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div v-for="p in pieces" :key="p.id"
        class="absolute rounded-sm"
        :style="{
          left: p.left,
          top: '-12px',
          width: p.size,
          height: p.size,
          background: p.color,
          opacity: p.opacity,
          animation: `fall ${p.duration} ${p.delay} linear infinite`,
          transform: `rotate(${p.rotate}deg)`,
        }"
      />
    </div>

    <div class="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto text-center">

      <div class="mb-6 flex justify-center">
        <UIcon name="i-lucide-trophy" class="size-12 text-orange-400" />
      </div>

      <h2 class="font-black text-3xl md:text-5xl text-white leading-tight mb-4">
        Empieza a cotizar con IA<br />
        <span class="text-orange-400">hoy mismo.</span>
      </h2>

      <p class="text-stone-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
        Sin implementaciones largas. Sin curva de aprendizaje.
        Tu equipo cotizando más rápido desde el primer día.
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:hola@pomely.cl"
          class="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-base shadow-lg shadow-orange-900/40 hover:shadow-orange-800/50 transition-all"
        >
          <span>Solicitar demo</span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="mailto:hola@pomely.cl"
          class="inline-flex items-center gap-2 py-3 px-6 rounded-xl border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white font-semibold text-base transition-all"
        >
          <span>Empezar gratis</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const colors = [
  '#f97316', '#ea580c', '#fb923c', '#fdba74',
  '#fbbf24', '#34d399', '#60a5fa', '#e879f9',
  '#fff', '#d1d5db',
]

const pieces = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${4 + Math.random() * 8}px`,
  color: colors[Math.floor(Math.random() * colors.length)],
  opacity: (0.4 + Math.random() * 0.6).toFixed(2),
  duration: `${3 + Math.random() * 5}s`,
  delay: `-${Math.random() * 6}s`,
  rotate: Math.floor(Math.random() * 360),
}))
</script>

<style scoped>
@keyframes fall {
  0%   { transform: translateY(-12px) rotate(0deg);   }
  100% { transform: translateY(110vh)  rotate(720deg); }
}
</style>
```

- [ ] **Step 2: Update FaqSection — preguntas de Pomely**

Replace the `faqs` array in `<script setup>` (keep template unchanged):

```vue
<template>
  <section class="py-16 md:py-24 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="mb-10 max-w-xl mx-auto text-center">
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100">
          Preguntas frecuentes
        </h2>
        <p class="mt-3 text-stone-500 dark:text-stone-400">
          Lo que más nos preguntan antes de agendar una demo.
        </p>
      </div>

      <div class="max-w-2xl mx-auto divide-y divide-stone-200 dark:divide-stone-700">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="py-5"
        >
          <button
            class="w-full flex items-center justify-between gap-4 text-left focus:outline-none group"
            @click="toggle(index)"
          >
            <span class="font-medium text-stone-900 dark:text-stone-100 group-hover:text-stone-700 dark:group-hover:text-stone-300">{{ item.q }}</span>
            <svg
              class="shrink-0 size-5 text-stone-400 transition-transform duration-200"
              :class="openIndex === index ? 'rotate-180' : ''"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div v-if="openIndex === index" class="mt-3 text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
            {{ item.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    q: '¿Necesito integrar mi ERP para usar Pomely?',
    a: 'No. Pomely funciona de forma independiente desde el primer día. Si tienes un ERP, puedes conectarlo vía API para sincronizar el catálogo de productos y precios — pero no es un requisito para empezar.',
  },
  {
    q: '¿Qué pasa si mi catálogo de productos cambia frecuentemente?',
    a: 'Pomely mantiene un catálogo vivo que puedes actualizar en cualquier momento — directamente en la plataforma, por importación de Excel o vía API. La IA siempre usa los precios y productos vigentes al armar cada cotización.',
  },
  {
    q: '¿Puedo personalizar el formato y diseño de mis cotizaciones?',
    a: 'Sí. Puedes configurar el template con el logo de tu empresa, colores, condiciones comerciales, términos y cualquier campo adicional que necesites. Cada cotización sale con la identidad de tu empresa.',
  },
  {
    q: '¿Cómo funciona la integración con Gmail y Outlook?',
    a: 'Conectas tu correo de ventas con OAuth (sin compartir contraseñas). Pomely monitorea los correos entrantes, detecta los que son solicitudes de cotización y crea el caso automáticamente. Tú controlas qué correos procesa.',
  },
  {
    q: '¿Es seguro conectar mi correo de ventas?',
    a: 'Sí. La integración usa OAuth 2.0 — el estándar de la industria. Pomely solo lee los correos que tú autorices, nunca envía correos por su cuenta sin tu aprobación, y puedes revocar el acceso en cualquier momento.',
  },
  {
    q: '¿Funciona para empresas pequeñas o solo para empresas grandes?',
    a: 'Pomely está diseñado para ambos. Una PYME con 2 vendedores puede empezar en minutos con las plantillas de flujo predefinidas. Una empresa grande puede configurar flujos complejos, restricciones por rol y reportería avanzada. El producto escala contigo.',
  },
]
</script>
```

- [ ] **Step 3: Commit**

```bash
git add app/components/content/CelebrationSection.vue app/components/content/FaqSection.vue
git commit -m "feat: update CelebrationSection and FaqSection with Pomely content"
```

---

### Task 8: PRODUCT.md + README.md

**Files:**
- Modify: `PRODUCT.md`
- Modify: `README.md`

- [ ] **Step 1: Replace PRODUCT.md**

```markdown
# Pomely — Documentación base del producto

> Última revisión: 2026-05-13

---

## Qué es

Pomely es un sistema de cotización con IA para empresas.

Captura pedidos desde WhatsApp, Gmail u Outlook, usa IA para armar cotizaciones automáticamente con el catálogo e historial de la empresa, y permite definir flujos comerciales configurables con estados, restricciones y alertas.

La IA es el eje central, no una feature adicional.

---

## Propuesta de valor

> Cotiza, controla, cierra.

Pomely toma el control del proceso comercial de cotización — desde que llega el pedido hasta que se cierra el trato. Rápido para la PYME, potente para la empresa grande.

---

## Problema que resuelve

Los equipos comerciales tienen un problema recurrente: el proceso de cotización es caótico.

- Cotizar tarda demasiado — hay que buscar precios, calcular márgenes, formatear el documento
- Las cotizaciones se pierden o quedan sin seguimiento
- Cada vendedor cotiza a su manera, sin formato ni control
- No hay métricas de cierre ni visibilidad del pipeline

---

## Flujo principal

1. **Llega el pedido** — por WhatsApp, correo (Gmail/Outlook) o formulario web
2. **La IA arma la cotización** — consulta catálogo, historial y condiciones; lista en segundos
3. **El vendedor aprueba** — revisa, ajusta y envía con un clic (PDF, email o link web)
4. **El sistema controla el cierre** — alertas de seguimiento, estados configurables, métricas

---

## Público objetivo

- **PYMEs** — dueños o equipos chicos que cotizan desde el celular
- **Empresas medianas/grandes** — equipos comerciales con muchas cotizaciones y múltiples vendedores

---

## Diferenciadores

| vs. Excel + WhatsApp | Pomely ordena el caos sin cambiar cómo trabaja el equipo |
|---|---|
| vs. CRM | Listo en minutos, no en meses. Sin configuraciones infinitas. |
| vs. ERP | Complementa el ERP en el front comercial, no lo reemplaza |
| vs. Otros cotizadores | La IA arma la cotización — tú solo apruebas y cierras |
```

- [ ] **Step 2: Replace README.md**

```markdown
# Pomely — Website

Landing page de Pomely, sistema de cotización con IA para equipos comerciales.

## Stack

- **Nuxt 4** (`compatibilityVersion: 4`, directorio `app/`)
- **Nuxt UI v3** con `@nuxt/icon` y paleta orange personalizada
- **Tailwind CSS v4** con `@theme` override
- Modo claro por defecto (`colorMode.preference: 'light'`)

## Estructura

```
app/
  pages/
    index.vue              # Página principal (landing)
  components/
    content/
      CustomHero.vue
      StatsSection.vue
      WorkflowSection.vue  # Flujo de cotización con IntersectionObserver
      IngestionFlow.vue    # Diagrama canales → motor IA → outputs
      AuditKanbanSection.vue
      PlatformLayers.vue
      FeaturesSection.vue
      UseCasesSection.vue
      TrustSection.vue
      PositioningSection.vue
      CelebrationSection.vue
      FaqSection.vue
  layouts/
    default.vue
assets/
  css/
    custom.css
```

## Desarrollo

```bash
bun install
# usar el servidor configurado en .claude/launch.json
```
```

- [ ] **Step 3: Commit**

```bash
git add PRODUCT.md README.md
git commit -m "docs: rewrite PRODUCT.md and README.md for Pomely"
```

---

### Task 9: Push y verificación final

- [ ] **Step 1: Push todo**

```bash
git push
```

- [ ] **Step 2: Verificar en el navegador**

Abrir `http://localhost:3000` y verificar:
- Color naranja en hero, botones y acentos
- Logo/título "Pomely" en el header
- Hero: título "Toma el control de tus flujos de cotización con IA"
- Mock del hero: cotizaciones activas con métricas en naranja
- Sección "Así trabaja Pomely" con 4 pasos
- Diagrama de fuentes: WhatsApp, Gmail, Outlook, Formulario
- Kanban: columnas de cotización (Nuevo pedido → Cerrada)
- Posicionamiento: 3 columnas con Pomely destacado en naranja
- CTA final: naranja con "Empieza a cotizar con IA hoy"
- FAQ: preguntas de Pomely
