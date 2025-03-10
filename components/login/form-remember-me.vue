<template>
  <div class="flex justify-start items-center basis-full">
    <a-checkbox v-model:checked="isRememberMe">remember me</a-checkbox>
  </div>
</template>

<script setup lang="ts">
const isRememberMe = defineModel('rememberMe', {
  required: true,
  type: Boolean,
})

defineOptions({
  name: 'FormRememberMe',
})
</script>
<style scoped></style>
