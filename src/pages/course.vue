<template>
  <div class="flex flex-1 flex-wrap my-10">
    <NuxtPage />
    <VAside :chapters="chapters" />
  </div>
</template>

<script setup>
const { chapters } = useCourse()
</script>
