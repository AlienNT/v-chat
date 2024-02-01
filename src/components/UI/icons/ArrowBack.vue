<script setup>

import VIcon from "@/components/UI/icons/VIcon.vue";
import {iconTgPath} from "@/helpers/icons.ts";
import {colors} from "@/helpers/colors.ts";
</script>

<template>
  <VIcon
      :src="iconTgPath.ARROW_BACK"
      :background-color="colors.COLORS_CONTENT_HIGH_CONTRAST"
  />
</template>