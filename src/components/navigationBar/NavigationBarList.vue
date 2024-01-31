<script setup>
import NavigationBarItem from "@/components/navigationBar/NavigationBarItem.vue";
import {computed} from "vue";
import {getStyles} from "@/helpers/index.ts";

const props = defineProps({
  navigationList: {
    type: Array
  }
})

const style = computed(() => {
  return getStyles({
    flex: '0 0 ' + 100 / props.navigationList.length
  })
})

</script>

<template>
  <ul class="navigation-bar__list">
    <NavigationBarItem
        v-for="(navigationLink, index) in navigationList"
        :style="style"
        :key="index"
        :title="navigationLink?.title"
        :path="navigationLink?.path"
        :name="navigationLink?.name"
    />
  </ul>
</template>

<style scoped>
.navigation-bar__list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}
</style>