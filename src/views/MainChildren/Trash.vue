<template>
  <Tasks :title="title" :loaded="loaded" :tasks="tasksDS" :buttons="buttons" />
</template>
<script setup>
import Tasks from "../../components/Tasks.vue";
import { ref, onBeforeMount } from "vue";

import { initTasks, disc } from "../../APIStore";

const loaded = ref(false);
const tasks = ref(undefined);
const tasksDS = ref(undefined);
const tasksF = ref({ discarded: [], completed: [], active: [] });
const title = ref("Tareas Descartadas")
const buttons = ref({
  "edit": true,
  "completed": false
})

onBeforeMount(async () => {
  tasks.value = await initTasks();
  tasks.value.map((t) =>
    t.discarded
      ? tasksF.value.discarded.push(t)
      : t.completed
      ? tasksF.value.completed.push(t)
      : tasksF.value.active.push(t)
  );
  tasksDS.value = tasksF.value.discarded;
  console.log("task Discarded: ", tasksF.value);
  loaded.value = true;
});
</script>
