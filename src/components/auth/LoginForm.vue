<script setup>
import AuthFormTemplate from "@/components/auth/AuthFormTemplate.vue";
import VInput from "@/components/UI/VInput.vue";
import VButton from "@/components/UI/VButton.vue";
import FormLink from "@/components/auth/FormLink.vue";
import {useAuth} from "@/composables/useAuth.js";
import {reactive} from "vue";

const {login} = useAuth()

const formData = reactive({
  login: '',
  password: ''
})
</script>

<template>
  <form
      @submit.prevent="login(formData)"
  >
    <AuthFormTemplate>
      <template v-slot:fields>
        <VInput
            placeholder="Email"
            :value="formData.login"
            @on-input="e => formData.login = e"
        />
        <VInput
            type="password"
            placeholder="Password"
            :value="formData.password"
            @on-input="e => formData.password = e"
        />
      </template>
      <template v-slot:buttons>
        <VButton
            title="login"
            @click="login(formData)"
        />
        <FormLink
            title="registration"
            to="registration"
            use-name
        />
      </template>
    </AuthFormTemplate>
  </form>
</template>

<style scoped lang="scss">

</style>