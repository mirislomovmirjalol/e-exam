<template>
  <div class="home">
    <div class="w-full h-screen bg-purple-50 dark:bg-gray-800 dark:text-white">
      <navbar></navbar>

      <transition name="fade" mode="out-in">

        <home-loader v-if="loader"></home-loader>

        <div v-else class="container mx-auto">
          <div class="mx-8">
            <h3 class="text-left text-xl font-bold mt-6">Recent Exam</h3>
            <card v-for="exam in exams" @click="openModal(exam)" :key="exam.id" :color="exam.color" :title="exam.title"
                  :question="exam.question_count" :icon="exam.icon">
            </card>
          </div>
        </div>

      </transition>

      <bottom-nav></bottom-nav>
    </div>

    <Modal :open="isModalOpen" @close="closeModal" :title="modalData.title" :id="modalData.id">
      <div class="container mx-auto">
        <div class="mx-8">
          <div class="my-12 text-left">
            Do you really want to start <span class="font-bold text-green-500">{{ this.modalData.title }}</span> exam?
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from "../components/Bottom-Nav.vue";
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
import HomeLoader from "@/components/loader/home-loader";
import Modal from '@/components/exam/Modal';

export default {
  name: "Home",
  data: () => ({
    loader: true,
    isModalOpen: false,
    modalData: {
      title: null,
      id: null
    },
  }),
  components: {
    HomeLoader,
    BottomNav,
    Navbar,
    Card,
    Modal,
  },
  methods: {
    stopLoader() {
      setTimeout(() => this.loader = false, 3000);
    },
    closeModal() {
      this.isModalOpen = false
    },
    openModal(exam) {
      this.modalData.title = exam.title
      this.modalData.id = exam.id
      this.isModalOpen = true
    },
  },
  mounted() {
    this.stopLoader()
  },
  computed: {
    exams: function () {
      return this.$store.getters.exams
    }
  },
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
