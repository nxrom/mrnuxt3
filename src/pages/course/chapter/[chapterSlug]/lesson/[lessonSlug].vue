<template>
  <div class="w-full px-5 overflow-hidden xl:w-[calc(100%-30rem)] sm:px-0">
    <div class="relative rounded" style="padding: 28.25%; overflow: hidden; max-height: 452px;">
      <template v-if="lesson?.title && lesson?.videoId">
        <VPlayer :title="lesson.title" :video-id="lesson.videoId" />
      </template>
    </div>
    <div class="flex flex-col mt-8 mb-4">
      <div class="flex flex-1 mb-4 sm:justify-end">
        <ClientOnly>
          <VLessonCompleteButton
            v-model:completed="isLessonCompleted"
            class="w-full sm:w-auto"
            @update:completed="handleComplete"
          />
        </ClientOnly>
      </div>
      <hgroup>
        <p class="text-emerald-500 uppercase text-xs font-medium mb-1">
          {{ course.title }}
        </p>
        <h1 class="text-xl font-bold text-white lg:text-2xl xl:text-3xl">
          {{ lesson?.title }}
        </h1>
      </hgroup>
      <p class="py-3 text-sm text-neutral-400 xl:text-base">
        {{ lesson?.text }}
      </p>
    </div>
    <div class="flex flex-col gap-4 sm:flex-row">
      <VButton
        v-if="lesson?.sourceUrl"
        :href="lesson.sourceUrl"
        tag="a"
        color="secondary"
      >
        Download source code
      </VButton>
      <VButton
        v-if="lesson?.downloadUrl"
        :href="lesson.downloadUrl"
        tag="a"
        color="secondary"
        icon="ph:download-simple"
      >
        Download video
      </VButton>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const course = useCourse()

definePageMeta({
  middleware: function ({ params }) {
    const course = useCourse()

    const chapter = course.chapters.find(chapter => chapter.slug === params.chapterSlug)

    if (!chapter) {
      return abortNavigation(createError({
        statusCode: 404,
        message: 'Chapter not found'
      }))
    }

    const lesson = chapter.lessons.find(lesson => lesson.slug === params.lessonSlug)

    if (!lesson) {
      return abortNavigation(createError({
        statusCode: 404,
        message: 'Lesson not found'
      }))
    }
  }
})

const progress = useLocalStorage('progress', [])

const chapter = computed(() => {
  return course.chapters.find(chapter => chapter.slug === route.params.chapterSlug)
})

const lesson = computed(() => {
  return chapter.value?.lessons.find(lesson => lesson.slug === route.params.lessonSlug)
})

const title = computed(() => {
  return lesson.value?.title ? `${lesson.value.title} | ${course.title}` : course.title
})

const description = computed(() => lesson.value?.text)

const isLessonCompleted = computed(() => {
  if (!progress.value[chapter.value?.number - 1]) {
    return false
  }

  if (!progress.value[chapter.value?.number - 1][lesson.value?.number - 1]) {
    return false
  }

  return progress.value[chapter.value?.number - 1][lesson.value?.number - 1]
})

function handleComplete () {
  if (!progress.value[chapter.value?.number - 1]) {
    progress.value[chapter.value?.number - 1] = []
  }

  progress.value[chapter.value?.number - 1][lesson.value?.number - 1] = true
}

useHead({
  title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: description.value
    }
  ]
})
</script>
