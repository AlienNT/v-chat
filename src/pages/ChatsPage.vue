<script setup>
import {computed, defineAsyncComponent, watch} from "vue";

import {useRouter} from "vue-router";
import {useDialogs} from "@/composables/store/useDialogs.ts";
import {useDialogsRequest} from "@/composables/api/useDialogsRequest.ts";
import {useProfile} from "@/composables/store/useProfile.ts";

const {getDialogs, createDialog} = useDialogsRequest()
const router = useRouter()
const {dialogs} = useDialogs()
const {userId} = useProfile()

function onChatOpen(e) {
  router.push({name: 'chat-window', params: {id: e}})
}

const isOpenedChatWindowMobile = computed(() => {
  return !!router.currentRoute.value.params?.id
})

const AsyncChatsList = defineAsyncComponent(() =>
    import('@/components/chats/ChatsList.vue')
)

watch(() => userId.value, (value) => {
  if (!dialogs.value?.length && value) {
    getDialogs({userId: userId.value})
  }
}, {
  immediate: true
})

</script>

<template>
  <div class="page chats-page">
    <AsyncChatsList
        v-if="dialogs?.length"
        :chat-list="dialogs"
        class="chats-list"
        @on-click="onChatOpen"
    />
    <div
        class="chat-viewport"
        :class="isOpenedChatWindowMobile && 'active'"
    >
      <router-view/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100%;
  display: flex;
}

.chat-viewport {
  flex: 1;
  display: flex;
  background: $COLORS_DOMINANT_BG_H_CONTRAST;
  @media all and (max-width: 650px) {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    transform: translateX(100%);
    transition: transform .2s ease;
  }
}

.chats-list {
  @media all and (max-width: 650px) {
    width: 100%;
    max-width: unset;
  }
}

.active {
  transform: translateX(0);
}
</style>