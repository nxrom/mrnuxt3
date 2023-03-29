<template>
  <iframe
    :src="`https://player.vimeo.com/video/${videoId}`"
    :title="title"
    class="absolute inset-0 h-full w-full"
    allowfullscreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy"
  />
</template>

<script setup>
defineProps({
  videoId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>
