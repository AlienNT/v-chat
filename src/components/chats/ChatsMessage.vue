<script setup>
defineProps({
  message: {
    type: String
  },
  color: {
    type: String
  }
})

</script>

<template>
  <div
      class="chat-message"
      :style="`color: ${color}`"
  >
    {{ message }}
  </div>
</template>

<style scoped lang="scss">
.chat-message {
  overflow: hidden;
  color: var(--Colors-Content-Medium-Contrast);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Roboto, sans-serif;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  width: 200px;
  line-height: 1.125rem;
}
</style>