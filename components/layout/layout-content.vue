<template>
  <a-layout-content class="bg-[#f0f2f5] min-h-[280px]">
    <slot />
  </a-layout-content>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LayoutContent',
})
</script>
<style scoped></style>
