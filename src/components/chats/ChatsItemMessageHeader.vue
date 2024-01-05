<script setup>
defineProps({
  title: {
    type: String
  },
  color: {
    type: String
  }
})
</script>

<template>
  <div class="message-header">
    <div class="title" :style="color">
      {{ title }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  gap: 0.25rem;
  color: var(--Colors-Content-Hight-Contrast);
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem;
}
</style>