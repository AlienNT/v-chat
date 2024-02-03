<script setup lang="ts">
import {computed} from "vue";
import {_} from "@/helpers/fakeLodash";

const props = defineProps({
  value: {
    type: String
  },
  placeholder: {
    type: String,
    default: 'search'
  }
})
defineEmits(['onSubmit', 'onInput'])

const displayPlaceholder = computed(() => {
  return props.placeholder ? _.firstToUpper(props.placeholder) : null
})

</script>

<template>
  <form
      class="header-bar-search"
      @submit.prevent="e => $emit('onSubmit', e.target.value)"
  >
    <label>
      <input
          type="search"
          class="header-bar-search__field"
          :placeholder="displayPlaceholder"
          @input="e => $emit('onInput', e.target.value)"
      >
    </label>
  </form>
</template>

<style scoped lang="scss">
.header-bar-search {
  min-height: 64px;
  background: $COLORS_DOMINANT_BG_H_CONTRAST;
  border-radius: 50px;

  label {
    padding: 0 12px;
  }
}

.header-bar-search, .header-bar-search label {
  display: flex;
  flex: 1;
}

.header-bar-search__field {
  color: $COLORS_CONTENT_MEDIUM_CONTRAST;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  font-family: Roboto, sans-serif;
  padding: 10px;
  flex: 1;

  &::placeholder {
    color: $COLORS_CONTENT_MEDIUM_CONTRAST;
    transition: .2s ease;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
}
</style>