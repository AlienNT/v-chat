<script setup>
const emit = defineEmits(['onSubmit'])

function onKeyDown(e) {
  e.code === 'Enter' && emit('onSubmit')
}
</script>

<template>
  <form
      class="auth-form-template"
      @submit.prevent
      @keydown="onKeyDown"
  >
    <div class="form-field inputs">
      <slot name="fields"/>
    </div>
    <div class="form-field buttons">
      <slot name="buttons"/>
    </div>
  </form>
</template>

<style scoped lang="scss">
.auth-form-template {
  padding: 15px;
  width: 100%;
  max-width: 300px;
}

.form-field {
  padding: 5px 0;
  display: flex;
  gap: 15px;
  flex-direction: column;
}

.inputs {
  flex-direction: column;
  color: $COLORS_CONTENT_MEDIUM_CONTRAST;
  padding-bottom: 10px;
}

.buttons {
  align-items: center;
}
</style>