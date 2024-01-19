<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  title: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
      class="button"
      :type="type"
      :disabled="disabled"
  >
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
.button {
  background: $COLORS_ACCENT_BLUE_PRIMARY;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  width: 100%;
  color: $COLORS_CONTENT_HIGH_CONTRAST;
  text-transform: uppercase;
  //max-width: 120px;
}
</style>