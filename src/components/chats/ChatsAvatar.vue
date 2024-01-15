<script setup>
import {computed} from "vue";
import {getInitials} from "@/helpers/index.js";
import Avatar from "@/components/UI/Avatar.vue";

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
  <Avatar
      :src="src"
      :initials="initials"
      class="chats-avatar"
  />
</template>
<style lang="scss" scoped>
.chats-avatar {
  width: 3.5rem;
  height: 3.5rem;
}
</style>