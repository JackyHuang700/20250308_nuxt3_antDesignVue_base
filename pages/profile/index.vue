<template>
  <div>
    <a-tabs v-model:active-key="strActiveKey" hide-add tab-position="left">
      <a-tab-pane v-for="_tabPane in objArrTabPane" :key="_tabPane.key">
        <template #tab>
          <component :is="_tabPane.icon" />
          <span>{{ _tabPane.title }}</span>
        </template>
        <component :is="_tabPane.component" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import ProfileMsg from '~/components/profile/profile-msg.vue'
import {
  UserOutlined,
  SettingOutlined,
  CalendarOutlined,
} from '@ant-design/icons-vue'

const strActiveKey =
  ref<(typeof objArrTabPane.value)[number]['key']>('profile-msg')

type ObjArrTabPane = {
  key: string
  icon: unknown
  title: string
  component: unknown
}
const objArrTabPane = ref<ObjArrTabPane[]>([
  {
    key: 'profile-msg',
    icon: markRaw(UserOutlined),
    title: '帳戶訊息',
    component: markRaw(ProfileMsg),
  },
  {
    key: 'profile-setting',
    icon: markRaw(SettingOutlined),
    title: '偏好設定',
    component: null,
  },
  {
    key: 'profile-log',
    icon: markRaw(CalendarOutlined),
    title: '安全日誌',
    component: null,
  },
] as const)

defineOptions({
  name: 'ProfileIndex',
})
</script>
<style scoped></style>
