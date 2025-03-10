<template>
  <template v-if="props.errorMsg">
    <p class="mt-1 text-red-500 text-sm">
      {{ props.errorMsg }}
    </p>
  </template>
</template>

<script setup lang="ts">
type Props = {
  errorMsg?: string
}
const props = defineProps<Props>()

defineOptions({
  name: 'FormErrorMsg',
})
</script>
<style scoped></style>
