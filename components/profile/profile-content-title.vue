<template>
  <h3 class="mb-4 font-bold text-slate-800 text-2xl">
    {{ props.title }}
  </h3>
</template>

<script setup lang="ts">
type Props = {
  title: string
}
const props = defineProps<Props>()

defineOptions({
  name: 'ProfileContentTitle',
})
</script>
<style scoped></style>
