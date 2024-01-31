<script setup>
import {reactive} from "vue";
import {useAuthRequest} from "@/composables/api/useAuthRequest.ts";

import AuthFormTemplate from "@/components/auth/AuthFormTemplate.vue";
import VInput from "@/components/UI/VInput.vue";
import VButton from "@/components/UI/VButton.vue";
import FormLink from "@/components/auth/FormLink.vue";

const {login} = useAuthRequest()

const formData = reactive({
  login: '',
  password: ''
})
</script>

<template>
  <AuthFormTemplate
      @on-submit="login(formData)"
  >
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
</template>