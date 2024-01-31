<script setup>
import {useProfile} from "@/composables/store/useProfile.ts";

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