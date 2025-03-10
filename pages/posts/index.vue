<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection('post').order('date', 'DESC').all())

definePageMeta({
  layout: 'post'
})

</script>

<template>
  <div class="space-y-5">
    <div v-for="post in posts" class="hover:shadow-md hover:dark:shadow-slate-300 transition-shadow px-4 py-2 border dark:border-gray-600">
      <div class="flex flex-col mb-2">
        <span class="text-sm">{{ dateFormat(post.date) }}</span>
        <NuxtLink :href="post.path" class="font-bold text-xl no-underline hover:underline">{{ post.title }}</NuxtLink>
      </div>
      <div>{{ post.description }}</div>
    </div>
  </div>
</template>

<style>
</style>