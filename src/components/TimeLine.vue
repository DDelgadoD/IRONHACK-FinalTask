<template>
  <div class="container day-case">
    <h1>Timeline</h1>
    <VueHorizontalTimeline  v-if="loaded" :items="tasks" :min-width="'250px'" 
      :title-attr="'max_time_format'" :title-substr="30" :title-centered="true" 
      :content-attr="'title'" :content-centered="true" :timeline-background="'#FFF'" 
    />
  </div>
</template>

<script setup>
import { VueHorizontalTimeline } from "vue-horizontal-timeline";

const props = defineProps({
  tasks: Object,
  loaded: Boolean,
});
</script>

<style scoped>
.container {
  padding: 3em 3em;
  border-radius: 8px;
  margin: 2% auto;
}

.night-case {
  background-image: var(--night-bg);
  box-shadow: var(--night-shadow);
}

.day-case {
  background: white;
  box-shadow: var(--day-shadow);
}



</style>
