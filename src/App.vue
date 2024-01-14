<script setup>
import {useAuth} from "@/composables/useAuth.js";
import {onMounted, watch} from "vue";
import {useRouter} from "vue-router";
import {useColors} from "@/composables/useColors.js";
import {setProperty} from "@/helpers/index.js";

import routerNames from "@/router/routerNames.js";
import NavigationBar from "@/components/navigationBar/NavigationBar.vue";

const {setToken, isAuth} = useAuth()
const {colors} = useColors()
const router = useRouter()

const localToken = localStorage.getItem('auth-token')


onMounted(() => {
  if (localToken) {
    setToken(localToken)
  }

  setColors(colors.value)
})

function setColors(colors) {
  colors && colors.map(property => setProperty(property.name, property.value))
}


watch(() => isAuth.value, (value) => {
  router.push({
    path: !value ? routerNames.AUTH_PAGE.path : routerNames.CHATS_PAGE.path
  })
}, {
  immediate: true
})
</script>
<template>
  <div class="viewport">
    <router-view/>
  </div>
  <NavigationBar/>
</template>

<style lang="scss">
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: $COLORS_DOMINANT_BG_H_CONTRAST;
}
.viewport {
  flex: 1;
  display: flex;
  height: calc(100vh - 60px)
}
</style>