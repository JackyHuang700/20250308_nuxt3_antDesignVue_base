<template>
  <div class="flex justify-between items-center gap-2 my-3">
    <div>
      <NuxtImg src="profile-logo.jpg" class="rounded-full max-w-[50px]" />
    </div>
    <div class="flex flex-col justify-center items-center gap-0">
      <span class="font-semibold text-zinc-800">JK666</span>
      <span class="text-zinc-500">admin</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ProfileInfo',
})
</script>
<style scoped></style>
