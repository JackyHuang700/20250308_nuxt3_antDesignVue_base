<template>
  <div class="flex justify-between items-center gap-2.5 w-full">
    <div
      class="flex flex-col justify-center items-start gap-1 basis-[calc(100%-50px)]"
    >
      <span class="text-zinc-900 text-base">系统消息</span>
      <span class="text-zinc-400 text-sm">系统消息将以站内信的形式通知</span>
    </div>
    <div class="basis-[50px]">
      <a-switch
        v-model:checked="isOpen"
        :checked-children="objLangCommon.true"
        :un-checked-children="objLangCommon.false"
      />
    </div>
  </div>
  <a-divider class="!my-3" />
</template>

<script setup lang="ts">
const { objLangCommon } = useI18nLang()

const isOpen = defineModel('open', {
  required: true,
  type: Boolean,
})

defineOptions({
  name: 'ProfilePreferenceSettingItem',
})
</script>
<style scoped></style>
