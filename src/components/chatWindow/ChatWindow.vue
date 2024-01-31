<script setup>
import {computed, onBeforeUnmount, onMounted, watch} from "vue";

import {useRouter} from "vue-router";
import {useMessages} from "@/composables/store/useMessages.ts";
import {useMessageRequest} from "@/composables/api/useMessageRequest.ts";
import {useProfile} from "@/composables/store/useProfile.ts";
import {useDialogs} from "@/composables/store/useDialogs.ts";

import ChatWindowHeader from "@/components/chatWindow/ChatWindowHeader.vue";
import ChatWindowMessages from "@/components/chatWindow/ChatWindowMessages.vue";
import ChatWindowBottomBar from "@/components/chatWindow/ChatWindowBottomBar.vue";

import {objectFieldsToString} from "@/helpers/index.ts";

const {messages} = useMessages()
const {members} = useDialogs()
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

const dialogMessages = computed(() => {
  return messages(id.value).value
})

const dialogMembers = computed(() => {
  return members(id.value).value
})

const filteredMember = computed(() => {
  return dialogMembers.value?.filter(member => member._id !== userId.value)
})

const dialogTitle = computed(() => {
  return filteredMember.value.map(member => objectFieldsToString({
    object: member,
    fields: ['name', 'lastName']
  })).join(', ')
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
        :title="dialogTitle"
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