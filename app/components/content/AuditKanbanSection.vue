<template>
  <section class="py-16 md:py-24 bg-white dark:bg-stone-950 overflow-hidden" id="producto-flujo">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">

      <!-- Header -->
      <div class="mb-10 max-w-xl">
        <p class="mb-2 font-mono text-xs text-stone-400 uppercase tracking-widest">Motor de flujos</p>
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
          Tu proceso comercial, a tu manera.
        </h2>
        <p class="mt-3 text-stone-500 dark:text-stone-400 leading-relaxed">
          Define los estados, condiciones y alertas de tu flujo de cotización. Pomely se adapta a cómo trabaja tu empresa — no al revés.
        </p>
      </div>

      <!-- Kanban board -->
      <div class="overflow-x-auto pb-2 -mx-4 px-4">
        <div class="grid gap-3 min-w-[700px]" style="grid-template-columns: repeat(5, 1fr)">
          <div
            v-for="col in columns"
            :key="col.id"
            class="flex flex-col gap-2"
          >
            <!-- Column header -->
            <div class="flex items-center gap-2 pb-2.5 border-b border-stone-200 dark:border-stone-700">
              <span class="w-2 h-2 rounded-full shrink-0" :style="{ background: col.color }" />
              <span class="text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wide flex-1">{{ col.label }}</span>
              <span class="text-[10px] font-semibold text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-full px-2 py-0.5">{{ col.cards.length }}</span>
            </div>

            <!-- Cards -->
            <div class="flex flex-col gap-2">
              <div
                v-for="card in col.cards"
                :key="card.title"
                class="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-3 hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-sm transition-all cursor-default"
                :style="{ borderLeftWidth: '3px', borderLeftColor: col.color }"
              >
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[10px] font-bold text-stone-400 uppercase tracking-wide">{{ card.client }}</span>
                  <UIcon v-if="card.ai" name="i-lucide-brain-circuit" class="size-3 text-rose-400" />
                </div>
                <p class="text-xs font-semibold text-stone-800 dark:text-stone-200 leading-snug mb-2">{{ card.title }}</p>
                <div class="flex items-center gap-1.5">
                  <UIcon :name="card.icon" class="size-3 text-stone-400" />
                  <span class="text-[10px] text-stone-400">{{ card.meta }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- AI panel -->
      <div class="mt-5 grid sm:grid-cols-[auto_1fr] gap-5 items-start border border-stone-200 dark:border-stone-700 rounded-xl bg-stone-50 dark:bg-stone-900 p-5">
        <div class="flex items-start gap-3 sm:pr-5 sm:border-r sm:border-stone-200 dark:sm:border-stone-700">
          <div class="w-9 h-9 rounded-lg bg-stone-900 dark:bg-stone-800 border border-stone-800 dark:border-stone-700 flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-brain-circuit" class="size-4 text-rose-300" />
          </div>
          <div>
            <p class="text-xs font-semibold text-stone-800 dark:text-stone-200">Pomely IA</p>
            <p class="text-xs text-stone-500 mt-0.5 italic">"¿Cómo va el pipeline esta semana?"</p>
          </div>
        </div>

        <div>
          <p class="text-sm text-stone-600 dark:text-stone-400 mb-3 leading-relaxed">
            Tienes <strong class="text-stone-900 dark:text-stone-100">3 cotizaciones sin respuesta</strong> hace más de 3 días. Constructora del Sur lleva 5 días en negociación — es el trato de mayor valor del mes. Te recomiendo hacer seguimiento hoy.
          </p>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="finding in findings"
              :key="finding.text"
              class="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full px-3 py-1"
            >
              <span class="w-1.5 h-1.5 rounded-full shrink-0" :style="{ background: finding.color }" />
              {{ finding.text }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const columns = [
  {
    id: 'new',
    label: 'Nuevo pedido',
    color: '#94a3b8',
    cards: [
      { title: '50 sillas ergonómicas + instalación', client: 'Empresa ABC', icon: 'i-lucide-mail', meta: 'Llegó por email', ai: true },
      { title: 'Mantención preventiva equipos', client: 'Retail XYZ', icon: 'i-lucide-message-circle', meta: 'Llegó por WhatsApp', ai: false },
    ],
  },
  {
    id: 'draft',
    label: 'Armando',
    color: '#f59e0b',
    cards: [
      { title: 'Proyecto iluminación oficinas', client: 'Constructora Sur', icon: 'i-lucide-brain-circuit', meta: 'IA armando cotiz.', ai: true },
      { title: 'Suministro papelería Q2', client: 'Clínica Norte', icon: 'i-lucide-user', meta: 'Ana G.', ai: false },
    ],
  },
  {
    id: 'sent',
    label: 'Enviada',
    color: '#6366f1',
    cards: [
      { title: 'Catering evento 200 personas', client: 'Minera Los Andes', icon: 'i-lucide-send', meta: 'Enviada hace 1d', ai: false },
    ],
  },
  {
    id: 'negotiation',
    label: 'En negociación',
    color: '#f97316',
    cards: [
      { title: 'Flota 12 vehículos — leasing', client: 'Constructora Sur', icon: 'i-lucide-clock', meta: '5 días en curso', ai: true },
      { title: 'Servicio limpieza mensual', client: 'Banco Regional', icon: 'i-lucide-user', meta: 'Pedro A.', ai: false },
    ],
  },
  {
    id: 'closed',
    label: 'Cerrada',
    color: '#22c55e',
    cards: [
      { title: 'Equipos computación x20', client: 'Municipalidad', icon: 'i-lucide-circle-check', meta: '$4.200.000', ai: false },
    ],
  },
]

const findings = [
  { text: '3 cotizaciones sin respuesta +3d', color: '#f97316' },
  { text: 'Constructora Sur — seguimiento urgente', color: '#f59e0b' },
  { text: '$12.8M en pipeline activo', color: '#22c55e' },
  { text: '78% tasa de apertura esta semana', color: '#6366f1' },
]
</script>
