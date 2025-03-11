<template>
  <div class="flex flex-col justify-start items-start min-h-dd">
    <h3 class="mb-4 font-bold text-slate-800 text-2xl">
      {{ props.title }}
    </h3>
    <div class="flex flex-wrap justify-start items-center gap-3.5 w-full">
      <slot />
    </div>
  </div>
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
