<script setup>
import {reactive} from "vue";
import {useAuthRequest} from "@/composables/api/useAuthRequest.ts";

import AuthFormTemplate from "@/components/auth/AuthFormTemplate.vue";
import VButton from "@/components/UI/VButton.vue";
import VInput from "@/components/UI/VInput.vue";
import FormLink from "@/components/auth/FormLink.vue";

const {registration} = useAuthRequest()

const formData = reactive({
  login: '',
  password: ''
})
</script>

<template>
  <form
      @submit.prevent="registration(formData)"
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
            title="registration"
            @click="registration(formData)"
        />
        <FormLink
            title="login"
            to="login"
            use-name
        />
      </template>
    </AuthFormTemplate>
  </form>
</template>