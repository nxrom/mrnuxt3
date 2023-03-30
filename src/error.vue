<template>
  <NuxtLayout name="error">
    <template v-if="error.statusCode === '404'">
      <div class="flex flex-col items-center">
        <h1 class="text-2xl text-emerald-400 font-bold lg:text-4xl">
          404: Page not found
        </h1>
        <p class="mt-4 mb-8 text-base text-white lg:text-lg">
          There's nothing to learn here.
        </p>
        <div class="button button--secondary" role="button" @click="handleResetError">
          Back to the course
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col items-center">
        <h1 class="text-2xl text-emerald-400 font-bold lg:text-4xl">
          500: Internal Server Error
        </h1>
        <p class="mt-4 mb-8 text-base text-white lg:text-lg">
          Dont worry, we are working on it.
        </p>
        <div class="button button--secondary" role="button" @click="handleResetError">
          Back to the course
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
const error = useError()

function handleResetError () {
  clearError({
    redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  })
}

const errorType = computed(() => {
  return error.value.statusCode === '404' ? 'Page Not Found' : 'Internal Server Error'
})

useHead({
  title: `Nuxt Academy | ${error.value.statusCode} - ${errorType.value}`
})
</script>
