import course from './course'

type Lesson = {
  slug: string
  title: string
  text: string
  number: number
  videoId: number
  downloadUrl: string
  sourceUrl?: string
  path: string
}

type Chapter = {
  title: string
  slug: string
  number: number
  lessons: Lesson[]
}

type Course = {
  title: string
  chapters: Chapter[]
}

export const useCourse = (): Course => {
  const chapters: Chapter[] = course.chapters.map((chapter) => {
    const lessons: Lesson[] = chapter.lessons.map(lesson => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
    }))

    return {
      ...chapter,
      lessons
    }
  })

  return {
    ...course,
    chapters
  }
}
