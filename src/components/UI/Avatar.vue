<script setup>
defineProps({
  src: {
    type: String
  },
  initials: {
    type: String
  }
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
  width: 100%;
  height: 100%;
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