<template>
  <footer class="bg-stone-900 dark:bg-stone-950 text-stone-400">

    <!-- Main content -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">

        <!-- Brand -->
        <div class="col-span-2 md:col-span-2 flex flex-col gap-4">
          <img src="/logo-dark.png" alt="Documentia" class="h-7 w-auto object-contain object-left" />
          <p class="text-sm leading-relaxed text-stone-500 max-w-xs">
            Gestión documental y cumplimiento con IA para empresas que se auditan.
          </p>
          <a href="mailto:hola@documentia.app"
            class="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            hola@documentia.app
          </a>
        </div>

        <!-- Plataforma -->
        <div class="flex flex-col gap-3">
          <h3 class="text-xs font-bold uppercase tracking-widest text-stone-500">Plataforma</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="/#producto" class="text-sm text-stone-400 hover:text-stone-100 transition-colors">Cómo funciona</a></li>
            <li><a href="/#cumplimiento" class="text-sm text-stone-400 hover:text-stone-100 transition-colors">Cumplimiento</a></li>
            <li><a href="/#preauditoria" class="text-sm text-stone-400 hover:text-stone-100 transition-colors">Pre-auditoría</a></li>
            <li><a href="/#casos" class="text-sm text-stone-400 hover:text-stone-100 transition-colors">Casos de uso</a></li>
          </ul>
        </div>

        <!-- Normativas -->
        <div class="flex flex-col gap-3">
          <h3 class="text-xs font-bold uppercase tracking-widest text-stone-500">Normativas</h3>
          <ul class="flex flex-col gap-2">
            <li><span class="text-sm text-stone-500">ISO 9001</span></li>
            <li><span class="text-sm text-stone-500">ISO 14001</span></li>
            <li><span class="text-sm text-stone-500">ISO 45001</span></li>
            <li><span class="text-sm text-stone-500">SGI</span></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="flex flex-col gap-3">
          <h3 class="text-xs font-bold uppercase tracking-widest text-stone-500">Contacto</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="mailto:hola@documentia.app" class="text-sm text-stone-400 hover:text-stone-100 transition-colors">Solicitar demo</a></li>
            <li><a href="mailto:hola@documentia.app" class="text-sm text-stone-400 hover:text-stone-100 transition-colors">Soporte</a></li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-stone-800 dark:border-stone-900">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span class="text-xs text-stone-600">© {{ new Date().getFullYear() }} Documentia. Todos los derechos reservados.</span>
        <div class="inline-flex items-center gap-2 text-xs text-stone-600">
          <span class="w-1.5 h-1.5 rounded-full bg-violet-600 shadow-[0_0_0_2px_rgb(109_40_217_/_0.2)]" />
          Operando en Chile
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
</script>
