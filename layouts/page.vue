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
    <div class="lg:flex lg:flex-col lg:items-center">
      <div class="lg:w-[45rem]">
        <div class="jarprose lg:w-[45rem]">
          <div class="lg:w-[45rem]">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>

  </footer>
</template>