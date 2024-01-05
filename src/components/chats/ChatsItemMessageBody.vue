<script setup>
import Pinned from "@/components/UI/badges/Pinned.vue";
import ChatsMessage from "@/components/chats/ChatsMessage.vue";

const props = defineProps({
  message: {
    type: String
  },
  pinned: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: null
  },
  color: {
    type: String
  }
})
</script>

<template>
  <div class="message-body">
    <ChatsMessage
        class="message"
        :color="color"
        :message="message"
    />
    <div class="badges">
      <Pinned/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  .active {
    color: #fff;
  }
}

.message {
  flex: 1;
}

.badges {
  display: flex;
  align-items: flex-end;
}
</style>