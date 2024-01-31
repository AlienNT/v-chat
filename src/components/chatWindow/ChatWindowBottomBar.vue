<script setup>
import {reactive} from "vue";
import {useMessageRequest} from "@/composables/api/useMessageRequest.ts";
import {useProfile} from "@/composables/store/useProfile.ts";

import ChatWindowInput from "@/components/chatWindow/ChatWindowInput.vue";
import ChatWindowFilePicker from "@/components/chatWindow/ChatWindowFilePicker.vue";

const {addMessage} = useMessageRequest()
const {userId} = useProfile()

const props = defineProps({
  chatId: {
    type: [String, Number]
  }
})

const state = reactive({
  message: '',
  files: '',
})

function onSubmit() {
  addMessage({
    dialogId: props.chatId,
    message: {...state, sender: userId.value}
  })
  resetState()
}

function resetState() {
  state.message = '';
  state.files = ''
}

</script>

<template>
  <div class="chat-bottom-bar">
    <div
        v-if="state.files"
        class="file-preview"
    >
      <img
          style="width: 80px; height: 80px; object-fit: cover; margin-right: 10px;"
          v-for="file in state.files"
          :src="file?.file"
          :alt="file?.name"
      >
    </div>
    <form
        class="chat-fields"
        @submit.prevent="onSubmit"
    >
      <ChatWindowInput
          class="text-field"
          :value="state.message"
          @on-input="e => state.message = e"
      />
      <ChatWindowFilePicker
          class="file-picker"
          :value="state.files"
          @on-input="e => state.files = e"
      />
    </form>
  </div>
</template>

<style scoped lang="scss">
.chat-bottom-bar {
  padding: 1.75rem;
  flex-shrink: 0;
  border-top: 0.5px solid $COLORS_DOMINANT_BG_LOW_CONTRAST;
  background: $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
}

.chat-fields {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.text-field {

}

.file-picker {

}
</style>