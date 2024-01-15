<script setup>
defineProps({
  value: {
    type: String
  },
  placeholder: {
    type: String,
    default: 'Message'
  },
  type: {
    type: String,
    default: 'text'
  },
  readonly: {
    type: Boolean,
    default: false
  }
})

defineEmits([
  'onInput',
  'onChange'
])
</script>

<template>
  <label class="input-label">
    <input
        :value="value"
        :placeholder="placeholder"
        :type="type"
        :readonly="readonly"
        @input="e => $emit('onInput', e.target.value)"
        @submit="e => console.log('submit', e.target.value)"
    >
  </label>
</template>

<style scoped lang="scss">
label {
  display: flex;
  flex: 1;
}

input {
  display: flex;
  flex: 1;
  align-items: center;
  color: $COLORS_CONTENT_MEDIUM_CONTRAST;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 100% */
  letter-spacing: 0.03125rem;
  transition: .2s ease;

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
}
</style>