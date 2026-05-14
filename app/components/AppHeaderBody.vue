<template>
  <div class="space-y-3 p-4">
    <UButton
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      :external="item.external"
      color="neutral"
      variant="ghost"
      block
    >
      {{ item.label }}
    </UButton>
    <USeparator />
    <UButton
      to="mailto:hola@documentia.app"
      block
      trailing-icon="i-lucide-arrow-right"
      class="!bg-violet-700 !text-white hover:!bg-violet-800 focus-visible:!outline-violet-600"
    >
      Solicitar demo
    </UButton>
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'Producto', to: '/#producto' },
  { label: 'Cumplimiento', to: '/#cumplimiento' },
  { label: 'Pre-auditoría', to: '/#preauditoria' },
]
</script>
