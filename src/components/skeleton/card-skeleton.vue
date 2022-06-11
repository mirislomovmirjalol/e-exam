<template>
  <div
      class="py-4 px-4 bg-white rounded-lg my-5 shadow-sm border border-purple-300 dark:bg-gray-700 dark:text-white"
  >
    <div class="animate-pulse flex">
      <div class="bg-purple-300 p-1.5 rounded-lg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <slot/>
        </svg>
      </div>
      <div class="text-left ml-4 w-full space-y-2">
        <div class="rounded-md bg-purple-300 h-6 w-2/3"></div>
        <div class="rounded-md bg-purple-300 h-4 w-5/6"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>