<template>
  
  <div v-if="loaded" class="container day-case">
    <div class = "d-flex align-items-center justify-content-between pb-5" >
      <h1> {{props.title}} </h1>
      <div v-if="props.title == 'Tareas en Curso'" class="d-flex align-items-center">
        Añadir Tarea  <img class="icono" src="../assets/nueva.png" @click="addTask"/>
      </div>
    </div>
    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
    >
      <div v-for="task in tasks" class="col mb-4">
        <Cards
          :card= "task" 
          :buttons = "buttons"
        />
      </div>
    </div>
    <Modal :content="contentModalTask" v-show="showModalTask" @close-modal="showModalTask = false" />
  </div>
</template>
<script setup>
import Cards from "../components/Cards.vue";
import Modal from '../components/Modal.vue';
import { ref, watch } from "vue";

const props = defineProps({
  tasks: Object,
  loaded: Boolean,
  title: String,
  buttons: Object
});

const showModalTask = ref(false);
const contentModalTask = ref({
  text: 'Hello' 
})

const addTask = () =>{
  contentModalTask.value = {text:`Tarea enviada a la papelera!`}
  showModalTask.value = true;
} 



</script>

<style scoped>
.container {
  padding: 3em 3em;
  border-radius: 8px;
  margin: 2% auto;
}
.icono {
  width: 64px;
  height: 64px;
  cursor: pointer;
}

.night-case {
  background-image: var(--night-bg);
  box-shadow: var(--night-shadow);
}

.day-case {
  background: white;
  box-shadow: var(--day-shadow);
}
</style>
