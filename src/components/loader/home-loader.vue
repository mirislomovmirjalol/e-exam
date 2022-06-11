<template>
  <div class="container mx-auto">
    <div class="mx-8">
      <h3 class="text-left text-xl font-bold mt-6">
        Loading
        <span class="animate-pulse">
          ...
        </span>
      </h3>

      <card-skeleton></card-skeleton>

      <card-skeleton></card-skeleton>

      <card-skeleton></card-skeleton>

    </div>
  </div>
</template>

<script>
import CardSkeleton from "@/components/skeleton/card-skeleton";

export default {
  components: {
    CardSkeleton
  }
}
</script>

<style scoped>

</style>