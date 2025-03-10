<template>
  <Header class="mb-12">
    <div class="flex items-center h-full">
      <NuxtLink href="/" class="font-bold text-xl hover:bg-gray-400/20 p-1">{{ $config.public.author }}'s</NuxtLink>
      <NuxtLink href="/posts" class="font-bold text-xl hover:bg-gray-400/20 p-1">Posts</NuxtLink>
    </div>
    <div class="flex items-center h-full space-x-5">
      <div>
        <SearchPost class="w-32"></SearchPost>
      </div>
      <ThemeToggler />
    </div>
  </Header>
  <main class="mb-52">
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