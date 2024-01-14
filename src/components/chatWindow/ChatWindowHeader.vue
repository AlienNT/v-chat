<script setup>

import Avatar from "@/components/UI/Avatar.vue";
import ArrowBack from "@/components/UI/icons/ArrowBack.vue";
import {useRouter} from "vue-router";
import ChatsAvatar from "@/components/chats/ChatsAvatar.vue";
import ChatWindowHeadline from "@/components/chatWindow/ChatWindowHeadline.vue";

const props = defineProps({
  avatar: {
    type: String
  },
  title: {
    type: String
  },
})

const {back} = useRouter()

</script>

<template>
  <div class="chat-window-header">
    <div class="arrow-back">
      <ArrowBack
          class="arrow"
          @click.stop="back"
      />
    </div>

    <div class="header-bar">
      <div class="user-avatar">
        <ChatsAvatar
            class="header-bar-avatar"
            :src="avatar"
            :name="title"
        />
      </div>
      <ChatWindowHeadline
          :title="title"
          status="был недавно"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-window-header {
  display: flex;
  flex: 1;
  align-items: center;
  align-self: flex-start;
  padding: 0.5rem;
  gap: 0.25rem;
  background: $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
}

.arrow-back {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow {
  cursor: pointer;
}
.header-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.header-bar-avatar {
  width: 3rem;
  height: 3rem;
}
</style>