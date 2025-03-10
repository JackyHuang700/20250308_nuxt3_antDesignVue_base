<template>
  <div class="bg-[var(--k-bg-color)] h-screen">
    <div
      class="flex lg:flex-row flex-col flex-wrap lg:flex-nowrap justify-center items-center gap-5 mx-auto max-w-[800px] xl:max-w-[1000px] h-full"
    >
      <NuxtImg
        src="404-page.png"
        class="mb-5 lg:mb-0 max-w-[500px] lg:max-w-[700px]"
      />
      <div
        class="flex flex-wrap justify-center items-center gap-3.5 max-w-[600px] lg:max-w-auto"
      >
        <h1 class="font-bold text-[#1482f0] text-[32px] basis-full">OOPS!</h1>
        <p class="font-bold text-[#222] text-xl basis-full">
          The webmaster said that you can not enter this page...
        </p>
        <p class="text-gray-600 basis-full">
          Please check that the URL you entered is correct, or click the button
          below to return to the homepage.
        </p>

        <a-button
          type="primary"
          class="bg-[#1482f0] mt-5 !rounded-[50px]"
          @click="onBackToDashBoard"
          >Back to DashBoard</a-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const onBackToDashBoard = async () => {
  await navigateTo('/')
}

defineOptions({
  name: '404Page',
})
</script>
<style scoped></style>
