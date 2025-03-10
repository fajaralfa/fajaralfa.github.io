<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('post').path(route.path).first()
})

if (!page.value) {
  showError({
    statusCode: 404,
    statusMessage: 'Post Not Found'
  })
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})

definePageMeta({
  layout: 'post'
})

</script>

<template>
  <div>
    <h1>{{ page?.title ?? 'Untitled' }}</h1>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
