<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'выберите, кому хотели бы написать'
  }
})
</script>

<template>
  <div class="chat-empty-title">
    {{ title }}
  </div>
</template>

<style scoped lang="scss">
.chat-empty-title {
  border-radius: 50px;
  padding: 5px 15px;
  margin: auto;
  background: $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
  color: $COLORS_CONTENT_HIGH_CONTRAST;
}
</style>