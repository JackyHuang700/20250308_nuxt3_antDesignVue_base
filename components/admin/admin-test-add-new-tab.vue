<template>
  <a-button @click="onAddNewTab"> add new tab </a-button>
</template>

<script setup lang="ts">
import { useCustomTabsPane } from '~/composables/useCustomTabsPane'

import type { CustomTabsPane } from '~/types/types'

const objArrTabsView = defineModel('objArrTabsView', {
  required: true,
  type: Array as PropType<CustomTabsPane[]>,
})

const { getDefaultTabsExcludeComponent } = useCustomTabsPane()

const { data: dynamicTabs } = await useFetch('/api/tabs', {
  default: () => getDefaultTabsExcludeComponent(),
})

objArrTabsView.value = dynamicTabs.value as CustomTabsPane[]

const onAddNewTab = () => {
  objArrTabsView.value.push(getDefaultTabsExcludeComponent()[0])
}

defineOptions({
  name: 'AdminTestAddNewTab',
})
</script>
<style scoped></style>
