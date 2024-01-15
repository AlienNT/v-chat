<script setup>

import ChatsItem from "@/components/chats/ChatsItem.vue";
import {useRouter} from "vue-router";
import {computed} from "vue";

const props = defineProps({
  chatList: {
    type: Array
  },
  activeChatId: {
    type: [Number, String],
    default: null
  }
})

const router = useRouter()
const emit = defineEmits(['onClick'])

const activeChatId = computed(() => {
  return Number(router.currentRoute.value.params?.id) || null
})
</script>

<template>
  <ul class="chats-list scroll">
    <ChatsItem
        v-for="(chat, index) in chatList"
        :key="index"
        :chat-item="chat"
        :is-active="chat?._id===activeChatId"
        :avatar="chat?.avatar"
        :message="chat?.message"
        :title="chat?.title"
        @click.stop="$emit('onClick', chat?._id)"
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