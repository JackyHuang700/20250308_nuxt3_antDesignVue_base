<template>
  <a-layout-sider
    id="components-layout-demo-custom-trigger"
    v-model:collapsed="isCollapsed"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
    <a-menu
      v-model:open-keys="strArrMenuOpenKeys"
      v-model:selected-keys="strArrMenuSelectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="objMenuStatus.collapsed"
      :items="objArrMenuitems"
      @click="onMenuClick"
    />
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useLayoutCollapsed } from '@/composables/useLayoutCollapsed'
import {
  strArrMenuSelectedKeys,
  strArrMenuOpenKeys,
  useCustomTabsPane,
} from '~/composables/useCustomTabsPane'

import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue'

const { onMenuClick } = useCustomTabsPane()
const { isCollapsed } = useLayoutCollapsed()

const objMenuStatus = reactive<{
  collapsed: boolean
  preOpenKeys: string[]
}>({
  collapsed: false,
  preOpenKeys: [],
})

const objArrMenuitems = reactive([
  {
    key: '/',
    icon: () => h(PieChartOutlined),
    label: 'admin-index',
    title: 'admin-index',
  },
  {
    key: '/demo/env-demo',
    icon: () => h(PieChartOutlined),
    label: 'env-demo',
    title: 'env-demo',
  },
  {
    key: '/demo/pinia-demo',
    icon: () => h(DesktopOutlined),
    label: 'pinia-demo',
    title: 'pinia-demo',
  },
  {
    key: '/demo/vue-query-demo',
    icon: () => h(InboxOutlined),
    label: 'vue-query-demo',
    title: 'vue-query-demo',
  },
  {
    key: '/demo/i18n-demo',
    icon: () => h(InboxOutlined),
    label: 'vue-i18n-demo',
    title: 'vue-i18n-demo',
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
    /* children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
    ], */
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '/demo/zod-demo',
            label: 'zod-demo',
            title: 'zod-demo',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
])

watch(
  () => strArrMenuOpenKeys.value,
  (_, oldVal) => {
    objMenuStatus.preOpenKeys = oldVal
  }
)

defineOptions({
  name: 'LayoutSider',
})
</script>
<style scoped></style>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
