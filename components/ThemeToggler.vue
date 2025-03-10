<template>
    <ClientOnly>
      <button id="theme-toggler" @click="$colorMode.preference = $colorMode.preference == 'light' ? 'dark' : 'light'">
        <Icon :name="$colorMode.preference === 'light' ? 'ri:moon-line' : 'ri-sun-line'" />
      </button>
    </ClientOnly>
</template>