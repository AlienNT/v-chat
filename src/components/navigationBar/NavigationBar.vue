<script setup>
import {useNavigationBar} from "@/composables/useNavigationBar.ts";
import NavigationBarList from "@/components/navigationBar/NavigationBarList.vue";

const {navigationList} = useNavigationBar()
</script>

<template>
  <nav class="navigation-bar">
    <NavigationBarList
        :navigation-list="navigationList"
    />
  </nav>
</template>

<style scoped lang="scss">
.navigation-bar {
  display: flex;
  width: 100%;
  min-height: 60px;
  padding: 0 0.5rem;
  align-items: flex-start;
  gap: 0.5rem;
  background: $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
}
</style>