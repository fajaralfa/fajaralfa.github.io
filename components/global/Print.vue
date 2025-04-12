<script setup>
const print = () => window.print()
</script>
<template>
    <ClientOnly>
        <button @click="print" class="print:hidden underline">
            <slot />
        </button>
    </ClientOnly>
</template>