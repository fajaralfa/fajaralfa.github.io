<script setup>
const print = () => window.print()
</script>
<template>
    <ClientOnly>
        <button @click="print" class="float-right print:hidden underline">
            <slot />
        </button>
    </ClientOnly>
</template>