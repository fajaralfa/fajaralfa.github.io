<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="relative text-center h-[100vh]">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-16">
            <div>
                <h2 class="font-bold text-9xl">{{ error?.statusCode }}</h2>
                <div>{{ error?.message }}</div>
            </div>
            <button @click="handleError" class="px-4 py-2 border dark:border-gray-500 rounded hover:bg-gray-500/10">Go
                Home</button>
        </div>
    </div>
</template>
