<template>
  <div
    class="flex flex-wrap justify-center gap-3 w-[290px] min-w-[290px] login-form"
  >
    <slot />

    <a-input v-model:value="strAccount" placeholder="account" allow-clear>
      <template #prefix>
        <user-outlined class="!text-[#a8abb2] align-[0.125em]" />
      </template>
      <!-- <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template> -->
    </a-input>

    <loginFormPassword v-model:password="strPassword" />

    <a-button type="primary" class="w-full" @click="handleMessage">
      login
    </a-button>
    <FormRememberMe v-model:remember-me="isRememberMe" />
  </div>
</template>

<script setup lang="ts">
import loginFormPassword from '@/components/login/login-form-password.vue'
import FormRememberMe from '@/components/login/form-remember-me.vue'

const strAccount = ref('')
const strPassword = ref('')
const isRememberMe = ref(false)

const handleMessage = () => {
  message.info('This is a normal message')
}

defineOptions({
  name: 'LoginForm',
})
</script>
<style scoped>
/* #a8abb2 */
</style>
