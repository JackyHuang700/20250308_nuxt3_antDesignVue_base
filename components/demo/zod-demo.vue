<template>
  <div
    class="flex flex-col justify-center items-center gap-2.5 bg-gray-100 p-5"
  >
    <form
      class="bg-white shadow-lg p-6 rounded-lg w-full max-w-md"
      @submit.prevent="onHandleSubmit"
    >
      <h1 class="mb-6 font-bold text-2xl text-center">註冊</h1>

      <div class="mb-4">
        <label for="username" class="block font-medium text-gray-700 text-sm"
          >使用者名稱</label
        >
        <input
          id="username"
          v-model="form.username"
          type="text"
          class="block mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 w-full"
          :class="{ 'border-red-500': errors.username }"
        >
        <p v-if="errors.username" class="mt-1 text-red-500 text-sm">
          {{ errors.username }}
        </p>
      </div>

      <div class="mb-4">
        <label for="email" class="block font-medium text-gray-700 text-sm"
          >電子郵件</label
        >
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="block mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 w-full"
          :class="{ 'border-red-500': errors.email }"
        >
        <p v-if="errors.email" class="mt-1 text-red-500 text-sm">
          {{ errors.email }}
        </p>
      </div>

      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 p-2 rounded-md w-full text-white transition-colors"
      >
        提交
      </button>
    </form>

    <button
      type="button"
      class="bg-blue-600 hover:bg-blue-700 p-2 rounded-md w-full max-w-[200px] text-white transition-colors"
      @click="setClearErrors"
    >
      reset error message
    </button>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod'

const form = reactive({
  username: '',
  email: '',
})

const errors = reactive<{
  username?: string
  email?: string
}>({})

const Schema = z.object({
  username: z.string().min(3, '使用者名稱至少需要 3 個字元'),
  email: z.string().email('請輸入有效的電子郵件'),
})

const onHandleSubmit = async () => {
  /*   try { */
  const _safeParse = Schema.safeParse(form)
  await setClearErrors()
  if (_safeParse.success === false) {
    _safeParse.error.issues.forEach((issue) => {
      errors[issue.path[0] as keyof typeof errors] = issue.message
    })

    return
  }

  alert('表單提交成功！')
  /* } catch (e) {
    console.log('', e)
    // 處理 Zod 驗證錯誤
    if (e instanceof z.ZodError) {
      e.errors.forEach((error) => {
        if (error.path[0]) {
          errors[error.path[0] as keyof typeof errors] = error.message
        }
      })
    }
  } */
}

const setClearErrors = () => {
  return new Promise((resolve) => {
    Object.keys(errors).forEach((key) => {
      errors[key as keyof typeof errors] = undefined
    })
    resolve(true)
  })
}

defineOptions({
  name: 'ZodDemo',
})
</script>
<style scoped></style>
