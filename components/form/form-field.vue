<template>
  <div class="w-full">
    <FormLabel :id="props.id" :required="props.required" :label="props.label" />
    <a-input
      :id="props.id"
      v-model:value="objIndex"
      autofocus
      :placeholder="props.placeholder"
      class="!mt-1"
    />
    <FormErrorMsg :error-msg="props.error" />
  </div>
</template>

<script setup lang="ts">
import FormLabel from '@/components/form/form-label.vue'
import FormErrorMsg from '@/components/form/form-error-msg.vue'

type Props = {
  required: boolean
  label: string
  id?: string
  placeholder?: string
  error?: string
}
const props = defineProps<Props>()

const objIndex = defineModel('value', {
  required: true,
  type: String || Number,
})

defineOptions({
  name: 'FormField',
})
</script>
<style scoped></style>
