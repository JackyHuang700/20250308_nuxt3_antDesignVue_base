<template>
  <div class="flex justify-center items-center mr-3.5">
    <a-dropdown arrow :trigger="['click']">
      <div
        class="hover:bg-zinc-100 px-2 !max-h-[calc(var(--k-layout-header-height)-1px)] transition-all duration-300 ease-in-out cursor-pointer"
      >
        <div class="flex justify-center items-center gap-1.5">
          <NuxtImg
            src="profile-logo.jpg"
            class="rounded-full w-[22px] h-[22px]"
          />
          <div>{{ strUserName }}</div>
        </div>
      </div>
      <template #overlay>
        <a-menu>
          <ProfileHeaderInfoItem
            :title="objLangProfile.profile_setting"
            @click="onNavigateToProfile"
          >
            <template #icon>
              <UserOutlined />
            </template>
          </ProfileHeaderInfoItem>

          <ProfileHeaderInfoItem
            :title="objLangProfile.logout"
            @click="onLogout"
          >
            <template #icon>
              <LoginOutlined />
            </template>
          </ProfileHeaderInfoItem>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useCustomTabsPane } from '~/composables/useCustomTabsPane'
import { useI18nLang } from '@/composables/useI18nLang'

import ProfileHeaderInfoItem from '@/components/profile/profile-header-info-item.vue'

const { setAddObjArrTabs } = useCustomTabsPane()
const { objLangProfile } = useI18nLang()

const strUserName = 'admin'

const onNavigateToProfile = () => {
  setAddObjArrTabs('/profile')
}

const onLogout = () => {
  console.log('onLogout')
}

defineOptions({
  name: 'ProfileHeaderInfo',
})
</script>
<style scoped></style>
