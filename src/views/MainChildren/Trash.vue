<template>
  <Tasks
    :title="title"
    :loaded="loaded"
    :tasks="taskStore.tasksF.discarded"
    :buttons="buttons"
  />
</template>

<script setup>
import Tasks from "../../components/Tasks.vue";
import { ref, onBeforeMount, watch } from "vue";
import { initTasks } from "../../APIStore";
import { useTaskStore } from "../../store/task";

const loaded = ref(false);
const title = ref("Tareas Descartadas");
const buttons = ref({
  edit: true,
  completed: false,
  destroy: true,
});
const taskStore = useTaskStore();

const loader = async () => {
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
