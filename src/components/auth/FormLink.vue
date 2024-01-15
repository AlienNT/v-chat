<script setup>
import {computed} from "vue";

const props = defineProps({
  useName: {
    type: Boolean,
    default: false
  },
  to: {
    type: String
  },
  title: {
    type: String
  }
})

const to = computed(() => {
  return props.useName ? {name: props.to} : {path: props.to}
})
</script>

<template>
  <router-link
      :to="to"
      class="form-link"
  >
    {{ title }}
  </router-link>
</template>

<style scoped lang="scss">
.form-link {
  color: $COLORS_CONTENT_MEDIUM_CONTRAST;
}
</style>