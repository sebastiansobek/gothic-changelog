
<template>
  <div class="overview pt-6 pb-6 pl-4 pr-4">
    <div v-if="data.description">      
      <span v-html="data.description" />
      <br><br>
    </div>
    <recursive-list :data="data.overview.lists" />
  </div>
</template>

<script>
import RecursiveList from "./RecursiveList.vue";

export default {
  name: "ModeOverview",
  props: {
    data: { type: Object, required: true },
  },
  components: { RecursiveList },
};
</script>
