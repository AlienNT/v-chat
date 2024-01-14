<script setup>

import VIcon from "@/components/UI/icons/VIcon.vue";
import {iconTgPath} from "@/helpers/icons.js";
import {colors} from "@/router/colors.js";
</script>

<template>
  <div class="wrapper">
    <VIcon
        :src="iconTgPath.PIN"
        :background-color="colors.COLORS_CONTENT_MEDIUM_CONTRAST"
    />
  </div>
</template>