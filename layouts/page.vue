<template>
  <Header>
    <div class="flex items-center h-full space-x-2">
      <NuxtLink href="/" class="font-bold text-xl" v-if="$route.path !== '/'">{{ $config.public.author }}</NuxtLink>
    </div>
    <div class="flex items-center h-full space-x-5">
      <ThemeToggler />
    </div>
  </Header>
  <main :class="{'mb-52': $route.path !== '/'}">
    <div class="jarprose lg:w-[50rem] max-w-none m-auto">
      <slot />
    </div>
  </main>
  <footer>

  </footer>
</template>