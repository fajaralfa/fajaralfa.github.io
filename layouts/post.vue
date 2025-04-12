<template>
  <Header class="mb-12">
    <div class="flex items-center h-full gap-x-2">
      <NuxtLink href="/" class="font-bold text-xl hover:bg-gray-400/20">{{ $config.public.author }}'s</NuxtLink>
      <NuxtLink href="/posts" class="font-bold text-xl hover:bg-gray-400/20">Posts</NuxtLink>
    </div>
    <div class="flex items-center h-full space-x-5">
      <div>
        <SearchPost class="w-32"></SearchPost>
      </div>
      <ThemeToggler />
    </div>
  </Header>
  <main class="mb-52">
    <div class="jarprose m-auto">
      <slot />
    </div>
  </main>
  <footer>

  </footer>
</template>