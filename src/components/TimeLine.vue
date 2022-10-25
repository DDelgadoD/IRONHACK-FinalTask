<template>
  <div class="container day-case">
    <h1>Timeline</h1>
    <section class="timeline">
      <div v-for="(task, i) in tasks" class="timeline">
        
        <img v-if="i == 0" src="../assets/timeLine/linea-extremo.svg"/>
        <img v-else src="../assets/timeLine/linea-medio.svg"/>
        
        <div :class="i%2 ? 'event2' : 'event1'">
          <div :class="i%2 ? 'event2Bubble' : 'event1Bubble'">
            <div class="max-time">{{ task.max_time_format }}</div>
            <div class="task-title">{{ task.title }}</div>
          </div>
        </div>
        
        <img src="../assets/timeLine/dot.svg"/>
      </div>

      <img src="../assets/timeLine/linea-extremo.svg"/>
      <img src="../assets/timeLine/threedots.svg"/>
    </section>
  </div>

</template>

<script setup>

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

.timeline {
  display: flex;
  align-items: center;
  height: 170px;
}

.event1,
.event2 {
  position: relative;
}

.event1Bubble {
  position: absolute;
  width: 150px;
  height: 60px;
  top: -80px;
  left: -15px;
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(158, 158, 158, 0.64)
}

.event2Bubble {
  position: absolute;
  width: 150px;
  height: 60px;
  left: -105px;
  top: 20px;
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(158, 158, 158, 0.64)
}

.event1Bubble:after,
.event1Bubble:before,
.event2Bubble:after,
.event2Bubble:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  border-bottom: 0;
}

.event1Bubble:before {
  bottom: -10px;
  left: 13px;
  border-top-color: rgba(222, 222, 222, 0.66);
  border-width: 12px;
}

.event1Bubble:after {
  bottom: -8px;
  left: 13px;
  border-top-color: #F6F6F6;
  border-width: 12px;
}

.event2Bubble:before {
  bottom: 59px;
  left: 103px;
  border-top-color: rgba(222, 222, 222, 0.66);
  border-width: 12px;
  transform: rotate(180deg);
}

.event2Bubble:after {
  bottom: 57px;
  left: 103px;
  border-top-color: #F6F6F6;
  border-width: 12px;
  transform: rotate(180deg);
}

.max-time{
  font-weight: bold;
  font-size: 1rem;
  margin:2%;
  color: white;
  background-color: rgba(20, 87, 92, 0.5);
  text-align: center;
}
.task-title{
  text-align: center;
}
</style>