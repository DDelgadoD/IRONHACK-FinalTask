<template>
  <div class="card-container d-flex">
    <div class="card day-card">
      <div class="card-content">
        <div class="card-title">
          <img
            v-if="props.time"
            class="ok-edit-img"
            src="../assets/reloj.svg"
            alt=""
          />
          {{ props.title }}
        </div>
        <div class="card-body">{{ props.body }}</div>

        <div class="d-flex justify-content-end w-100 align-self-baseline">
          <p v-if="props.time" class="card-time me-auto align-middle">
            {{ moment(props.time).format("D-M-Y, hh:mm:ss") }}
          </p>

          <div @click="edit(props.id)">
            <img class="ok-edit-img" src="../assets/editar.svg" alt="" />
          </div>
          <div @click="comp(props.id)">
            <img class="ok-edit-img" src="../assets/completo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="close" @click="del(props.id)">
      <img class="close-img" src="../assets/cerrar.svg" alt="" />
    </div>
  </div>
  <Modal v-show="showModal" @close-modal="showModal = false" />
</template>

<script setup>
//TODO: crear modal para editar
//TODO: crear modal para ¡Tarea Cumplida!
//TODO: poner basura para las tareas eliminadas
//TODO: poner bandera de meta para tareas completadas

import { defineProps, ref } from "vue";
import { discTask, compTask } from "../APIStore";
import moment from "moment";
import Modal from '../components/Modal.vue'

const showModal= ref(false);
const props = defineProps({
  id: Number,
  title: String,
  body: String,
  time: String,
});

const del = (id) => {
  discTask(id);
  alert("deleted", id);
};

const comp = (id) => {
  compTask(id);
  alert("completed!", id);
};

const edit = (id) => {
    showModal.value = true;
};

</script>

<style scoped>
.card-container {
  justify-content: center;
  height: 350px;
}

.card-container:hover {
  box-shadow: 0 0 10px 5px #e0cb48, 0 0 12px 6px #f6eaf2, 0 0 15px 12px #e2d92b,
    0 0 20px 15px #ff145c;
  transition: box-shadow 0.5s linear;
}

.card {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.day-card {
  background-color: var(--day);
  border-color: var(--night);
}

.night-card {
  background-color: var(--night);
  border-color: var(--day);
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5%;
  width: 90%;
  height: 90%;
  overflow-wrap: break-word;
}

.card-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  background-color: rgba(20, 87, 92, 0.5);
  width: 100%;
  padding: 10px;
}

.card-body {
  width: 100%;
  padding: 10px;
  word-wrap: break-word;
  overflow-y: scroll;
  margin-bottom: 2%;
}

.card-time {
  color: #89abad;
  text-align: center;
  font-size: small;
  margin: 5%;
}

.close {
  position: relative;
  margin: -12px -12px 0%;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.ok-edit-img {
  width: 50px;
  cursor: pointer;
}
</style>
