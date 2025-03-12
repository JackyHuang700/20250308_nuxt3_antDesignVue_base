<template>
  <ProfileContentTitle :title="objLangProfile.profile_preference_setting">
    <ProfilePreferenceSettingItem v-model:open="isOpen" />
    <ProfilePreferenceSettingItem v-model:open="isOpen" />
    <ProfilePreferenceSettingItem v-model:open="isOpen" />
    <ProfilePreferenceSettingItem v-model:open="isOpen" />
  </ProfileContentTitle>
</template>

<script setup lang="ts">
import { useI18nLang } from '@/composables/useI18nLang'

import ProfilePreferenceSettingItem from '@/components/profile/profile-preference-setting-item.vue'

const { objLangProfile } = useI18nLang()

const isOpen = ref(false)

defineOptions({
  name: 'ProfilePreferenceSetting',
})
</script>
<style scoped></style>
