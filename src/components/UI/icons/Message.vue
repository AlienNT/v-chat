<script setup>

import VIcon from "@/components/UI/icons/VIcon.vue";
import {iconTgPath} from "@/helpers/icons.js";

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: null
  }
})


</script>

<template>
  <VIcon
      :src="iconTgPath.MESSAGE"
      :background-color="backgroundColor"
  />
</template>