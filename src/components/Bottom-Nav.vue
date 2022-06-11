<template>
  <section
      id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 bg-white rounded-t-2xl border-t dark:bg-gray-800 dark:border-gray-700"
  >
    <div id="tabs" class="flex justify-between mx-8 py-2 text-gray-400">
        <router-link
            class="
          w-full
          justify-center
          inline-block
          text-center
          pt-2
          pb-1
        "
            active-class="bg-purple-100 rounded-lg text-purple-400 dark:bg-gray-700 dark:text-purple-400"
            to="/"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block mb-1 h-8 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </router-link>
        <router-link
            class="
          w-full
          justify-center
          inline-block
          text-center
          pt-2
          pb-1
        "
            active-class="bg-purple-100 rounded-lg text-purple-400 dark:bg-gray-700 dark:text-purple-400"
            :to="{ name: 'exams', params: { id: 0 }}"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block mb-1 h-8 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"/>
            <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </router-link>
        <router-link
            class="
          w-full
          justify-center
          inline-block
          text-center
          pt-2
          pb-1
        "
            active-class="bg-purple-100 rounded-lg text-purple-400 dark:bg-gray-700 dark:text-purple-400"
            to="/2"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block mb-1 h-8 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </router-link>
        <router-link
            class="
          w-full
          justify-center
          inline-block
          text-center
          pt-2
          pb-1
        "
            active-class="bg-purple-100 rounded-lg text-purple-400 dark:bg-gray-700 dark:text-purple-400"
            to="/3"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block mb-1 h-8 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.active {
}
</style>