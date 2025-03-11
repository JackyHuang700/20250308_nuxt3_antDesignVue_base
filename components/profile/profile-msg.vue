<template>
  <ProfileContentTitle :title="objLangProfile.profile_msg">
    <ProfileAvatarUpload />

    <FormField
      id="nickName"
      v-model:value="strNickName"
      :label="'暱稱'"
      :required="true"
      :placeholder="'請輸入暱稱'"
      :error="objProfileUpdateErrors.nickName"
    />

    <FormField
      id="email"
      v-model:value="strEmail"
      :label="'電子郵件'"
      :required="false"
      :placeholder="'6666@gmail.com'"
      :error="objProfileUpdateErrors.email"
    />

    <a-button
      type="primary"
      class="ml-auto w-1/3 max-w-[160px]"
      :loading="mutation.isPending.value"
      @click="onSubmit"
    >
      {{ '更新資料' }}
    </a-button>
  </ProfileContentTitle>
</template>

<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { useI18nLang } from '@/composables/useI18nLang'
import {
  setClearErrors,
  setAddErrors,
  ProfileUpdateSchema,
} from '@/composables/useZod'
import { setApiProfileUpdate } from '@/composables/useApi'

import ProfileContentTitle from '@/components/profile/profile-content-title.vue'
import FormField from '@/components/form/form-field.vue'
import ProfileAvatarUpload from '@/components/profile/profile-avatar-upload.vue'

const { objLangProfile } = useI18nLang()

const strNickName = ref('')
const strEmail = ref('')
const objProfileUpdateErrors = reactive<{
  nickName?: string
  email?: string
}>({})

const mutation = useMutation({
  mutationKey: [
    'profileUpdate',
    {
      nickName: strNickName.value,
      email: strEmail.value,
    },
  ],
  mutationFn: setApiProfileUpdate,
  onSuccess: async (data) => {
    console.log('Login successful:', data)
    false && (await navigateTo('/admin'))
  },
  onError: (error) => {
    console.error('Login error:', error)
  },
})

const onSubmit = () => {
  const _safeParse = ProfileUpdateSchema.safeParse({
    nickName: strNickName.value,
    email: strEmail.value,
  })

  Object.assign(objProfileUpdateErrors, setClearErrors(objProfileUpdateErrors))

  if (_safeParse.success === false) {
    Object.assign(objProfileUpdateErrors, setAddErrors(_safeParse.error.issues))
    return
  }

  mutation.mutate({
    nickName: strNickName.value,
    email: strEmail.value,
  })
}

defineOptions({
  name: 'ProfileMsg',
})
</script>
<style scoped></style>
