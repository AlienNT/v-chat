<script setup>
import {computed} from "vue";

const props = defineProps({
  time: {
    type: [String, Date, Number],
    default: Date.now()
  }
})

const displayedTime = computed(() => {
  return new Date(props.time).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
})
</script>

<template>
  <div class="message-time">
    {{ displayedTime }}
  </div>
</template>

<style scoped lang="scss">
.message-time {
  overflow: hidden;
  color: $COLORS_CONTENT_HIGH_CONTRAST;
  text-overflow: ellipsis;
  font-family: Roboto, sans-serif;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem; /* 172.727% */
  opacity: 0.6;
}
</style>