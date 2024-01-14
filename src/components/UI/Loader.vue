<script setup>

import Read from "@/components/UI/icons/Read.vue";
</script>

<template>
  <div class="loader-wrapper">
    <Read class="loader-item"/>
  </div>
</template>

<style scoped lang="scss">
.loader-item {
  animation: 1s infinite linear rotated;
}

@keyframes rotated {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>