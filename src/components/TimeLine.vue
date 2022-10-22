<template>
  <div class="container day-case">
    <h1>Timeline</h1>
    <div v-if="loaded" v-for="task in tasks" class="col mb-4">
      <div v-if="task.max_time">{{ task.max_time }}: {{ task.title }}</div>
    </div>
  </div>
</template>

<script setup>
// TODO: Editar el Timeline para ponerlo bonito y en orden.

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
