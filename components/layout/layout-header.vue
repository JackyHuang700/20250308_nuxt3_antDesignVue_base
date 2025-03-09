<template>
  <a-layout-header class="!bg-white !p-0">
    <menu-unfold-outlined
      v-if="isCollapsed"
      class="menu-collapse-btn trigger"
      @click="() => (isCollapsed = !isCollapsed)"
    />
    <menu-fold-outlined
      v-else
      class="menu-collapse-btn trigger"
      @click="() => (isCollapsed = !isCollapsed)"
    />
  </a-layout-header>
</template>

<script setup lang="ts">
import { useLayoutCollapsed } from '@/composables/useLayoutCollapsed'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const { isCollapsed } = useLayoutCollapsed()

// const collapsed = ref(false)

defineOptions({
  name: 'LayoutHeader',
})
</script>
<style scoped>
.menu-collapse-btn {
  @apply !ml-[18px];
}
</style>
