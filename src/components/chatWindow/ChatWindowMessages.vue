<script setup>
import {useWebSocket} from "@/composables/useWebSocket.js";
import ChatWindowMessage from "@/components/chatWindow/ChatWindowMessage.vue";

const {messages} = useWebSocket()
</script>

<template>
  <ul class="chat-messages scroll">
    <ChatWindowMessage
        v-for="{message} in messages"
        class="chat-message"
        :message="message"
    />
  </ul>
</template>

<style scoped lang="scss">
@import "../../assets/css/scrollbar";

.chat-messages {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
}
</style>