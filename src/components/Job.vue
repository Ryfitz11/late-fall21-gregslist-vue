<template>
  <div class="mt-3 selectable">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <div class="bg-light elevation-1 rounded">
        <div class="p-1 text-center">
          <p class="m-0">
            <b
              >{{ job.position }} at {{ job.company }} - ${{ job.salary }} per
              year</b
            >
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>