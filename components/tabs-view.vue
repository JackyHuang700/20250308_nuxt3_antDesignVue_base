<template>
  <a-tabs
    v-model:active-key="strActiveTab"
    :hide-add="true"
    type="editable-card"
    class="tabs-view"
    @change="onTabsChange"
    @edit="onTabsRemoveOrAdd"
  >
    <template v-for="_tab in objArrTabs" :key="_tab.key">
      <a-tab-pane :tab="_tab.title" :closable="_tab.closable">
        <template v-if="_tab.component">
          <component :is="_tab.component" />
        </template>
        <template v-else>
          <div class="p-[24px] h-full">
            <slot :name="_tab.key" />
          </div>
        </template>
      </a-tab-pane>
    </template>
  </a-tabs>
</template>

<script setup lang="ts">
import {} from 'nuxt/app'
import {
  strActiveTab,
  objArrTabs,
  useCustomTabsPane,
} from '~/composables/useCustomTabsPane'

import type { CustomTabsPane } from '~/types/types'

const { getObjArrTabsView, onTabsChange, onTabsRemoveOrAdd } =
  useCustomTabsPane()

// dynamic tabs data, can be from props or API
interface Props {
  tabsData: CustomTabsPane[]
}
const props = defineProps<Props>()

// synchronous routing and tabs
/* watch(
  () => route.path,
  (newPath) => {
    const matchedTab = objArrTabs.value.find((tab) => tab.path === newPath)
    if (matchedTab) {
      strActiveTab.value = matchedTab.key
    }
  },
  { immediate: true }
)
 */

const setMockTabs = () => {
  objArrTabs.value =
    props.tabsData.length > 0 ? props.tabsData : getObjArrTabsView()
}

onMounted(() => {
  setMockTabs()
})

defineOptions({
  name: 'TabsView',
})
</script>
<style>
@import '@/assets/css/main.css';

.tabs-view {
}
.tabs-view .ant-tabs-nav {
  @apply bg-white !mb-0;
}
</style>
