<template>
  <div class="px-8 flex flex-col h-[calc(100vh-4rem)] justify-center sm:px-0">
    <div class="mb-16 flex flex-col gap-y-4 sm:flex-row">
      <h1 class="text-xl text-white font-bold sm:text-2xl xl:text-4xl">
        Welcome back, {{ userFirstName }}
      </h1>
      <p class="text-neutral-400 sm:ml-14 xl:text-lg">
        It's good to have you back! <br>
        Keep learning, return to the class you stopped.
      </p>
    </div>
    <NuxtLink v-if="lastLesson" :to="lastLesson.path">
      <div class="p-10 bg-neutral-800 flex flex-col items-start justify-between gap-y-8 border border-neutral-700 transition-colors rounded hover:border-emerald-500 lg:flex-row lg:items-center">
        <div class="flex flex-col w-full max-w-xl overflow-hidden">
          <span class="pb-1 text-xs text-emerald-500 uppercase">
            {{ courseTitle }}
          </span>
          <h2 class="text-neutral-200 font-bold lg:text-xl xl:text-2xl">
            {{ lastLesson.title }}
          </h2>
          <p class="pt-3 truncate text-neutral-400">
            {{ lastLesson.text }}
          </p>
        </div>
        <div class="flex items-center gap-x-4">
          <span class="text-[.875rem] text-neutral-200 font-medium uppercase">
            Keep watching
          </span>
          <Icon name="ph:play-circle-fill" class="w-10 h-10 text-emerald-500 lg:w-12 lg:h-12" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

type User = {
  id: string
  user_metadata: {
    name: string
    avatar_url: string
  }
}

const user = useSupabaseUser() as Ref<User | null>

const { title: courseTitle } = useCourse()

const { lastLesson } = useLastLesson()

const userFirstName = computed(() => user.value?.user_metadata.name.split(' ')[0])

useHead({
  title: 'Dashboard'
})
</script>
