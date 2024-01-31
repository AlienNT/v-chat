<script setup>
import {computed} from "vue";
import {colors} from "@/router/colors.js";
import {getStyles} from "@/helpers/index.ts";

const props = defineProps({
  src: {
    type: String,
    default: null
  },
  backgroundColor: {
    type: String,
    default: colors.COLORS_CONTENT_MEDIUM_CONTRAST
  },
})

defineEmits(['onClick'])

const style = computed(() => {
  return getStyles({
    backgroundColor: props.backgroundColor,
    maskImage: props.src
  })
})
</script>

<template>
  <div
      class="icon"
      :style="style"
      @click="$emit('onClick')"
  />
</template>

<style scoped lang="scss">
.icon {
  width: 1.5rem;
  height: 1.5rem;
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