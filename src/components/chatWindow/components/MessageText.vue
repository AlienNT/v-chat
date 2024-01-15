<script setup>
defineProps({
  value: {
    type: String
  }
})
</script>

<template>
  <div class="text">
    {{ value }}
  </div>
</template>

<style scoped lang="scss">
.text {
  word-break: break-all;
}
</style>