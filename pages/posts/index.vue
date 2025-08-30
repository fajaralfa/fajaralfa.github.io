<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection('post').order('date', 'DESC').all())

definePageMeta({
  layout: 'post'
})

</script>

<template>
  <div class="space-y-5">
    <div v-for="post in posts" class="px-4 py-2">
      <div>
        <NuxtLink
          :href="post.path"
          class="font-bold text-xl content-link"
        >{{ post.title }}</NuxtLink>
      </div>
      <div class="text-sm">{{ dateFormat(post.date) }}</div>
      <p class="my-2">{{ post.description }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>