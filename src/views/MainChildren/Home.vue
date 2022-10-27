<template>
  <TimeLine :loaded="loaded" :tasks="taskStore.tasksTime" />
  <Tasks
    :loaded="loaded"
    :title="title"
    :tasks="taskStore.tasksF.active"
    :buttons="buttons"
  />
</template>

<script setup>
import TimeLine from "../../components/TimeLine.vue";
import Tasks from "../../components/Tasks.vue";

import { ref, onBeforeMount, watch } from "vue";
import { initTasks } from "../../APIStore";
import { useTaskStore } from "../../store/task";

const loaded = ref(false);

const title = ref("Tareas en Curso");
const buttons = ref({
  edit: true,
  completed: true,
  destroy: false,
});

const taskStore = useTaskStore();

watch(taskStore.tasks, (newValue) => {
  console.log("watch");
  loader();
});

const loader = async () => {
  console.log("loading...");
  await initTasks();
  loaded.value = true;
};

onBeforeMount(async () => {
  await loader();
});
</script>
