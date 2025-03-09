<template>
  <a-layout-content class="bg-white mx-[24px] my-[16px] p-[24px] min-h-[280px]">
    <slot />
  </a-layout-content>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LayoutContent',
})
</script>
<style scoped></style>
