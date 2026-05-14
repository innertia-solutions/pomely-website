<template>
  <section class="relative py-20 md:py-28 overflow-hidden bg-stone-900 dark:bg-stone-950">

    <!-- Confetti pieces -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div v-for="p in pieces" :key="p.id"
        class="absolute rounded-sm"
        :style="{
          left: p.left,
          top: '-12px',
          width: p.size,
          height: p.size,
          background: p.color,
          opacity: p.opacity,
          animation: `fall ${p.duration} ${p.delay} linear infinite`,
          transform: `rotate(${p.rotate}deg)`,
        }"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto text-center">

      <div class="mb-6 flex justify-center">
        <UIcon name="i-lucide-trophy" class="size-12 text-violet-400" />
      </div>

      <h2 class="font-black text-3xl md:text-5xl text-white leading-tight mb-4">
        Llega a cada auditoría<br />
        <span class="text-violet-400">como campeón.</span>
      </h2>

      <p class="text-stone-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
        Con el historial, la evidencia y el copiloto listo antes de que llegue el auditor,
        tu equipo llega preparado — no corriendo.
      </p>

      <a
        href="mailto:hola@documentia.app"
        class="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base shadow-lg shadow-violet-900/40 hover:shadow-violet-800/50 transition-all"
      >
        <span>Solicitar demo</span>
        <span aria-hidden="true">→</span>
      </a>

    </div>
  </section>
</template>

<script setup lang="ts">
const colors = [
  '#a855f7', '#7c3aed', '#60a5fa', '#34d399',
  '#fbbf24', '#f87171', '#e879f9', '#38bdf8',
  '#fff', '#d1d5db',
]

const pieces = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${4 + Math.random() * 8}px`,
  color: colors[Math.floor(Math.random() * colors.length)],
  opacity: (0.4 + Math.random() * 0.6).toFixed(2),
  duration: `${3 + Math.random() * 5}s`,
  delay: `-${Math.random() * 6}s`,
  rotate: Math.floor(Math.random() * 360),
}))
</script>

<style scoped>
@keyframes fall {
  0%   { transform: translateY(-12px) rotate(0deg);   }
  100% { transform: translateY(110vh)  rotate(720deg); }
}
</style>
