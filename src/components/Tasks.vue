<template>
  <div v-if="loaded" class="container day-case">
    <h1>{{props.title}}</h1>
    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
    >
      <div v-for="task in tasks" class="col mb-4">
        <Cards
          :card= "task" 
          :buttons = "buttons"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Cards from "../components/Cards.vue";
import { ref } from "vue";

const props = defineProps({
  tasks: Object,
  loaded: Boolean,
  title: String,
  buttons: Object
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
