<template>
  <div class="flex justify-center items-center gap-2.5">
    <NuxtLink to="/">首頁</NuxtLink>
    <NuxtLink to="/about">關於</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

defineOptions({
  name: 'LayoutHeader',
})
</script>
<style scoped></style>
