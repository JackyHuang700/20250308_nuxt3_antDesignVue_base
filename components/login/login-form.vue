<template>
  <div
    class="flex flex-wrap justify-center gap-3 w-[290px] min-w-[290px] login-form"
  >
    <slot />

    <div class="w-full">
      <a-input
        v-model:value="strAccount"
        :placeholder="objLangUserLogin.login_account_placeholder"
        allow-clear
      >
        <template #prefix>
          <user-outlined
            class="!text-[var(--k-text-input-placeholder)] align-[0.125em]"
          />
        </template>
      </a-input>
      <FormErrorMsg :error-msg="objUserLoginErrors.account" />
    </div>

    <LoginFormPassword
      v-model:password="strPassword"
      :password-error="objUserLoginErrors.password"
    />

    <a-button
      type="primary"
      class="w-full"
      :loading="mutation.isPending.value"
      @click="onSubmit"
    >
      {{ objLangUserLogin.login }}
    </a-button>
    <FormRememberMe v-model:remember-me="isRememberMe" />
  </div>
</template>

<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import {
  setClearErrors,
  setAddErrors,
  UserLoginSchema,
} from '@/composables/useZod'
import { useI18nLang } from '@/composables/useI18nLang'
import { setApiUserLogin } from '@/composables/useApi'

import LoginFormPassword from '@/components/login/login-form-password.vue'
import FormRememberMe from '@/components/login/form-remember-me.vue'
import FormErrorMsg from '@/components/form/form-error-msg.vue'

const { objLangUserLogin } = useI18nLang()

const strAccount = ref('')
const strPassword = ref('')
const isRememberMe = ref(false)
const objUserLoginErrors = reactive<{
  account?: string
  password?: string
}>({})

const mutation = useMutation({
  mutationKey: [
    'login',
    {
      account: strAccount.value,
      password: strPassword.value,
    },
  ],
  mutationFn: setApiUserLogin,
  onSuccess: async (data) => {
    console.log('Login successful:', data)
    false && (await navigateTo('/admin'))
  },
  onError: (error) => {
    console.error('Login error:', error)
  },
})

const onSubmit = () => {
  const _safeParse = UserLoginSchema.safeParse({
    account: strAccount.value,
    password: strPassword.value,
  })

  Object.assign(objUserLoginErrors, setClearErrors(objUserLoginErrors))

  if (_safeParse.success === false) {
    Object.assign(objUserLoginErrors, setAddErrors(_safeParse.error.issues))
    return
  }

  mutation.mutate({
    account: strAccount.value,
    password: strPassword.value,
    // rememberMe: isRememberMe.value,
  })
}

defineOptions({
  name: 'LoginForm',
})
</script>
<style scoped></style>
