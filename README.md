# Documentia — Website

Landing page de [Documentia](https://documentia.app), plataforma de gestión documental y cumplimiento con IA para empresas que se auditan bajo normas ISO y SGI.

## Stack

- **Nuxt 4** (`compatibilityVersion: 4`, directorio `app/`)
- **Nuxt UI v3** con `@nuxt/icon` y paleta violet personalizada
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
      WorkflowSection.vue  # Flujo de trabajo con IntersectionObserver
      IngestionFlow.vue    # Diagrama fuentes → ingestor → IA → outputs
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
npm install
npm run dev
```

## Build

```bash
npm run build
```
