<script setup>
import {useProfile} from "@/composables/store/useProfile.js";

const {profile} = useProfile()

</script>

<template>
  <div class="profile">
    profile
    {{profile}}
  </div>
</template>

<style scoped>

</style>