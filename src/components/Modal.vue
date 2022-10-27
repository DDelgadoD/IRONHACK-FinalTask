<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="mymodal" @click.stop>

        <div v-if="props.edit">
          <h2> {{ props.content.text }} </h2>
          <form :form="form" @:submit.prevent="createOrEdit(props.content.add)">
            <div class="form-group">
              <label for="title">Título</label>

              <input v-model="form.title.content" id="title" class="form-control" type="text" required />

              <label for="content">Contenido</label>

              <textarea v-model="form.content.content" class="form-control" id="content" rows="3" required />

              <label for="datetime">Fecha Límite</label>
              <input v-model="form.max_date.content" class="form-control" id="datetime" type="datetime-local">

              <button class="btn">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div v-else>
          <p> {{ props.content.text }} </p>
          <div v-if="confirmDelete">
            <button class="btn btn-primary px-4 mx-3" @click="$emit('close-modal')">No</button>
            <button class="btn btn-danger px-4 mx-3"
              @click="$emit('delete-modal', props.content.taskId, props.content.taskTitle)">Si</button>
          </div>
        </div>
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="../assets/cerrar.svg" alt="" />
      </div>
    </div>
  </transition>
</template>
  
<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { addTask } from "../APIStore";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const form = ref({
  title: {
    content: '',
    error: false
  },
  content: {
    content: '',
    error: false
  },
  max_date: {
    content: '',
    error: false
  }
});

const emit = defineEmits(['close-modal'])
const props = defineProps({
  content: Object,
  edit: Boolean,
  confirmDelete: Boolean
});

const formReset = () => {
  form.value.title.content = "";
  form.value.content.content = "";
  form.value.max_date.content = ""
}

const createOrEdit = async (add) => {
  if (add) {
    const task = {
        user_id: authStore.getUser(),
        title: form.value.title.content,
        content: form.value.content.content,
    }
    if(form.value.max_date.content.length > 0) task.max_time = form.value.max_date.content
    const response = await addTask(task)
    
  }



  emit('close-modal')
  formReset()
}

</script>
  
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.mymodal {
  text-align: center;
  background-color: white;
  width: 50%;
  min-width: 300px;
  height: fit-content;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

.close {
  margin: 11% 0 0 -50px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

form {
  margin: 0 10%;
  min-width: 200px;
}

input,
textarea {
  border-radius: 35px;
  outline: none;
  margin-bottom: 10px;
  font-stretch: 19px;
  color: #999;
  text-align: left;
  padding: 3%;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  background: #f7fafc;
  transition: 0.3s ease;
}

input:focus {
  background: transparent;
  border: 1px solid #0568c1;
}


.btn {
  margin: 25px 0;
  font-size: 18px;
  color: #fff;
  width: 100%;
  background: #0568c1;
  border: none;
  padding: 14px 15px;
  font-weight: 500;
  transition: 0.3s ease;
}

.btn:hover {
  transition: 0.5s ease;
  background: #272346;
  color: #fff;
}
</style>