export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (user.value !== null) {
    return
  }

  return navigateTo(`/login?redirectTo=${to.path}`)
})
