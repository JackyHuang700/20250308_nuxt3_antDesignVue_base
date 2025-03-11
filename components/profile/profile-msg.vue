<template>
  <div class="flex flex-col justify-start items-start">
    <ProfileContentTitle :title="objLangProfile.profile_msg" />

    <FormLabel id="email" required label="Email" />
  </div>
</template>

<script setup lang="ts">
import { useI18nLang } from '@/composables/useI18nLang'

import ProfileContentTitle from '@/components/profile/profile-content-title.vue'
import FormLabel from '@/components/form/form-label.vue'

const { objLangProfile } = useI18nLang()

defineOptions({
  name: 'ProfileMsg',
})
</script>
<style scoped></style>
