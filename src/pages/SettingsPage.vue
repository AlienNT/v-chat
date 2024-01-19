<script setup>
import VButton from "@/components/UI/VButton.vue";
import {useAuth} from "@/composables/store/useAuth.js";
import {useProfile} from "@/composables/store/useProfile.js";
import {useMessages} from "@/composables/store/useMessages.js";
import {useDialogs} from "@/composables/store/useDialogs.js";

const {resetToken} = useAuth()
const {resetProfile} = useProfile()
const {resetMessages} = useMessages()
const {resetDialogs} = useDialogs()

function logout() {
  resetToken()
  resetProfile()
  resetMessages()
  resetDialogs()
}
</script>

<template>
  <div class="button-wrapper">
    <VButton
        title="logout"
        @click.prevent="logout"
    />
  </div>
</template>

<style scoped>
.button-wrapper {
  margin: auto;
}
</style>