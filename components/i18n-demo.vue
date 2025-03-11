<template>
  <div class="mx-auto max-w-[200px]">
    <p>
      <span>當前語言:</span>
      <span class="ml-2">{{ $i18n.locale }}</span>
    </p>
    <h1>{{ objLangDemo.welcome }}</h1>
    <h1>{{ t('welcome') }}</h1>
    <div class="flex flex-col flex-wrap justify-center items-start gap-2.5">
      <p>{{ t('greeting', { name: '使用者' }) }}</p>
      <p>{{ objLangDemo.greeting(strA) }}</p>
      <p>{{ strA }}</p>
      <button @click="onChangeUserNameByJK">change JK user</button>
      <button @click="onChangeUserNameByLeo">change Leo user</button>
    </div>
    <div class="flex flex-col flex-wrap justify-center items-start gap-2.5">
      <button @click="onSetLocaleToUS">en-US</button>
      <button @click="onSetLocaleToTW">zh-TW</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { useI18nLang } from '@/composables/useI18nLang'

const { t } = useI18n()
const { $i18n } = useNuxtApp()
const { objLangDemo, setLocaleToTW, setLocaleToUS } = useI18nLang()

const strA = ref('default name')

const onChangeUserNameByJK = () => {
  strA.value = 'JK'
}

const onChangeUserNameByLeo = () => {
  strA.value = 'Leo'
}

const onSetLocaleToUS = () => {
  setLocaleToUS()
}
const onSetLocaleToTW = () => {
  setLocaleToTW()
}

defineOptions({
  name: 'I18nDemo',
})
</script>
<style scoped></style>
