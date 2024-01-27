<script setup>
import VIcon from "@/components/UI/icons/VIcon.vue";

import {iconBadgesPath} from "@/helpers/icons.js";
import {colors} from "@/router/colors.js";
</script>

<template>
  <VIcon
      :src="iconBadgesPath.PINNED"
      class="pinned"
      :background-color="colors.COLORS_CONTENT_MEDIUM_CONTRAST"
  />
</template>
<style scoped>
.pinned {
  cursor: pointer;
}
</style>