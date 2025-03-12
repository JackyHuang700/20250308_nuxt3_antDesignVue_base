<template>
  <a-breadcrumb class="flex justify-center items-center !mr-auto !ml-4">
    <template v-for="_breadcrumb in objArrBreadcrumb" :key="_breadcrumb.key">
      <template v-for="_item in _breadcrumb.items" :key="_item.label">
        <a-breadcrumb-item>
          <template v-if="_item.href">
            <a @click.prevent="(e) => onClickBreadcrumb(e, _item)">{{
              _item.label
            }}</a>
          </template>
          <template v-else>
            <span>{{ _item.label }}</span>
          </template>
        </a-breadcrumb-item>
      </template>
    </template>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { useBreadcrumb } from '@/composables/useBreadcrumb'

const { objArrBreadcrumb } = useBreadcrumb()

const onClickBreadcrumb = async (e: Event, item: ObjArrBreadcrumbItem) => {
  e.preventDefault()

  if (item.href) {
    await navigateTo(item.href)
  }
}

defineOptions({
  name: 'LayoutBreadcrumb',
})
</script>
<style scoped></style>
