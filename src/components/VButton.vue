<template>
  <component
    :is="tag"
    :class="{
      'button--primary': color === 'primary',
      'button--secondary': color === 'secondary',
      'button--tertiary': color === 'tertiary',
      'button--github': color === 'github',
      'button--full': full
    }"
    class="button"
    v-bind="$attrs"
  >
    <span>
      <slot />
    </span>
    <Icon v-if="icon" :name="icon" class="w-5 h-5" />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'button'

  },
  color: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'tertiary', 'github'].includes(value)
  },
  full: {
    type: Boolean,
    default: false,
    required: false
  },
  icon: {
    type: String,
    default: null
  }
})
</script>
