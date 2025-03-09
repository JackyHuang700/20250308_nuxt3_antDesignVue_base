<template>
  <a-layout class="!min-h-screen">
    <LayoutSider />
    <a-layout>
      <LayoutHeader />
      <LayoutContent>
        <template v-if="isTest">
          <AdminTestAddNewTab v-model:obj-arr-tabs-view="objArrTabsView" />
        </template>
        <TabsView :tabs-data="objArrTabsView">
          <template v-for="_tab in objArrTabsView" #[_tab.key] :key="_tab.key">
            <slot />
          </template>
        </TabsView>
      </LayoutContent>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { useCustomTabsPane } from '~/composables/useCustomTabsPane'

import TabsView from '~/components/tabs-view.vue'
import LayoutHeader from '@/components/layout/layout-header.vue'
import LayoutContent from '@/components/layout/layout-content.vue'
import LayoutSider from '~/components/layout/layout-sider.vue'
import AdminTestAddNewTab from '@/components/admin/admin-test-add-new-tab.vue'

import type { CustomTabsPane } from '~/types/types'

const { getDefaultTabsExcludeComponent, setInitActiveTabAndMenuSelectedKeys } =
  useCustomTabsPane()

const objArrTabsView = ref<CustomTabsPane[]>([])
const isTest = ref(false)

objArrTabsView.value = getDefaultTabsExcludeComponent()

onMounted(() => {
  setInitActiveTabAndMenuSelectedKeys()
})
</script>
