<template>
  <TransitionRoot appear :show="this.open" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <DialogOverlay class="fixed inset-0 bg-black opacity-50"/>
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <div
                class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl
                dark:bg-gray-800 dark:text-white
            "
            >
              <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
              >
                {{ this.title }}
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  <slot></slot>
                </p>
              </div>

              <div class="mt-4 flex justify-between">
                <button
                    type="button"
                    class="px-6 py-2 mx-4 text-md font-medium text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    @click='closeModal'
                >
                  Cancel
                </button>

                <button
                    @click="start"
                    v-if="!loading"
                    type="button"
                    class="px-6 py-2 mx-4 text-md font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Finishing
                </button>
                <button v-else disabled type="button"
                        class="animate-pulse inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 focus:outline-none focus:shadow-outline-indigo transition ease-in-out duration-150 flex justify-between">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Please wait
                </button>

              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

export default {
  data: () => ({
    loading: false,
  }),
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  methods: {
    closeModal() {
      this.loading = false
      this.$emit('close')
    },
    start() {
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = false;
        this.$router.push({name: 'Home'})
      }, 3000);
    },
  },
  computed: {
    current_exam: function () {
      return this.$store.getters.current_exam
    }
  },
  props: {
    open: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'no title'
    },
    id: {
      type: Number,
    }
  },
  emits: ["log"]
}
</script>
<style>
.loader {
  border-top-color: rgba(0, 0, 0, 0);
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
