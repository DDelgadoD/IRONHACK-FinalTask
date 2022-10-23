<template>
  <div class="container day-case">
    <h1>{{props.title}}</h1>
    <div
      v-if="loaded"
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
    >
      <div v-for="task in tasks" class="col mb-4">
        <Cards
          :id="task.id"
          :title="task.title"
          :body="task.content"
          :time="task.max_time"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Cards from "../components/Cards.vue";

const props = defineProps({
  tasks: Object,
  loaded: Boolean,
  title: String
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
