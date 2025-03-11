<template>
  <label
    :for="props.id"
    class="relative font-semibold k-label"
    :class="{ 'pl-3.5': props.required }"
  >
    {{ props.label }}
  </label>
</template>

<script setup lang="ts">
type Props = {
  required: boolean
  label: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
})

const strContent = computed(() => (props.required ? '"*"' : '""'))

defineOptions({
  name: 'FormLabel',
})
</script>
<style scoped>
@import '@/assets/css/main.css';

.k-label::before {
  content: v-bind(strContent);
  @apply top-0 left-0 absolute text-red-400;
}
</style>
