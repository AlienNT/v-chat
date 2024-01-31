<script setup>
import ChatWindowMessage from "@/components/chatWindow/ChatWindowMessage.vue";
import {onMounted, reactive, ref, watch} from "vue";
import {_} from "@/helpers/fakeLodash.ts";

const props = defineProps({
  messages: {
    type: Array
  },
  userId: {
    type: String
  }
})
const state = reactive({
  debounce: null
})

const chatMessagesViewport = ref(null)

function scrollToLastMessage(target) {
  return target.parentNode.scrollBy({
    top: target.scrollHeight,
    behavior: 'auto'
  })
}

onMounted(() => {
  state.debounce = _.debounce(() => scrollToLastMessage(chatMessagesViewport.value))
})

watch(() => props.messages?.length, (value) => {
  value && chatMessagesViewport.value && state.debounce()
}, {
  immediate: true
})

</script>

<template>
  <div class="chat-messages__wrapper scroll">
    <ul
        class="chat-messages"
        ref="chatMessagesViewport"
    >
      <ChatWindowMessage
          v-for="message in messages"
          class="chat-message"
          :message="message"
          :user-id="userId"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/css/scrollbar";

.chat-messages__wrapper {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
}
</style>