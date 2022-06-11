<template>
  <div class="min-h-screen w-full bg-purple-50 dark:bg-gray-800 dark:text-white pb-16">
    <toolbar></toolbar>

    <div class="container mx-auto">
      <div class="mx-8">

        <div class="my-12 text-left">
          <img src="@/assets/illustration/start.svg" alt=""/>
        </div>

        <div class="fixed inset-x-0 bottom-10 z-10 flex justify-between">
          <button @click="start"
                  class="py-2.5 bg-purple-400 w-full text-white rounded-lg text-2xl font-extrabold shadow-md hover:shadow-xl mx-8">
            Next
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import toolbar from "../components/exam/toolbar";

export default {
  name: "Start",
  components: {
    toolbar,
  },
  methods: {
    start() {
      return this.$router.push({ name: 'exams', params: { id: this.$route.params.id } });
    },
  }
}
</script>

<style scoped>

</style>