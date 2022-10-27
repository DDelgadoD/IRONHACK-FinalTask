<template>
  <div class="card-container d-flex">
    <div class="card-c day-card">
      <div class="card-content">
        <div class="card-title">
          <img
            v-if="props.card.max_time"
            class="ok-edit-img"
            src="../assets/card/reloj.svg"
            alt=""
          />
          {{ props.card.title }}
        </div>
        <div class="card-body">{{ props.card.content }}</div>

        <div class="d-flex justify-content-end w-100 align-self-baseline">
          <p v-if="props.card.max_time" class="card-time me-auto align-middle">
            {{ props.card.max_time_format }}
          </p>

          <div v-if="props.buttons.edit" @click="edit(props.card.id)">
            <img class="ok-edit-img" src="../assets/card/editar.svg" alt="" />
          </div>
          <div
            v-if="props.buttons.completed"
            @click="comp(props.card.id, props.card.title)"
          >
            <img class="ok-edit-img" src="../assets/card/completo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="props.buttons.destroy"
      class="x-but"
      @click="preDel(props.card.id, props.card.title)"
    >
      <img class="x-img" src="../assets/card/cerrar.svg" alt="" />
    </div>
    <div v-else class="x-but" @click="trash(props.card.id, props.card.title)">
      <img class="x-img" src="../assets/card/cerrar-gris.svg" alt="" />
    </div>
  </div>
  <Modal
    :content="contentModal"
    :useForm="modEdit"
    :confirmDelete="modConf"
    v-show="showModal"
    @delete-modal="del"
    @close-modal="closeModal"
  />
</template>

<script setup>
import { defineProps, ref } from "vue";
import { discTask, compTask, delTask, task } from "../APIStore";
import Modal from "../components/Modal.vue";

const showModal = ref(false);
const contentModal = ref({
  text: "Hello",
});

const modEdit = ref(false);
const modConf = ref(false);

const props = defineProps({
  card: Object,
  buttons: Object,
});

const trash = (id, title) => {
  discTask(id);
  contentModal.value = { text: `Tarea "${title}" enviada a la papelera!` };
  showModal.value = true;
};

const comp = (id, title) => {
  compTask(id);
  contentModal.value = { text: `Tarea "${title}"" completada!` };
  showModal.value = true;
};

const edit = (id) => {
  const task1 = task(id);
  modEdit.value = true;
  contentModal.value = {
    text: `Edita Tarear`,
    edit: true,
    task: task1,
    taskId: id,
  };
  showModal.value = true;
};

const preDel = (id, title) => {
  contentModal.value = {
    text: ` La Tarea "${title}" será eliminada completamente. ¿Deseas continuar?`,
    taskTitle: title,
    taskId: id,
  };
  modConf.value = true;
  showModal.value = true;
};

const del = (id, title) => {
  delTask(id);
  closeModal();
  contentModal.value = { text: `La Tarea "${title}" eliminada` };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  modEdit.value = false;
  modConf.value = false;
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
  border-radius: 2%;
}

.card-c {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid 1px black;
  border-radius: 2%;
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

.x-but {
  margin: -12px -12px 0%;
  cursor: pointer;
}

.x-img {
  width: 25px;
}

.ok-edit-img {
  width: 50px;
  cursor: pointer;
}
</style>
