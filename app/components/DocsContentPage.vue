<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :ui="{ wrapper: 'flex-row items-center flex-wrap justify-between' }"
    />

    <UPageBody>
      <ContentRenderer :value="page" />
    </UPageBody>

    <template
      v-if="page.body?.toc?.links?.length"
      #right
    >
      <UContentToc
        highlight
        :links="page.body.toc.links"
      />
    </template>
  </UPage>
</template>

<script setup lang="ts">
import type { Collections, DocsCollectionItem } from '@nuxt/content'

const route = useRoute()
const lang = computed(() => route.path.startsWith('/en') ? 'en' : 'es')
const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value.join('/') : value
})
const docsPath = computed(() => {
  const rawPath = route.path.replace(/^\/(en|es)/, '')
  return `/${lang.value}${rawPath === '/docs/' ? '/docs' : rawPath}`
})
const collectionName = computed(() => `docs_${lang.value}` as keyof Collections)

const { data: page } = await useAsyncData(
  () => `docs-page-${docsPath.value}`,
  () => queryCollection(collectionName.value).path(docsPath.value).first() as Promise<DocsCollectionItem>
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = computed(() => page.value?.seo?.title || page.value?.title)
const description = computed(() => page.value?.seo?.description || page.value?.description)

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>
