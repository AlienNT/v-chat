<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <div class="navigation-item__title">
    {{ title }}
  </div>
</template>

<style scoped lang="scss">
.navigation-item__title {
  outline: none;
  text-decoration: none;
  color: $COLORS_CONTENT_MEDIUM_CONTRAST;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: 0.03125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>