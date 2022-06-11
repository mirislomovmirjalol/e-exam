<template>
  <nav
      class="
      font-sans
      flex
      text-center
      justify-between
      py-4
      px-6
      bg-white
      shadow
      w-full
      text-white
      dark:bg-gray-800
      border-b
      dark:border-gray-700
    "
  >
    <div class="flex justify-between w-full text-purple-400 items-center">
      <button @click="goBack()" class="rounded-md border-2 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
        </svg>
      </button>
      <h3 v-if="title.length<20" class="text-gray-600 dark:text-white text-2xl font-bold">
        {{ title }}
      </h3>
      <h3 v-else class="text-purple-400 text-2xl font-bold">
        {{ title.substring(0, 20) + "..." }}
      </h3>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Toolbar",
  data: () => ({
    title: 'English part-3'
  }),
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
}
</script>

<style scoped>

</style>