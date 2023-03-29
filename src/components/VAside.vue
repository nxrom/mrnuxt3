<template>
  <aside
    class="w-full mt-8 mx-5 overflow-y-auto bg-neutral-800 rounded p-4 sm:mx-0 xl:max-w-sm xl:h-[37.2rem] xl:ml-8 xl:mt-0"
  >
    <h2 class="text-white font-bold mb-8">
      Course content
    </h2>
    <template
      v-for="chapter in chapters"
      :key="chapter.title"
    >
      <div class="text-emerald-500 text-xs font-medium uppercase">
        {{ chapter.title }}
      </div>
      <ul class="pt-4 pb-8 flex flex-col">
        <li
          v-for="lesson in chapter.lessons"
          :key="lesson.videoId"
          class="inline-block py-0.5"
        >
          <NuxtLink
            :to="lesson.path"
            active-class="!text-emerald-500 bg-neutral-700 rounded"
            class="p-2 flex items-center gap-x-2 text-neutral-400"
          >
            <Icon name="ic:baseline-live-tv" class="min-w-[1rem] min-h-[1rem]" />
            <span class="text-[.875rem]">
              {{ lesson.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </template>
  </aside>
</template>

<script setup>
defineProps({
  chapters: {
    type: Array,
    required: true
  }
})
</script>
