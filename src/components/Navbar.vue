<template>
  <nav
    class="
      font-sans
      flex
      text-center
      justify-between
      py-8
      px-6
      bg-purple-400
      shadow
      w-full
      text-white
      dark:bg-gray-800 dark:text-purple-400
      dark:bg-gray-800
      border-b
      border-gray-300
      dark:border-gray-700
    "
  >
    <div class="text-left">
      <h1
        class="
          text-4xl
          font-bold
          no-underline
          text-grey-darkest
          hover:text-blue-dark
        "
      >
        Let's play
      </h1>
      <h3
        class="
          text-base
          font-medium
          no-underline
          text-grey-darkest
          hover:text-blue-dark
        "
      >
        And be the best!
      </h3>
    </div>
    <div class="flex items-center">
        
    </div>
    <dropdown></dropdown>
  </nav>
</template>

<script>
import Dropdown from './Avatar-Dropdown.vue' 

export default {
    components: {
        Dropdown,
    }
};
</script>

<style>
</style>