<template>
  <label @click="answering(value)" class="py-2 px-4 flex rounded-lg my-5"
         :class="{ 'bg-white shadow-sm dark:bg-gray-700 dark:text-white': !isActive, 'bg-purple-400 shadow-xl':isActive }">
    <div class="p-1.5 rounded-lg flex items-center">
      <span class="text-lg font-medium duration-75" :class="{ 'text-white':isActive }">
        {{ title }}
      </span>
    </div>
  </label>
</template>

<script>
export default {
  name: "Questionbar.vue",
  props: ['value', 'isActive', 'title'],
  data: () => ({}),
  methods: {
    answering(value) {
      this.$emit("myEvent", value)
    },
  }
}
</script>

<style scoped>

</style>