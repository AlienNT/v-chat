<script setup>
import {useChats} from "@/composables/useChats.js";
import ChatsList from "@/components/chats/ChatsList.vue";
import ChatWindow from "@/components/chatWindow/ChatWindow.vue";
import {useRouter} from "vue-router";
import {computed} from "vue";

const {chats, chatsLoading, chat} = useChats()
const router = useRouter()

function onChatOpen(e) {
  router.push({name: 'chat-window', params: {id: e}})
}

const isOpenedChatWindowMobile = computed(() => {
  return !!router.currentRoute.value.params?.id
})
</script>

<template>
  <div class="page chats-page">
    <ChatsList
        :chat-list="chats"
        class="chats-list"
        @on-click="onChatOpen"
    />
    <div class="chat-viewport" :class="isOpenedChatWindowMobile && 'active'">
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