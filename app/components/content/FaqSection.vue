<template>
  <section class="py-16 md:py-24 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
    <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Heading -->
      <div class="mb-10 max-w-xl mx-auto text-center">
        <h2 class="font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100">
          Preguntas frecuentes
        </h2>
        <p class="mt-3 text-stone-500 dark:text-stone-400">
          Lo que más nos preguntan antes de agendar una demo.
        </p>
      </div>

      <!-- Accordion -->
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
    q: '¿Para qué tipo de empresas es Documentia?',
    a: 'Documentia está diseñado para empresas que se someten a auditorías externas o internas bajo normas ISO (9001, 14001, 45001), SGI, u otras certificaciones. Agroindustria, minería, logística, manufactura y proveedores certificados son los casos de uso más comunes.',
  },
  {
    q: '¿Reemplaza a nuestro sistema de gestión actual?',
    a: 'No necesariamente. Documentia se puede integrar como capa de control documental y cumplimiento sobre lo que ya tienen. También puede reemplazar flujos en carpetas de red, Drive o correo donde hoy no hay trazabilidad real.',
  },
  {
    q: '¿Cómo funciona el copiloto IA?',
    a: 'El copiloto analiza tu repositorio de documentos, los compara contra los requisitos de tus certificaciones y detecta brechas: documentos vencidos, requisitos sin evidencia, procesos sin respaldo. Puedes consultarle en lenguaje natural qué falta antes de una auditoría específica.',
  },
  {
    q: '¿Cuánto tiempo toma implementar Documentia?',
    a: 'Depende del volumen documental y la estructura de su sistema de gestión. Una implementación básica puede estar lista en 2-3 semanas. Acompañamos el proceso de carga inicial y configuración de la matriz de cumplimiento.',
  },
  {
    q: '¿Los datos están seguros?',
    a: 'Sí. Toda la información se almacena cifrada, con control de acceso por roles y auditoría completa de eventos. Cada acción queda registrada con usuario, fecha y motivo — exactamente lo que necesita para defender un hallazgo ante un auditor.',
  },
]
</script>
