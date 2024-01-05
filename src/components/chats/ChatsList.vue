<script setup>

import ChatsItem from "@/components/chats/ChatsItem.vue";

const props = defineProps({
  chatList: {
    type: Array
  }
})
</script>

<template>
  <ul class="chats-list scroll">
    <ChatsItem
        v-for="(chat, index) in chatList"
        :key="index"
        :chat-item="chat"
        :is-active="index===2"
    />
  </ul>
</template>

<style scoped lang="scss">
@import "../../assets/css/scrollbar";

.chats-list {
  flex: 1;
  max-width: 400px;
  overflow-y: scroll;
}
</style>