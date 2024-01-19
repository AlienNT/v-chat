<script setup>
import {computed, defineAsyncComponent} from "vue";
import MessageTime from "@/components/chatWindow/components/MessageTime.vue";

const props = defineProps({
  message: {
    type: Object
  },
  userId: {
    type: String
  }
})

const ChatImage = defineAsyncComponent(() =>
    import('@/components/chatWindow/components/MessageImage.vue')
)

const ChatText = defineAsyncComponent(() =>
    import('@/components/chatWindow/components/MessageText.vue')
)

const sender = computed(() => {
  return props.message?.sender
})

const images = computed(() => {
  return props.message?.files
})

const text = computed(() => {
  return props.message?.message
})

const time = computed(() => {
  return props.message?.createdAt
})

const isOwn = computed(() => {
  return props.userId === sender.value?._id
})

</script>

<template>
  <li
      class="message"
      :class="isOwn ? 'primary': 'secondary'"
  >
    <ul
        v-if="images?.length"
        class="image-list"
    >
      <li
          v-for="image in images"
          class="image-list__item"
      >
        <ChatImage
            :src="image?.file"
            :name="image?.name"
        />
      </li>
    </ul>
    <ChatText
        v-if="text"
        class="text"
        :value="text"
    />
    <MessageTime
        class="time"
        :time="time"
    />
  </li>
</template>

<style scoped lang="scss">
.message {
  border-radius: 1rem;
  padding: 0.5rem 0.75rem 0.25rem;
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.image-list {
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  overflow: hidden;
}

.image-list__item {
  flex: 1 1 25%;
  margin-bottom: 0.75rem;
}

.time {
  align-self: flex-end;
}

.primary {
  align-self: flex-end;
  background: $COLORS_ACCENT_BLUE_PRIMARY;
}

.secondary {
  background: $COLORS_DOMINANT_BG_MEDIUM_CONTRAST;
}
</style>