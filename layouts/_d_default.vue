<template>
  <div>
    <a-button @click="setAddNewTab"> add new tab </a-button>
    <TabsView :tabs-data="objArrTabsView">
      <template v-for="_tab in objArrTabsView" #[_tab.key] :key="_tab.key">
        <slot />
      </template>
    </TabsView>
  </div>
</template>
<script setup lang="ts">
import { useCustomTabsPane } from '~/composables/useCustomTabsPane'

import TabsView from '~/components/tabs-view.vue'

import type { CustomTabsPane } from '~/types/types'

const { getDefaultTabsExcludeComponent } = useCustomTabsPane()

const objArrTabsView = ref<CustomTabsPane[]>([])

const { data: dynamicTabs } = await useFetch('/api/tabs', {
  default: () => getDefaultTabsExcludeComponent(),
})

objArrTabsView.value = dynamicTabs.value as CustomTabsPane[]

const setAddNewTab = () => {
  objArrTabsView.value.push(getDefaultTabsExcludeComponent()[0])
}
</script>
