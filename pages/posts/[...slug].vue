<script lang="ts" setup>
import formatDate from '~/utils/dateFormat'

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
    <div class="date">{{ dateFormat(page?.date) }}</div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<style scoped>
.date {
  @apply opacity-60;
}
h1 {
  @apply m-0
}
</style>