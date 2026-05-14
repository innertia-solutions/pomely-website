<script setup lang="ts">
useSeoMeta({
  title: 'Pomely — Cotiza, controla, cierra.',
  description: 'Sistema de cotización con IA. Captura pedidos desde WhatsApp, Gmail u Outlook, arma cotizaciones en segundos y controla tus flujos comerciales.',
})

const stats = [
  { value: 'Captura', label: 'Recibe pedidos de cotización desde cualquier canal — WhatsApp, correo o formulario', icon: 'i-lucide-inbox' },
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

    <!-- Glow naranja en la transición hero → body -->
    <div class="pointer-events-none absolute inset-x-0 top-[380px] -z-10 flex justify-center overflow-hidden" aria-hidden="true">
      <div class="w-[900px] h-[500px] rounded-full bg-rose-400/10 dark:bg-rose-400/8 blur-[140px]" />
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
