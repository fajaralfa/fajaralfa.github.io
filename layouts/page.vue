<template>
  <header class="">
    <div class="lg:flex lg:flex-col lg:items-center">
      <div class="lg:w-[45rem] flex justify-between items-center h-20 w-full p-2 relative">
        <div class="flex items-center h-full space-x-2">
          <NuxtLink href="/" class="font-bold text-xl" v-if="$route.path !== '/'">People</NuxtLink>
        </div>
        <div class="flex items-center h-full space-x-5">
          <ThemeToggler />
        </div>
      </div>
    </div>
    <hr class="dark:border-gray-600">
  </header>
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