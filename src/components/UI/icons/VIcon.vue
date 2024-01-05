<script setup>
import {computed} from "vue";

const props = defineProps({
  src: {
    type: String,
    default: null
  },
  backgroundColor: {
    type: String,
    default: 'white'
  },
})

const style = computed(() => {
  return [
    !!props.src && `mask-image: url(${props.src})`,
    !!props.backgroundColor && `background-color: ${props.backgroundColor}`
  ].join('; ')
})
</script>

<template>
  <div
      class="icon"
      :style="style"
  />
</template>

<style scoped lang="scss">
.icon {
  width: 24px;
  height: 24px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
  }
}
</style>