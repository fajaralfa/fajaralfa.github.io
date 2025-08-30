<template>
  <Header>
    <div class="flex items-center h-full space-x-2">
      <NuxtLink href="/" class="font-bold text-xl text-gray-600 hover:text-black transition-colors" v-if="$route.path !== '/'">{{ $config.public.author }}</NuxtLink>
    </div>
    <div class="flex items-center h-full space-x-5">
      <ThemeToggler />
    </div>
  </Header>
  <main :class="{'mb-52': $route.path !== '/'}">
    <div class="jarprose m-auto">
      <slot />
    </div>
  </main>
  <footer>

  </footer>
</template>