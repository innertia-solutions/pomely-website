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
