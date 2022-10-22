<template>
  <Tasks :loaded="loaded" :tasks="tasksDS" />
</template>
<script setup>
import Tasks from "./Tasks.vue";
import { ref, onBeforeMount } from "vue";

import { initTasks, disc } from "../APIStore";

const loaded = ref(false);
const tasks = ref(undefined);
const tasksDS = ref(undefined);
const tasksF = ref({ discarded: [], completed: [], active: [] });

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
