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

defineEmits(['onClick'])

const router = useRouter()

const activeChatId = computed(() => {
  return Number(router.currentRoute.value.params?.id) || null
})

const title = (_id) => computed(() => {
  const members = props.chatList.find(item => item._id === _id)?.members

  return members.map(member => member?.name + (member?.lastName || ''))?.join(', ')
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
        :title="title(chat?._id).value"
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