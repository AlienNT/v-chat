<script setup>
import {computed, onMounted} from "vue";

import {useRouter} from "vue-router";
import {useDialogs} from "@/composables/store/useDialogs.js";
import {useDialogsRequest} from "@/composables/api/useDialogsRequest.js";
import {useProfile} from "@/composables/store/useProfile.js";

import ChatsList from "@/components/chats/ChatsList.vue";

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

onMounted(() => {
  if (!dialogs.value?.length) {
    getDialogs({userId: userId.value})
  }
})

</script>

<template>
  <div class="page chats-page">
    <ChatsList
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