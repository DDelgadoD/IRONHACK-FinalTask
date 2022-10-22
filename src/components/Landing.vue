<template>
  <TimeLine :loaded="loaded" :tasks="tasksTime" />
  <Tasks :loaded="loaded" :tasks="tasksOK" />
</template>

<script setup>
import TimeLine from "../components/TimeLine.vue";
import Tasks from "../components/Tasks.vue";

import { ref, onBeforeMount } from "vue";
import { initTasks } from "../APIStore";

const loaded = ref(false);

const tasks = ref(undefined);
const tasksOK = ref(undefined);
const tasksTime = ref(undefined);
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
  tasksOK.value = tasksF.value.active;
  tasksTime.value = [...tasksOK.value].sort((a, b) =>
    a.max_time > b.max_time ? 1 : -1
  );
  loaded.value = true;
});
</script>
