<script setup>

import VIcon from "@/components/UI/icons/VIcon.vue";
import {iconTgPath} from "@/helpers/icons.js";
import {colors} from "@/router/colors.js";
</script>

<template>
  <VIcon
      :src="iconTgPath.ARROW_BACK"
      :background-color="colors.COLORS_CONTENT_HIGH_CONTRAST"
  />
</template>