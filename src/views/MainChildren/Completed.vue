<template>
  <Tasks :title="title" :loaded="loaded" :tasks="tasksC" :buttons="buttons"/>
</template>
<script setup>
import Tasks from "../../components/Tasks.vue";
import { ref, onBeforeMount } from "vue";

import { initTasks, disc } from "../../APIStore";

const loaded = ref(false);
const tasks = ref(undefined);
const tasksC = ref(undefined);
const tasksF = ref({ discarded: [], completed: [], active: [] });
const title = ref("Tareas Completadas")
const buttons = ref({
  edit: true,
  completed: false,
  destroy: false
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
  tasksC.value = tasksF.value.completed;
  console.log("task Completed: ", tasksF.value);
  loaded.value = true;
});
</script>
