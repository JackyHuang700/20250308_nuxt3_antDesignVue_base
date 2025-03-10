<template>
  <a-input
    v-model:value="strPassword"
    placeholder="password"
    :type="strType"
    allow-clear
    @click="onChangeType"
  >
    <template #prefix>
      <lock-outlined class="!text-[#a8abb2] cursor-pointer" />
    </template>
    <template #suffix>
      <a-tooltip title="Extra information">
        <!-- <info-circle-outlined class="!text-[#a8abb2] align-[0.125em]" /> -->

        <!-- <EyeInvisibleOutlined /> -->
        <!-- <LockOutlined /> -->

        <template v-if="isShowPassword">
          <eye-invisible-outlined class="!text-[#a8abb2] align-[0.125em]" />
        </template>
        <template v-else>
          <eye-outlined class="!text-[#a8abb2] align-[0.125em]" />
        </template>
      </a-tooltip>
    </template>
  </a-input>
</template>

<script setup lang="ts">
const isShowPassword = ref(true)
const strPassword = defineModel('password', {
  required: true,
  type: String,
})

const strType = computed(() => (isShowPassword.value ? 'text' : 'password'))

const onChangeType = () => !isShowPassword.value

defineOptions({
  name: 'LoginFormPassword',
})
</script>
<style scoped></style>
