<script setup>
defineProps({
  title: String,
  status: String
})
</script>

<template>
  <div class="headline">
    <div class="title">{{ title }}</div>
    <div class="status">{{ status }}</div>
  </div>
</template>

<style scoped lang="scss">
.title, .status {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
}

.title {
  color: $COLORS_CONTENT_HIGH_CONTRAST;
  font-size: 1.25rem;
}

.status {
  overflow: hidden;
  color: $COLORS_CONTENT_MEDIUM_CONTRAST;
  text-overflow: ellipsis;
  font-size: 0.9375rem;
  line-height: 1.125rem; /* 120% */
}
</style>