<template>
  <div class="relative min-h-screen bg-neutral-900">
    <VHeader />
    <main class="flex flex-col container mx-auto w-full min-h-[calc(100vh-4rem)]">
      <slot />
    </main>
  </div>
</template>
