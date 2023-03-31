export default defineNuxtRouteMiddleware(({ params }) => {
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
})
