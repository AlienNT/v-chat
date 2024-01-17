<script setup>
import {computed, defineAsyncComponent, watch} from "vue";
import {useRouter} from "vue-router";
import {useAuth} from "@/composables/store/useAuth.js";
import {useColors} from "@/composables/useColors.js";
import {useProfileRequest} from "@/composables/api/useProfileRequest.js";
import {useWebSocket} from "@/composables/useWebSocket.js";
import {setProperty} from "@/helpers/index.js";
import {apiRequest} from "@/helpers/request.js";

import routerNames from "@/router/routerNames.js";
import {wsEvents} from "@/helpers/webSocket.js";

const {connected} = useWebSocket()
const {setToken, isAuth, token} = useAuth()
const {getProfile} = useProfileRequest()
const {colors} = useColors()
const router = useRouter()

const localToken = localStorage.getItem('token')

const isShowNavBar = computed(() => {
  return router.currentRoute.value?.path === routerNames.AUTH_PAGE.path
})

const Loader = defineAsyncComponent({
  loader: () => import('@/components/UI/Loader.vue'),
})

const AsyncNavigationBar = defineAsyncComponent({
  loader: () => import('@/components/navigationBar/NavigationBar.vue')
})

if (localToken) {
  setToken(localToken)
}

setColors(colors.value)

watch(() => connected.value, value => {
  console.log('connected', value)
  if (!value) return

  apiRequest({
    type: wsEvents.GET_PROFILE
  })
}, {
  immediate: true
})

function setColors(colors) {
  colors && colors.map(property => setProperty(property.name, property.value))
}

watch(() => isAuth.value, (value) => {
  router.push({
    path: !value ?
        routerNames.AUTH_PAGE.path :
        routerNames.CHATS_PAGE.path
  })
}, {
  immediate: true
})
</script>
<template>
  <Loader
      v-if="!connected"
      class="loader"
  />
  <div class="viewport">
    <RouterView/>
  </div>
  <AsyncNavigationBar
      v-if="!isShowNavBar"
  />
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

.loader {
  position: fixed;
  top: 15px;
  right: 15px;
}
</style>