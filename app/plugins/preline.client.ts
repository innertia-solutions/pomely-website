import { defineNuxtPlugin, useRouter } from '#imports'

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach(() => {
    setTimeout(() => {
      // @ts-ignore
      if (window.HSStaticMethods) {
        // @ts-ignore
        window.HSStaticMethods.autoInit()
      }
    }, 100)
  })

  if (import.meta.client) {
    import('preline').then(() => {
      // @ts-ignore
      if (window.HSStaticMethods) {
        // @ts-ignore
        window.HSStaticMethods.autoInit()
      }
    })
  }
})
