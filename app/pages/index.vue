<script setup lang="ts">
useSeoMeta({
  title: 'Documentia — Llega bien parado a tu próxima auditoría',
  description: 'Plataforma de gestión documental y cumplimiento con IA para empresas que se auditan. Controla documentos, reúne evidencia y prepara auditorías ISO y SGI.',
})

const stats = [
  { value: 'Controla', label: 'Versiones, responsables y vencimientos bajo control', icon: 'i-lucide-folder-lock' },
  { value: 'Evidencia', label: 'Todo lo que demuestra cumplimiento, organizado y trazable', icon: 'i-lucide-paperclip' },
  { value: 'Audita con IA', label: 'El copiloto que detecta brechas antes que el auditor', icon: 'i-lucide-brain-circuit' },
]

const problems = [
  {
    icon: 'i-lucide-folder-open',
    title: 'Documentos repartidos en todos lados',
    description: 'Google Drive, correos, WhatsApp, planillas. Nadie sabe cuál es la versión vigente ni dónde está el respaldo.',
  },
  {
    icon: 'i-lucide-clock-alert',
    title: 'Auditorías preparadas a última hora',
    description: 'Tres días antes de la auditoría, el equipo de calidad corre buscando documentos en un caos de carpetas.',
  },
  {
    icon: 'i-lucide-shield-x',
    title: 'Sin evidencia de cumplimiento',
    description: 'Procesos que existen pero no tienen documentos, firmas ni registros que los respalden ante un auditor.',
  },
]

const platformLayers = [
  {
    icon: 'i-lucide-folder-lock',
    title: 'Gestión documental',
    description: 'Un repositorio central para todos tus documentos críticos con versiones, responsables y vencimientos controlados.',
    points: [
      'Versión vigente con historial completo de cambios',
      'Responsable, estado y fecha de revisión por documento',
      'Búsqueda y filtros por proceso, norma o área',
    ],
  },
  {
    icon: 'i-lucide-paperclip',
    title: 'Evidencia y cumplimiento',
    description: 'Asocia documentos y evidencias a obligaciones, normas y procesos. Demuestra cumplimiento con datos concretos.',
    points: [
      'Matriz de cumplimiento ISO, SGI y normativas internas',
      'Evidencia ligada a procesos, auditorías y requisitos',
      'Estado de cumplimiento visible en tiempo real',
    ],
  },
  {
    icon: 'i-lucide-brain-circuit',
    title: 'Pre-auditoría con IA',
    description: 'El copiloto analiza tu repositorio y te dice qué falta antes de que llegue el auditor.',
    points: [
      'Detección automática de brechas y documentos vencidos',
      'Checklist de preparación para auditorías e ISO',
      'Generación de índice documental y reportes exportables',
    ],
  },
]

const features = [
  {
    icon: 'i-lucide-folder-lock',
    title: 'Versionado documental',
    description: 'Versión vigente, historial completo, responsables y bloqueo de documentos aprobados.',
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Matriz de cumplimiento',
    description: 'Requisitos, normas ISO/SGI y procesos internos asociados a documentos y evidencias.',
  },
  {
    icon: 'i-lucide-paperclip',
    title: 'Gestión de evidencia',
    description: 'Registros, fotografías, actas y certificados ligados a procesos y auditorías específicas.',
  },
  {
    icon: 'i-lucide-list-checks',
    title: 'Checklist de pre-auditoría',
    description: 'Faltantes, brechas y acciones correctivas detectadas antes de que llegue el auditor.',
  },
  {
    icon: 'i-lucide-brain-circuit',
    title: 'Copiloto IA',
    description: 'Consulta, analiza brechas, resume documentos y genera reportes de preparación con IA.',
  },
  {
    icon: 'i-lucide-lock-keyhole',
    title: 'Trazabilidad completa',
    description: 'Quién cambió qué, cuándo y por qué. Cada evento auditado, exportable y defendible.',
  },
]

const useCases = [
  {
    icon: 'i-lucide-wheat',
    title: 'Agroindustria y alimentos',
    description: 'SGI, ISO 22000, certificaciones de inocuidad y auditorías recurrentes de grandes clientes.',
  },
  {
    icon: 'i-lucide-hard-hat',
    title: 'Minería y construcción',
    description: 'ISO 45001, seguridad laboral, procedimientos de riesgo y cumplimiento de requisitos legales.',
  },
  {
    icon: 'i-lucide-truck',
    title: 'Logística y manufactura',
    description: 'ISO 9001, procesos de calidad, auditorías internas y gestión de proveedores certificados.',
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Proveedores certificados',
    description: 'Empresas que deben demostrar cumplimiento ante grandes clientes y organismos de certificación.',
  },
]

const trustItems = [
  {
    icon: 'i-lucide-lock-keyhole',
    title: 'Trazabilidad completa',
    description: 'Cada documento, firma y cambio queda registrado con responsable, fecha y motivo. Auditable y exportable.',
  },
  {
    icon: 'i-lucide-brain-circuit',
    title: 'IA sobre tu contexto',
    description: 'El copiloto entiende tus normas, tu estructura documental y los requisitos de tus certificaciones.',
  },
  {
    icon: 'i-lucide-plug',
    title: 'Integraciones',
    description: 'Conecta con DocuSeal para firmas, Granola o Diio para actas, y tus sistemas internos vía API.',
  },
]
</script>

<template>
  <div class="relative">

    <!-- Glow de fondo: violeta difuminado en la transición hero → body -->
    <div class="pointer-events-none absolute inset-x-0 top-[380px] -z-10 flex justify-center overflow-hidden" aria-hidden="true">
      <div class="w-[900px] h-[500px] rounded-full bg-violet-500/10 dark:bg-violet-500/8 blur-[140px]" />
    </div>

    <ContentCustomHero
      title="Tu programa de cumplimiento, siempre listo."
      description="Documentia convierte tus auditorías en un programa vivo — con historial, comparación entre ciclos y un copiloto que detecta brechas antes de que llegue el auditor."
      :primary-button="{ text: 'Solicitar demo', to: 'mailto:hola@documentia.app' }"
      :secondary-button="{ text: 'Ver cómo funciona', to: '/#producto' }"
    />

    <ContentStatsSection :stats="stats" />

<ContentWorkflowSection />

    <ContentIngestionFlow />

    <ContentAuditKanbanSection />

    <ContentPlatformLayers
      eyebrow="Plataforma"
      title="Tres capas para controlar documentos y demostrar cumplimiento."
      description="Del repositorio documental al copiloto que te prepara para la auditoría."
      :layers="platformLayers"
    />

    <ContentFeaturesSection
      title="Todo lo que necesitas para una auditoría sin sorpresas"
      subtitle="Gestión documental, evidencia, cumplimiento normativo y IA en una sola plataforma."
      :features="features"
    />

    <ContentUseCasesSection
      eyebrow="Casos de uso"
      title="Para empresas que se auditan y necesitan llegar preparadas."
      description=""
      :use-cases="useCases"
    />

    <ContentTrustSection
      eyebrow="Diseñado para empresas auditadas"
      title="Trazable, auditable y preparado para escalar."
      description="Convive con los sistemas existentes y se adapta a los requisitos de tus certificaciones."
      :items="trustItems"
    />

    <ContentPositioningSection />

    <ContentCelebrationSection />

    <ContentFaqSection />
  </div>
</template>
