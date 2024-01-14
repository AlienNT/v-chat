<script setup>

</script>

<template>
  <div class="chat-window">
    <div class="chat-empty-title">
      выберите, кому хотели бы написать
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-window {
  flex: 1;
  display: flex;
}

.chat-empty-title {
  border-radius: 50px;
  padding: 5px 15px;
  margin: auto;
  background: $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
  color: $COLORS_CONTENT_HIGH_CONTRAST;
}
</style>