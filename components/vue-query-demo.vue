<template>
  <div>
    <template v-if="isFetching">
      <p>Loading...</p>
    </template>
    <template v-else>
      <div v-if="data">
        <h1>Vue Query Demo</h1>
        <div>{{ data }}</div>
        <div>{{ arrObj }}</div>
      </div>
    </template>
    <div>
      <span class="mr-1.5">page</span>
      <template v-if="page">
        <span>{{ page }}</span>
      </template>
    </div>
    <button @click="onSetRefetchData">++++</button>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const arrObj = computed(() => data?.value || ([] as Post[]))
const page = ref(1)

const { data, suspense, isFetching, refetch } = useQuery({
  queryKey: [
    'test',
    {
      page,
    },
  ],
  queryFn: getApiTest,
})

await suspense()

const onSetRefetchData = () => {
  page.value++
  refetch()
}

defineOptions({
  name: 'VueQueryDemo',
})
</script>
<style scoped></style>
