<script setup>
import ChatsAvatar from "@/components/chats/ChatsAvatar.vue";
import ChatsItemMessageHeader from "@/components/chats/ChatsItemMessageHeader.vue";
import ChatsItemMessageBody from "@/components/chats/ChatsItemMessageBody.vue";

import {colors} from "@/router/colors.js";
import {computed} from "vue";

import {useProfile} from "@/composables/store/useProfile.ts";
import {objectFieldsToString} from "@/helpers/index.ts";

const props = defineProps({
  title: {
    type: String
  },
  avatar: {
    type: String
  },
  message: {
    type: String
  },
  members: {
    type: Array,
    default: []
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const {userId} = useProfile()

const filteredMembers = computed(() => {
  return props.members.filter(member => member?._id !== userId.value)
})

const membersTitle = computed(() => {
  return filteredMembers.value.map(member => objectFieldsToString({
    object: member,
    fields: ['name', 'lastName']
  })).join(', ')
})

const dialogTitle = computed(() => {
  return props.title ? props.title : membersTitle.value
})

const fontColor = computed(() => {
  return props.isActive ? colors.COLORS_CONTENT_HIGH_CONTRAST : null
})
</script>

<template>
  <li
      class="chats-item"
      :class="isActive && 'active'"
  >
    <ChatsAvatar
        :name="dialogTitle"
        :src="avatar"
    />
    <div class="content">
      <ChatsItemMessageHeader
          class="message-header"
          :title="dialogTitle"
          :color="fontColor"
      />
      <ChatsItemMessageBody
          class="message-body"
          :message="message"
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
  background: $COLORS_DOMINANT_BG_H_CONTRAST;
  border-bottom: 1px solid $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
  cursor: pointer;

}

.active {
  background: $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
  position: sticky;
  z-index: 1;
  top: 0;
  bottom: 0;

  .message-header,
  .message-body {
    > * {
      color: $COLORS_CONTENT_HIGH_CONTRAST;
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