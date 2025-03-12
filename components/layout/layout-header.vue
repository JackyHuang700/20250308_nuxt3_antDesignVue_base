<template>
  <a-layout-header
    class="flex justify-between items-stretch !bg-white shadow-xs !p-0 border-zinc-200 border-b border-solid !h-[var(--k-layout-header-height)] !leading-[var(--k-layout-header-height)]"
  >
    <div class="flex items-center">
      <template v-if="isCollapsed">
        <menu-unfold-outlined
          class="menu-collapse-btn trigger"
          @click="onSwitchCollapsed"
        />
      </template>
      <template v-else>
        <menu-fold-outlined
          class="menu-collapse-btn trigger"
          @click="onSwitchCollapsed"
        />
      </template>
    </div>

    <LayoutBreadcrumb />

    <div class="flex items-center h-full">
      <ProfileHeaderInfo />
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { useLayoutCollapsed } from '@/composables/useLayoutCollapsed'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import ProfileHeaderInfo from '@/components/profile/profile-header-info.vue'
import LayoutBreadcrumb from '@/components/layout/layout-breadcrumb.vue'

const { isCollapsed } = useLayoutCollapsed()

const onSwitchCollapsed = () => {
  isCollapsed.value = !isCollapsed.value
}

defineOptions({
  name: 'LayoutHeader',
})
</script>
<style scoped>
.menu-collapse-btn {
  @apply !ml-[18px];
}
</style>
