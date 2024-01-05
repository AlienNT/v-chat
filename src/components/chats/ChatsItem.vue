<script setup>
import ChatsAvatar from "@/components/chats/ChatsAvatar.vue";
import ChatsItemMessageHeader from "@/components/chats/ChatsItemMessageHeader.vue";
import ChatsItemMessageBody from "@/components/chats/ChatsItemMessageBody.vue";
import {colors} from "@/router/colors.js";
import {computed} from "vue";

const props = defineProps({
  chatItem: {
    type: Object
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const fontColor = computed(() => {
  return props.isActive ? colors.COLORS_CONTENT_HIGHT_CONTRAST : null
})
</script>

<template>
  <li
      class="chats-item"
      :class="isActive && 'active'"
  >
    <ChatsAvatar
        :name="chatItem?.title"
        :src="chatItem?.avatar"
    />
    <div class="content">
      <ChatsItemMessageHeader
          class="message-header"
          :title="chatItem?.title"
          :color="fontColor"
      />
      <ChatsItemMessageBody
          class="message-body"
          :message="chatItem?.message"
          :color="fontColor"
      />
    </div>
  </li>
</template>

<style scoped lang="scss">
.chats-item {
  display: flex;
  width: 100%;
  height: 5rem;
  min-height: 5rem;
  max-height: 5rem;
  padding: 0.75rem;
  gap: 0.75rem;
  flex-shrink: 0;
  background: var(--Colors-Dominant-BG-HContrast);
  border-bottom: 1px solid var(--Colors-Dominant-BG-Medium-Contrast);
  cursor: pointer;

}

.active {
  background: var(--Colors-Dominant-BG-Medium-Contrast);
  position: sticky;
  z-index: 1;
  top: 0;
  bottom: 0;

  .message-header,
  .message-body {
    > * {
      color: var(--Colors-Content-Hight-Contrast);
    }
  }
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>