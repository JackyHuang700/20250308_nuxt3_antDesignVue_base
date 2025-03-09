<template>
  <div class="mx-auto my-2 max-w-[100px] text-red-500">
    {{ indexStore.strToken }}
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { useUserStore } from '@/store/useUserStore'

const indexStore = useUserStore()

defineOptions({
  name: 'PiniaDemo',
})
</script>
<style scoped></style>
