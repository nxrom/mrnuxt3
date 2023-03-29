<template>
  <label
    class="button"
    :class="{
      'button--primary': completed,
      'button--tertiary': !completed,
    }"
  >
    <input
      type="checkbox"
      class="hidden"
      :value="completed"
      @input="emit('update:completed')"
    >
    <template v-if="completed">
      Completed <Icon name="heroicons:check-circle" class="w-5 h-5" />
    </template>
    <template v-else>
      Mark as completed
    </template>
  </label>
</template>

<script setup>
defineProps({
  completed: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:completed'])
</script>
