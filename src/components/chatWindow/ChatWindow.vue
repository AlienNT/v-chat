<script setup>
import {computed, onBeforeUnmount, onMounted, watch} from "vue";

import {useRouter} from "vue-router";
import {useChats} from "@/composables/useChats.js";
import {useMessages} from "@/composables/store/useMessages.js";
import {useMessageRequest} from "@/composables/api/useMessageRequest.js";
import {useProfile} from "@/composables/store/useProfile.js";

import ChatWindowHeader from "@/components/chatWindow/ChatWindowHeader.vue";
import ChatWindowMessages from "@/components/chatWindow/ChatWindowMessages.vue";
import ChatWindowBottomBar from "@/components/chatWindow/ChatWindowBottomBar.vue";

const {chat} = useChats()
const {messages} = useMessages()
const {getMessages} = useMessageRequest()
const {userId} = useProfile()
const router = useRouter()

onMounted(() => {
  window.addEventListener('keydown', onKeydown)

})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)

})

const id = computed(() => {
  return router.currentRoute.value.params?.id
})

const openedChat = computed(() => {
  return chat(id.value).value
})

const dialogMessages = computed(() => {
  return messages(id.value).value
})

watch(() => id.value, value => {
  if (value) {
    getMessages({
      dialogId: id.value,
      userId: userId.value
    })
  }
}, {
  immediate: true
})

function onKeydown(e) {
  switch (e.code) {
    case "Escape":
      return router.back()
    default:
      return null
  }
}

</script>

<template>
  <div class="chat-window">
    <ChatWindowHeader
        :avatar="dialogMessages?.avatar"
        :title="'test'"
    />
    <ChatWindowMessages
        :messages="dialogMessages"
        :user-id="userId"
    />
    <ChatWindowBottomBar
        :chat-id="id"
    />
  </div>
</template>

<style scoped lang="scss">
.chat-window {
  flex: 1;
  color: $COLORS_CONTENT_HIGH_CONTRAST;
  display: flex;
  flex-direction: column;
}


</style>