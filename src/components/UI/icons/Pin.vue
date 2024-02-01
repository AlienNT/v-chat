<script setup>

import VIcon from "@/components/UI/icons/VIcon.vue";
import {iconTgPath} from "@/helpers/icons.ts";
import {colors} from "@/helpers/colors.ts";
</script>

<template>
  <div class="wrapper">
    <VIcon
        :src="iconTgPath.PIN"
        :background-color="colors.COLORS_CONTENT_MEDIUM_CONTRAST"
    />
  </div>
</template>