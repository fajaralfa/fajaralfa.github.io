<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('page').path(route.path).first()
})

if (!page.value) {
  showError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})

definePageMeta({
  layout: 'page'
})

</script>

<template>
  <ContentRenderer v-if="page" :value="page" class="jarprose" />
</template>
