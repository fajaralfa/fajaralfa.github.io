<script setup lang="ts">
import Fuse from 'fuse.js'

const query = ref('')
const showResult = ref(false)
const { data } = await useAsyncData('search-data', () => queryCollectionSearchSections('post'))

const fuse = new Fuse(data.value ?? [], {
  keys: ['title', 'description', 'content']
})

const result = computed(() => fuse.search(toValue(query)).slice(0, 10))
watch(result, () => {
    if (result.value.length > 0) showResult.value = true
    else showResult.value = false
})
</script>

<template>
    <input v-model="query" placeholder="Search" class="dark:bg-gray-800 border dark:border-gray-600 px-2 rounded"
        :class="$attrs.class" />
    <div class="fixed top-0 left-1/2 -translate-x-1/2 pointer-none inset-0 w-full h-full" @click="showResult = false" v-if="showResult"></div>
    <ul v-if="showResult"
        class="lg:w-[45rem] mt-2 rounded absolute left-1/2 -translate-x-1/2 p-1 border dark:border-gray-600 z-[1] bg-white/60 dark:bg-gray-900/60 backdrop-blur max-h-96 overflow-y-auto">
        <li v-for="link of result" :key="link.item.id" class="w-full flex justify-stretch hover:bg-gray-400/20">
            <NuxtLink variant="ghost" class="w-full px-2 py-1 rounded" :to="link.item.id">
                <div class="text-sm">{{ link.item.title }}</div>
                <span class="text-gray-500 text-xs">
                    {{ link.item.content?.slice(0, 100) }}...
                </span>
            </NuxtLink>
        </li>
    </ul>
</template>
