<template>
  <div class="flex flex-1 flex-wrap my-10 xl:justify-between">
    <NuxtErrorBoundary>
      <NuxtPage />
    </NuxtErrorBoundary>
    <VAside :chapters="chapters" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware (to) {
    if (/^\/course\/?$/.test(to.fullPath)) {
      return navigateTo('/')
    }
  }
})
const { chapters } = useCourse()
</script>
