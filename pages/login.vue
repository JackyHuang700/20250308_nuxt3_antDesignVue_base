<template>
  <a-button @click="handleMessage">
    buttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbuttonbutton
  </a-button>
</template>

<script setup lang="ts">
import {} from 'vue'

const handleMessage = () => {
  message.info('This is a normal message')
}

defineOptions({
  name: 'Login',
})
</script>
<style scoped></style>
