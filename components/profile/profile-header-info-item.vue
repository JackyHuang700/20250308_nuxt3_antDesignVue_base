<template>
  <a-menu-item class="profile-header-avatar">
    <slot name="icon" />
    <a href="javascript:;" class="ml-1.5">{{ props.title }}</a>
  </a-menu-item>
</template>

<script setup lang="ts">
type Props = {
  title: string
}
const props = defineProps<Props>()

defineOptions({
  name: 'ProfileHeaderInfoItem',
})
</script>
<style>
.profile-header-avatar .anticon {
  @apply !align-[0.2em];
}
</style>
