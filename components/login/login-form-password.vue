<template>
  <div class="w-full">
    <a-input
      v-model:value="strPassword"
      :placeholder="objLangUserLogin.login_account_placeholder"
      :type="strType"
      allow-clear
    >
      <template #prefix>
        <lock-outlined
          class="!text-[var(--k-text-input-placeholder)] cursor-pointer"
        />
      </template>
      <template #suffix>
        <a-tooltip
          :title="objLangUserLogin.login_password_can_show_password_tooltip"
        >
          <template v-if="isShowPassword">
            <eye-invisible-outlined
              class="!text-[var(--k-text-input-placeholder)]"
              @click="onChangeType"
            />
          </template>
          <template v-else>
            <eye-outlined
              class="!text-[var(--k-text-input-placeholder)]"
              @click="onChangeType"
            />
          </template>
        </a-tooltip>
      </template>
    </a-input>

    <FormErrorMsg :error-msg="props.passwordError" />
  </div>
</template>

<script setup lang="ts">
import { useI18nLang } from '@/composables/useI18nLang'

import FormErrorMsg from '@/components/form/form-error-msg.vue'

interface Props {
  passwordError: string | undefined
}
const props = defineProps<Props>()

const { objLangUserLogin } = useI18nLang()

const isShowPassword = ref(true)
const strPassword = defineModel('password', {
  required: true,
  type: String,
})

const strType = computed(() => (isShowPassword.value ? 'text' : 'password'))

const onChangeType = () => (isShowPassword.value = !isShowPassword.value)

defineOptions({
  name: 'LoginFormPassword',
})
</script>
<style scoped></style>
