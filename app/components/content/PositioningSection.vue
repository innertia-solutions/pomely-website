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
