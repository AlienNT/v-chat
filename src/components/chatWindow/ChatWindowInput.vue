<script setup>

import VInput from "@/components/UI/VInput.vue";

defineProps({
  value: {
    type: String
  }
})

defineEmits([
  'onInput'
])
</script>

<template>
  <VInput
      :value="value"
      placeholder="Сообщение"
      @on-input="e => $emit('onInput', e)"

  />
</template>

<style scoped lang="scss">

</style>