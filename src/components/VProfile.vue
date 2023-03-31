<template>
  <div v-if="user" class="flex items-center gap-x-4">
    <div class="flex items-center gap-x-2">
      <img
        :src="profile.avatarUrl"
        :alt="`Profile picture - ${profile.name}`"
        class="w-8 h-8 rounded-full"
        width="32"
        height="32"
      >
    </div>
    <span class="w-[1px] h-full bg-neutral-700" />
    <VButton @click="OAuthGithubLogout">
      Log out
    </VButton>
  </div>
</template>

<script setup lang="ts">
type User = {
  id: string
  user_metadata: {
    name: string
    avatar_url: string
  }
}

const { auth } = useSupabaseClient()

const user = useSupabaseUser() as Ref<User | null>

const router = useRouter()

const profile = computed(() => ({
  name: user.value?.user_metadata.name.split(' ')[0],
  avatarUrl: user.value?.user_metadata.avatar_url
}))

async function OAuthGithubLogout () {
  const { error } = await auth.signOut()

  if (error) {
    return new Error(error.message)
  }

  try {
    await $fetch('/api/_supabase/session', {
      method: 'POST',
      body: { event: 'SIGNED_OUT', session: null }
    })
    user.value = null

    await router.replace({ path: router.currentRoute.value.path })
  } catch (e: any) {
    return new Error(e)
  }

  await navigateTo('/login')
}
</script>
