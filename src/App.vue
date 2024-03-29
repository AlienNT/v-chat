<script setup>
import {computed, defineAsyncComponent, watch} from "vue";
import {setProperty} from "@/helpers/index.ts";
import {apiRequest} from "@/helpers/request.ts";

import {useRouter} from "vue-router";
import {useAuth} from "@/composables/store/useAuth.ts";
import {useColors} from "@/composables/useColors.ts";
import {useProfileRequest} from "@/composables/api/useProfileRequest.ts";
import {useWebSocket} from "@/composables/useWebSocket.ts";
import {useProfile} from "@/composables/store/useProfile.ts";

import routerNames from "@/router/routerNames.js";
import {wsEvents} from "@/api/wsEvents.ts";

const {connected} = useWebSocket()
const {setToken, isAuth, token} = useAuth()
const {getProfile} = useProfileRequest()
const {userId} = useProfile()
const {colors} = useColors()
const router = useRouter()

const localToken = localStorage.getItem('token')

const isShowNavBar = computed(() => {
  return router.currentRoute.value?.path === routerNames.AUTH_PAGE.path
})

const Loader = defineAsyncComponent(() =>
    import('@/components/UI/Loader.vue')
)

const AsyncNavigationBar = defineAsyncComponent(() =>
    import('@/components/navigationBar/NavigationBar.vue')
)

if (localToken) {
  setToken({token: localToken})
}

setColors(colors.value)

watch(() => !!token.value && !!connected.value, value => {
  if (!value || !connected.value) return

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