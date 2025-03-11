<template>
  <div class="flex justify-start items-center basis-full">
    <a-checkbox v-model:checked="isRememberMe">{{
      objLangUserLogin.login_remember_me
    }}</a-checkbox>
  </div>
</template>

<script setup lang="ts">
import { useI18nLang } from '@/composables/useI18nLang'

const isRememberMe = defineModel('rememberMe', {
  required: true,
  type: Boolean,
})

const { objLangUserLogin } = useI18nLang()

defineOptions({
  name: 'FormRememberMe',
})
</script>
<style scoped></style>
