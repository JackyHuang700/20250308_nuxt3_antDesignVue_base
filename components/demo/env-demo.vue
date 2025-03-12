<template>
  <div>env demo</div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
console.log('🚀 => config.NODE_ENV:', config.public.NUXT_APP_TITLE)

defineOptions({
  name: 'EnvDemoPage',
})
</script>
<style scoped></style>
