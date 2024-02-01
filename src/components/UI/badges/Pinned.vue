<script setup>
import VIcon from "@/components/UI/icons/VIcon.vue";

import {iconBadgesPath} from "@/helpers/icons.ts";
import {colors} from "@/helpers/colors.ts";
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