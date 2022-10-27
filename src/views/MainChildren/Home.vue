<template>
  <TimeLine :loaded="loaded" :tasks="tasksTime" />
  <Tasks  :loaded="loaded" :title="title" :tasks="tasksOK" :buttons="buttons" />
</template>

<script setup>
import TimeLine from "../../components/TimeLine.vue";
import Tasks from "../../components/Tasks.vue";

import { ref, onBeforeMount } from "vue";
import { initTasks } from "../../APIStore";
import moment from "moment";

const loaded = ref(false);

const tasks = ref(undefined);
const tasksOK = ref(undefined);
const tasksTime = ref(undefined);
const tasksF = ref({ discarded: [], completed: [], active: [] });
const title = ref("Tareas en Curso")
const buttons = ref({
  edit: true,
  completed: true,
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
  tasksOK.value = tasksF.value.active;
  
  tasksTime.value = [...tasksOK.value]
    .filter(t => t.max_time != null)
    .sort((a, b) => a.max_time > b.max_time ? 1 : -1)
    
    tasksTime.value.forEach(t => {
      t.max_time_format = moment(t.max_time).format("D-M-Y HH:mm:ss")
    })
 
  loaded.value = true;


});
</script>
