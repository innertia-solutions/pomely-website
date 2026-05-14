# Pomely — Landing Page Design

> Fecha: 2026-05-13

---

## Qué es Pomely

Pomely es un sistema de cotización con IA para empresas. Captura pedidos desde múltiples canales, usa IA para armar cotizaciones automáticamente, y permite a las empresas definir flujos comerciales configurables con estados, restricciones y alertas.

**Tagline:** Cotiza, controla, cierra.

---

## Público objetivo

Ambos segmentos:
- **PYMEs** — dueños o equipos chicos que cotizan desde el celular, sin sistemas complejos
- **Empresas medianas/grandes** — equipos comerciales con muchas cotizaciones, múltiples vendedores

---

## Dolor principal

El proceso completo de cotización es caótico:
- Cotizar tarda demasiado
- Las cotizaciones se pierden o quedan sin seguimiento
- Cada vendedor cotiza a su manera, sin formato ni control

No existe hoy una herramienta que resuelva esto de forma integrada con IA.

---

## Stack técnico (base existente)

- **Nuxt 4** (`compatibilityVersion: 4`, directorio `app/`)
- **Nuxt UI v3** con `@nuxt/icon`
- **Tailwind CSS v4**
- Color primario: **naranja** (reemplaza violet de Documentia)
- Modo claro por defecto

---

## Enfoque de la landing

**Opción B (product-led) con toques de A (story-driven):**
- El hero muestra la magia del producto
- Debajo, una sección que conecta con el dolor
- Luego features, flujos configurables, y CTA doble

---

## Estructura de secciones

### 1. Hero

- **Título:** Toma el control de tus flujos de cotización con IA
- **Subtítulo:** Pomely captura pedidos desde WhatsApp, correo o donde lleguen — la IA entiende el contexto, arma la cotización y tu equipo solo tiene que aprobar y cerrar.
- **CTA principal:** Solicitar demo
- **CTA secundario:** Ver cómo funciona
- **Visual:** Interfaz de Pomely mostrando hub central — múltiples entradas convergiendo en flujo ordenado con estados, IA y métricas

### 2. Los 3 pilares (StatsSection)

| Valor | Descripción | Icono |
|---|---|---|
| Captura | Recibe pedidos de cotización desde cualquier canal — WhatsApp, correo, formulario | i-lucide-inbox |
| Cotiza con IA | La IA arma la cotización en segundos usando tu catálogo e historial | i-lucide-brain-circuit |
| Controla y cierra | Flujos configurables, alertas, seguimiento y métricas de cierre | i-lucide-git-branch |

### 3. Cómo funciona (WorkflowSection — 4 pasos)

1. **Llega el pedido** — Por WhatsApp, correo o formulario. La IA lo lee, entiende qué se necesita y crea el caso automáticamente
2. **La IA arma la cotización** — Consulta tu catálogo, aplica precios, márgenes y condiciones. Lista en segundos
3. **Tú apruebas** — Revisas, ajustas si quieres, y la envías con un clic — por email, PDF o link web
4. **Controlas el cierre** — El flujo sigue: seguimiento automático, alertas, estado en tiempo real hasta que se cierra el trato

**Mock de UI (derecha del componente):** Reemplazar el mock de auditorías por un mock de cotización:
- URL: `app.pomely.cl/cotizacion/COT-2025-084`
- Sidebar: Dashboard, Cotizaciones, Catálogo, Flujos, IA (item activo: Cotizaciones — color naranja)
- Panel principal: cotización en estado "En negociación" con cliente, monto total, ítems del catálogo y botón "Enviar seguimiento"
- Badge de estado naranja "En negociación"
- Colores de acento: naranja en lugar de violet

### 4. Fuentes de entrada (IngestionFlow)

**Título:** Pomely escucha donde llegan los pedidos.

Canales de entrada:
- WhatsApp
- Gmail
- Outlook
- Formulario web

Lo que hace la IA con cada entrada:
- Entiende el pedido aunque llegue como audio, foto o texto informal
- Extrae productos, cantidades y condiciones automáticamente
- Consulta el catálogo y el historial de cotizaciones similares
- Genera la cotización con el formato de la empresa

### 5. Motor de flujos (AuditKanbanSection — Kanban de cotizaciones)

**Eyebrow:** Motor de flujos
**Título:** Tu proceso comercial, a tu manera.
**Subtítulo:** Define los estados, condiciones y alertas de tu flujo de cotización. Pomely se adapta a cómo trabaja tu empresa — no al revés.

Columnas del Kanban:
1. Nuevo pedido (gris)
2. Armando (amarillo)
3. Enviada (índigo)
4. En negociación (naranja)
5. Cerrada (verde)

Panel IA debajo: muestra alertas de seguimiento, pipeline activo y recomendaciones.

Capacidades destacadas:
- **Plantillas listas** — Flujos prediseñados para venta simple, proyectos, licitaciones
- **Editor visual** — Arrastra estados, define condiciones y restricciones
- **Alertas automáticas** — Notifica cuando una cotización lleva X días sin respuesta

### 6. Las 3 capas (PlatformLayers)

**Eyebrow:** Plataforma
**Título:** Tres capas para cotizar más rápido y cerrar más tratos.

| Capa | Título | Descripción | Puntos |
|---|---|---|---|
| 1 | Captura omnicanal | Recibe pedidos desde WhatsApp, Gmail y Outlook. La IA entiende el contexto y crea el caso. | Lectura automática de correos · Extracción de productos y cantidades · Sin carga manual |
| 2 | Motor de cotización con IA | Arma cotizaciones en segundos usando tu catálogo, historial y condiciones comerciales. | Precios y márgenes automáticos · Aprende del historial · Formato de tu empresa |
| 3 | Flujos configurables | Define estados, restricciones, alertas y condiciones. Tu proceso, no el nuestro. | Plantillas listas para usar · Editor visual drag-and-drop · Alertas automáticas de seguimiento |

### 7. Features grid (FeaturesSection — 6 cards)

1. **Cotización por IA** — De audio, foto o texto a cotización formal en segundos
2. **Catálogo inteligente** — Productos, precios y condiciones que la IA consulta al cotizar
3. **Flujos configurables** — Estados, restricciones y alertas a medida de tu empresa
4. **Multicanal** — WhatsApp, Gmail y Outlook conectados en un solo hub
5. **Seguimiento automático** — Alertas cuando una cotización lleva días sin respuesta
6. **Métricas de cierre** — Tasa de conversión, tiempo promedio, pipeline activo en tiempo real

### 8. Casos de uso (UseCasesSection)

**Título:** Para equipos comerciales que quieren cotizar mejor.

| Sector | Descripción |
|---|---|
| Construcción y proyectos | Cotizaciones complejas con múltiples ítems y condiciones |
| Retail y distribución | Volumen alto, catálogo grande, equipos de vendedores |
| Servicios profesionales | Propuestas con desglose de horas y alcances |
| Proveedores industriales | Licitaciones y pedidos recurrentes con clientes grandes |

### 9. Posicionamiento (PositioningSection)

El componente es un grid de 3 columnas comparativas con ✓ / ✗ / — por fila. Pomely es la columna destacada (fondo oscuro).

**Eyebrow:** Por qué Pomely
**Título:** No más Excel. No más CRM que nadie usa.
**Subtítulo:** El mercado tiene dos extremos: WhatsApp + Excel, o CRMs complejos que nadie termina de implementar. Pomely está en el medio — simple de arrancar, potente para escalar.

Columnas:
- **Excel + WhatsApp** (sin highlight)
- **Pomely** (highlight — color naranja)
- **CRM / Otros cotizadores** (sin highlight)

Filas comparativas:
| Feature | Excel+WA | Pomely | CRM |
|---|---|---|---|
| IA arma la cotización automáticamente | ✗ | ✓ | ✗ |
| Flujos y estados configurables | ✗ | ✓ | — |
| Integrado con email y WhatsApp | — | ✓ | — |
| Listo para usar en minutos | ✓ | ✓ | ✗ |
| Seguimiento y alertas automáticas | ✗ | ✓ | ✓ |
| Métricas de cierre en tiempo real | ✗ | ✓ | ✓ |

### 10. FAQ (FaqSection)

Preguntas sugeridas:
- ¿Necesito integrar mi ERP para usar Pomely?
- ¿Qué pasa si mi catálogo cambia frecuentemente?
- ¿Puedo personalizar el formato de mis cotizaciones?
- ¿Cómo funciona la integración con Gmail y Outlook?
- ¿Es seguro conectar mi correo de ventas?
- ¿Puedo usarlo si soy una empresa pequeña?

### 11. CTA Final (FinalCta / CelebrationSection)

**Título:** Empieza a cotizar con IA hoy
**Subtítulo:** Sin implementaciones largas. Sin curva de aprendizaje.
**CTA principal:** Solicitar demo
**CTA secundario:** Empezar gratis

---

## Configuración global a cambiar

- `app.config.ts` — color primario `violet` → `orange`, título `Documentia` → `Pomely`
- `index.vue` — reemplazar todos los datos con contenido de Pomely
- `PRODUCT.md` — reescribir para Pomely
- `README.md` — actualizar stack y descripción

## Componentes reutilizados de Documentia

Todos los componentes se reutilizan con nuevo contenido:
- `CustomHero.vue` — mismo componente, nuevo copy
- `StatsSection.vue` — mismo componente, nuevos 3 pilares
- `WorkflowSection.vue` — adaptar pasos al flujo de cotización
- `IngestionFlow.vue` — adaptar fuentes (WhatsApp, Gmail, Outlook) y outputs (PDF, email, link)
- `AuditKanbanSection.vue` — ✅ ya adaptado con datos de Pomely
- `PlatformLayers.vue` — mismo componente, nuevas 3 capas
- `FeaturesSection.vue` — mismo componente, nuevas 6 features
- `UseCasesSection.vue` — mismo componente, nuevos sectores
- `PositioningSection.vue` — actualizar tabla de diferenciadores
- `FaqSection.vue` — nuevas preguntas
- `FinalCta.vue` / `CelebrationSection.vue` — nuevo copy de cierre
