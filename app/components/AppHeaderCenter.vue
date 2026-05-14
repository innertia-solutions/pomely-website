<template>
  <nav class="hidden items-center justify-center gap-1 lg:flex">
    <UButton
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      :external="item.external"
      color="neutral"
      variant="ghost"
      size="sm"
    >
      {{ item.label }}
    </UButton>
  </nav>
</template>

<script setup lang="ts">
const items = [
  { label: 'Producto', to: '/#producto' },
  { label: 'Cumplimiento', to: '/#cumplimiento' },
  { label: 'Pre-auditoría', to: '/#preauditoria' },
]
</script>
