<script setup>
import {computed, defineAsyncComponent} from "vue";
import {colors} from "@/helpers/colors.ts";
import routerNames from "@/router/routerNames.js";

const props = defineProps({
  routeName: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const IconComponent = computed(() => {
  switch (props.routeName) {

    case routerNames.CHATS_PAGE.name:
      return defineAsyncComponent(() => import('@/components/UI/icons/Message.vue'))

    case routerNames.SETTINGS_PAGE.name:
      return defineAsyncComponent(() => import('@/components/UI/icons/Settings.vue'))

    case routerNames.PROFILE.name:
      return defineAsyncComponent(() => import('@/components/UI/icons/PersonOutline.vue'))

    case routerNames.CONTACTS.name:
      return defineAsyncComponent(() => import('@/components/UI/icons/Users.vue'))

    default:
      return defineAsyncComponent(() => import('@/components/UI/icons/Message.vue'))

  }
})

const backgroundColor = computed(() =>
    props.isActive ?
        colors.COLORS_CONTENT_HIGH_CONTRAST :
        colors.COLORS_CONTENT_MEDIUM_CONTRAST
)
</script>

<template>
  <component
      :is="IconComponent"
      :is-active="isActive"
      :background-color="backgroundColor"
  />
</template>
