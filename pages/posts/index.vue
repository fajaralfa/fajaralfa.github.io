<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection('post').order('date', 'DESC').all())

definePageMeta({
  layout: 'post'
})

</script>

<template>
  <div class="space-y-5">
    <div v-for="post in posts" class="hover:shadow-md hover:dark:shadow-slate-300 transition-shadow px-4 py-2 border dark:border-gray-600">
      <div class="text-sm">{{ dateFormat(post.date) }}</div>
      <div>
        <NuxtLink :href="post.path" class="font-bold text-xl">{{ post.title }}</NuxtLink>
      </div>
      <p class="post-description">{{ post.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.post-description {
  @apply my-2
}
</style>