import { useStorage } from '@vueuse/core'

export const useLastLesson = () => {
  const user = useSupabaseUser()

  const course = useCourse()

  const history = useStorage('lastLesson', {} as { path: string, userId: string })

  const lastLesson = computed(() => {
    if (user.value && !history.value.userId) {
      history.value = {
        path: course.chapters[0].lessons[0].path,
        userId: user.value.id
      }
    }

    if (history.value.userId !== user.value?.id) { return null }

    return course.chapters
      .flatMap(({ lessons }) => lessons)
      .find(({ path }) => path === history.value.path)
  })

  return { lastLesson }
}
