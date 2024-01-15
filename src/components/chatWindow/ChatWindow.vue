<script setup>
import {useChats} from "@/composables/useChats.js";
import {computed, onBeforeUnmount, onMounted} from "vue";
import {useRouter} from "vue-router";
import ChatWindowHeader from "@/components/chatWindow/ChatWindowHeader.vue";
import ChatWindowMessages from "@/components/chatWindow/ChatWindowMessages.vue";
import ChatWindowBottomBar from "@/components/chatWindow/ChatWindowBottomBar.vue";

const {chat} = useChats()
const router = useRouter()

onMounted(() => {
  window.addEventListener('keydown', onKeydown)

})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)

})

const id = computed(() => {
  return Number(router.currentRoute.value.params?.id)
})

const openedChat = computed(() => {
  return chat(id.value).value
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
        :avatar="openedChat?.avatar"
        :title="openedChat?.title"
    />

    <ChatWindowMessages/>
    <ChatWindowBottomBar/>
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