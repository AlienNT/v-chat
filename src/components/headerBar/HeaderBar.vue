<script setup lang="ts">
import HeaderBarSearch from "@/components/headerBar/HeaderBarSearch.vue";

defineProps({
  value: {
    type: String
  },
  placeholder: {
    type: String
  }
})

defineEmits(['onInput', 'onSubmit'])
</script>

<template>
  <div class="header-bar">
    <HeaderBarSearch
        :value="value"
        :placeholder="placeholder"
        @on-input="e => $emit('onInput', e)"
        @on-submit="e => $emit('onSubmit', e)"
    />
  </div>
</template>

<style scoped lang="scss">
.header-bar {
  padding: 4px 12px;
  background: $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
}
</style>