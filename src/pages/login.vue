<template>
  <div class="h-[calc(100vh-4rem)] flex flex-col px-8 justify-center">
    <h1 class="text-2xl text-white font-bold sm:text-4xl">
      Log in to your account
    </h1>
    <p class="text-neutral-400 mt-2 mb-10 sm:text-lg">
      Welcome back! We're happy to have you here.
    </p>
    <div>
      <VButton
        icon="ph:github-logo"
        color="github"
        @click="OAuthGithubLogin"
      >
        Log in with Github
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const user = useSupabaseUser()
const supbase = useSupabaseClient()

watchEffect(async () => {
  if (user.value) {
    await navigateTo(route.query.redirectTo as string, {
      replace: true
    })
  }
})

async function OAuthGithubLogin () {
  const { error } = await supbase.auth.signInWithOAuth(
    { provider: 'github' }
  )

  if (error) {
    return new Error(error.message)
  }
}

useHead({
  title: 'Log In'
})
</script>
