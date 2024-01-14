<script setup>

import {iconTgPath} from "@/helpers/icons.js";
import VIcon from "@/components/UI/icons/VIcon.vue";
</script>

<template>
  <div class="auth-page">
    <div class="wrapper" style="display: flex; flex-wrap: wrap">
      <div class="col" v-for="(icon, index) in iconTgPath">
        <VIcon
            :src="icon"
        />
        {{ index }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-page {
  background: #212F3F;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.col {
  flex: 0 0 15%;
  margin-bottom: 15px;
}
</style>