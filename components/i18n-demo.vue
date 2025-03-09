<template>
  <div class="mx-auto max-w-[200px]">
    <p>
      <span>當前語言:</span>
      <span class="ml-2">{{ $i18n.locale }}</span>
    </p>
    <h1>{{ t('welcome') }}</h1>
    <p>{{ t('greeting', { name: '使用者' }) }}</p>
    <div class="flex flex-wrap justify-center items-center gap-2.5">
      <button @click="setLocale('en-US')">en-US</button>
      <button @click="setLocale('zh-TW')">zh-TW</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

const { t, setLocale } = useI18n()
const { $i18n } = useNuxtApp()

defineOptions({
  name: 'I18nDemo',
})
</script>
<style scoped></style>
