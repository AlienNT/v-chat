<script setup>
defineProps({
  src: String,
  name: String
})
</script>

<template>
  <img
      :src="src"
      :alt="name"
      class="message-image"
  >
</template>

<style scoped lang="scss">
.message-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>