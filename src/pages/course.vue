<template>
  <div class="flex flex-1 flex-wrap my-10">
    <NuxtErrorBoundary>
      <NuxtPage />
    </NuxtErrorBoundary>
    <VAside :chapters="chapters" />
  </div>
</template>

<script setup>
const { chapters } = useCourse()
</script>
