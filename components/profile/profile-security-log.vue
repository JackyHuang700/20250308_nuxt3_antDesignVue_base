<template>
  <ProfileContentTitle :title="objLangProfile.profile_security_log">
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1500, y: 300 }"
      :pagination="objPaginationProps"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a>action</a>
        </template>
      </template>
    </a-table>
  </ProfileContentTitle>
</template>

<script setup lang="ts">
import { useI18nLang } from '@/composables/useI18nLang'
import { useAntPagination } from '@/composables/useAntPagination'

import ProfileContentTitle from '@/components/profile/profile-content-title.vue'

import type { TableColumnsType } from 'ant-design-vue'

const { objLangProfile } = useI18nLang()
const { objPaginationProps } = useAntPagination()

objPaginationProps.value.current = 4

const columns: TableColumnsType = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    width: 100,
  },
]

interface DataItem {
  key: number
  name: string
  age: number
  address: string
}

const data: DataItem[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  })
}

defineOptions({
  name: 'ProfileSecurityLog',
})
</script>
<style scoped></style>
