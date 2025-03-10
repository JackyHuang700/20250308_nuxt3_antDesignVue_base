<template>
  <div class="relative bg-[var(--k-bg-color)] h-screen">
    <div class="flex justify-around items-center mx-[60px] h-full">
      <div class="login-img-group block z-[2] relative">
        <Loginlandscape />
      </div>
      <loginForm>
        <loginFormLogo />
      </loginForm>

      <NuxtImg
        src="login-bg.png"
        class="bottom-0 left-0 fixed w-[80%] h-full"
      />
    </div>
    <div
      class="copyright right-0 bottom-[10px] left-0 absolute flex justify-center items-center gap-1.5 text-[#0009] text-sm"
    >
      <span>Copyright</span>
      <span>© {{ new Date().getUTCFullYear() }}</span>
      <span>K</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Loginlandscape from '@/components/login/login-landscape.vue'
import loginForm from '@/components/login/login-form.vue'
import loginFormLogo from '@/components/login/login-form-logo.vue'

definePageMeta({
  layout: false,
})

defineOptions({
  name: 'Login',
})
</script>
<style scoped></style>
