<script setup>
import {useChats} from "@/composables/useChats.js";
import ChatsList from "@/components/chats/ChatsList.vue";
import ChatWindow from "@/components/chatWindow/ChatWindow.vue";

const {chats, chatsLoading} = useChats()
</script>

<template>
  <div class="page chats-page">
    <ChatsList
        :chat-list="chats"
    />
    <ChatWindow/>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  display: flex;
}
</style>