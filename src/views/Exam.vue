<template>
  <div class="min-h-screen w-full bg-purple-50 dark:bg-gray-800 dark:text-white pb-16">
    <toolbar></toolbar>

    <div class="container mx-auto">
      <div class="mx-8">

        <div class="my-6 text-left">
          <h5 class="text-yellow-500 text-md font-bold tracking-wide">
            Question {{ index + 1 }}/{{ this.current_exam.tests.length }}
          </h5>

          <h3 class="my-2 text-2xl font-black tracking-tight">
            {{ test.question }}
          </h3>

        </div>

        <variant v-for="variant in test.variants" :key="variant.id" :title="variant.title"
                 :is-active="variant.id === this.answer"
                 :value="variant.id" @myEvent="changeAnswer">
        </variant>

        <div>


          <button v-if="index+1 !== this.current_exam.tests.length" @click="next"
                  class="py-2.5 mt-10 bg-purple-400 w-full text-white rounded-lg text-2xl font-extrabold shadow-md my-2 hover:shadow-xl">
            Next
          </button>
          <button v-else @click="finish"
                  class="py-2.5 mt-10 bg-green-500 w-full text-white rounded-lg text-2xl font-extrabold shadow-md my-2 hover:shadow-xl">
            Finish
          </button>


          <button @click="back"
                  class="py-2.5 bg-gray-400 w-full text-white rounded-lg text-2xl font-extrabold shadow-md my-2 hover:shadow-xl dark:bg-gray-700 dark:text-white">
            Back
          </button>
          <Modal title="Finishing exam">
            Are you sure about that you complete all tests?
          </Modal>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import toolbar from "../components/exam/toolbar";
import variant from "../components/exam/Variant.vue";
import {mapActions} from 'vuex'
import Modal from "@/components/Modal";

export default {
  name: "Exam",
  data: () => ({
    answer: '',
    isFinishModalOpen: false,
  }),
  components: {
    variant,
    toolbar,
    Modal
  },
  methods: {
    changeAnswer(value) {
      this.answer = value
    },
    next() {
      this.next_test()
      this.answer = ''
    },
    back() {
      this.answer = ''
      this.back_test()
    },
    finish() {
      this.answer = ''
    },
    ...mapActions(['next_test']),
    ...mapActions(['back_test']),
    ...mapActions(['start_test']),
  },
  computed: {
    index: function () {
      return this.$store.getters.current_index
    },
    current_exam: function () {
      return this.$store.getters.current_exam
    },
    test: function () {
      return this.$store.getters.current_exam.tests[this.index]
    },
  },
  mounted() {
    this.start_test()
  }
}
</script>

<style scoped>

</style>