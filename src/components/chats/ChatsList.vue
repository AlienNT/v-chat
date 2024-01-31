<script setup>

import ChatsItem from "@/components/chats/ChatsItem.vue";

import {computed} from "vue";
import {useRouter} from "vue-router";
import {useProfile} from "@/composables/store/useProfile.ts";

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

const {userId} = useProfile()
const router = useRouter()

const activeChatId = computed(() => {
  return router.currentRoute.value.params?.id
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
        :members="chat?.members"
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
  color: #fa5c5c;
}
</style>