<template>
    <div
        class="py-4 px-4 bg-white flex rounded-lg my-5 shadow-sm hover:shadow-xl dark:bg-gray-700 dark:text-white"
    >
      <div :class="'bg-' + color + '-100 p-1.5 rounded-lg'">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="'w-10 h-10 text-' + color + '-400'"
            viewBox="0 0 20 20"
            fill="currentColor"
            v-html="icon"
        >
        </svg>
      </div>
      <div class="text-left ml-4">
        <h3 class="text-lg font-medium">{{ title }}</h3>
        <span class="text-md font-normal text-gray-400">{{ question }} Question</span>
      </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: ['color', 'icon', 'title', 'question', 'to'],
};
</script>

<style>
</style>