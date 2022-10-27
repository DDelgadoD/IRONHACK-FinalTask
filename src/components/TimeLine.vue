<template>
  <div class="container day-case">
    <h1>Timeline</h1>
    <section class="timeline">
      <div v-for="(task, i) in tasks" class="timeliner d-flex">
        <img src="../assets/timeLine/linea-medio.svg" />

        <div class="event">
          <div
            :class="i % 2 ? 'eventBubble-p' : 'eventBubble-i'"
            class="eventBubble"
          >
            <div class="max-time">{{ task.max_time_format }}</div>
            <div class="task-title">{{ task.title.substring(0, 16) }}</div>
          </div>
        </div>

        <img src="../assets/timeLine/dot.svg" />
      </div>

      <img src="../assets/timeLine/linea-extremo.svg" />
      <img src="../assets/timeLine/threedots.svg" />
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
  height: 200px;
  overflow-x: scroll;
}

.timeliner {
  display: flex;
  align-items: center;
  height: 170px;
}

.event {
  position: relative;
}

.eventBubble {
  position: absolute;
  width: 150px;
  height: 60px;
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(158, 158, 158, 0.64);
}

.eventBubble-i {
  top: -80px;
  left: -15px;
}

.eventBubble-p {
  left: -80px;
  top: 20px;
}

[class*="eventBubble-"]:after,
[class*="eventBubble-"]:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  border-bottom: 0;
}

[class*="eventBubble-"]:before,
[class*="eventBubble-"]:after {
  border-width: 12px;
}

[class*="eventBubble-i"]:before,
[class*="eventBubble-i"]:after {
  left: 13px;
  bottom: -10px;
}

[class*="eventBubble-i"]:before,
[class*="eventBubble-p"]:before {
  border-top-color: rgba(222, 222, 222, 0.66);
}

[class*="eventBubble-i"]:after,
[class*="eventBubble-p"]:after {
  border-top-color: #f6f6f6;
}

[class*="eventBubble-p"]:before,
[class*="eventBubble-p"]:after {
  bottom: 59px;
  left: 78px;
  transform: rotate(180deg);
}

.max-time {
  font-weight: bold;
  font-size: 1rem;
  margin: 2%;
  color: white;
  background-color: rgba(20, 87, 92, 0.5);
  text-align: center;
}

.task-title {
  text-align: center;
}
</style>
