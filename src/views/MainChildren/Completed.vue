<template>
  <Tasks
    :title="title"
    :loaded="loaded"
    :tasks="taskStore.tasksF.completed"
    :buttons="buttons"
  />
</template>
<script setup>
import Tasks from "../../components/Tasks.vue";
import { ref, onBeforeMount, watch } from "vue";
import { useTaskStore } from "../../store/task";
import { initTasks } from "../../APIStore";

const loaded = ref(false);
const title = ref("Tareas Completadas");
const buttons = ref({
  edit: true,
  completed: false,
  destroy: false,
});
const taskStore = useTaskStore();

const loader = async () => {
  console.log("loading...");
  await initTasks();
  loaded.value = true;
};

onBeforeMount(async () => {
  await loader();
});

watch(taskStore.tasks, (newValue) => {
  console.log("watch");
  loader();
});
</script>
