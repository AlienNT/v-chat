<script setup>
import {computed} from "vue";
import {getInitials} from "@/helpers/index.js";

const props = defineProps({
  src: {
    type: String
  },
  name: {
    type: String,
    default: ''
  }
})

const initials = computed(() => {
  return props.name.length && getInitials(props.name)
})
</script>

<template>
  <div class="chats-avatar">
    <img
        v-if="src"
        :src="src"
        class="avatar"
        alt="avatar"
    >
    <div
        v-else
        class="initials"
    >
      {{ initials }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.chats-avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex: none;

  img {
    object-fit: cover;
  }

  .avatar,
  .initials {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ccc;
  }
}
</style>