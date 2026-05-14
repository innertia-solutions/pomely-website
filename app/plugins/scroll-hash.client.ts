/**
 * scroll-hash.client.ts
 * Actualiza el hash de la URL silenciosamente mientras el usuario scrollea,
 * sin causar saltos de página. Al recargar, el navegador baja a la sección correcta.
 */
export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  let ticking = false

  // Espera a que el DOM esté listo y luego observa las secciones con ID
  const init = () => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section[id], div[id]')
    ).filter(el => el.id)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !ticking) {
            ticking = true
            requestAnimationFrame(() => {
              const id = (entry.target as HTMLElement).id
              const hash = id ? `#${id}` : ' '
              // replaceState actualiza la URL sin disparar scroll ni navegación
              history.replaceState(null, '', hash)
              ticking = false
            })
          }
        })
      },
      {
        // La sección se considera "activa" cuando ocupa al menos 30% del viewport
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px',
      }
    )

    sections.forEach(section => observer.observe(section))

    // Limpia al salir de la página
    return () => observer.disconnect()
  }

  // Espera a nextTick para que el DOM esté montado
  if (document.readyState === 'complete') {
    init()
  } else {
    window.addEventListener('load', init, { once: true })
  }
})
