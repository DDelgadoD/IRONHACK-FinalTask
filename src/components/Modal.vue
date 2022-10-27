<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="mymodal" @click.stop>
        <div v-if="props.useForm">
          <h2>{{ props.content.text }}</h2>
          <form
            :form="form"
            @:submit.prevent="
              createOrEdit(props.content.taskId, props.content.edit)
            "
          >
            <div class="form-group">
              <label for="title">Título</label>
              <input
                v-if="props.content.edit"
                :value="props.content.task.title"
                @input="(event) => (form.title.content = event.target.value)"
                id="title"
                class="form-control"
                type="text"
                required
              />
              <input
                v-else
                v-model="form.title.content"
                id="title"
                class="form-control"
                type="text"
                required
              />

              <label for="content">Contenido</label>
              <textarea
                v-if="props.content.edit"
                :value="props.content.task.content"
                @input="(event) => (form.content.content = event.target.value)"
                class="form-control"
                id="content"
                rows="3"
                required
              />
              <textarea
                v-else
                v-model="form.content.content"
                class="form-control"
                id="content"
                rows="3"
                required
              />

              <label for="datetime">Fecha Límite</label>
              <input
                v-if="props.content.edit"
                :value="props.content.task.max_time"
                @input="(event) => (form.max_time.content = event.target.value)"
                class="form-control"
                id="datetime"
                type="datetime-local"
              />
              <input
                v-else
                v-model="form.max_time.content"
                class="form-control"
                id="datetime"
                type="datetime-local"
              />

              <button class="btn btn-plus">Enviar</button>
            </div>
          </form>
        </div>
        <div v-else>
          <p>{{ props.content.text }}</p>
          <div v-if="confirmDelete">
            <button
              class="btn btn-primary px-4 mx-3"
              @click="$emit('close-modal')"
            >
              No
            </button>
            <button
              class="btn btn-danger px-4 mx-3"
              @click="
                $emit(
                  'delete-modal',
                  props.content.taskId,
                  props.content.taskTitle
                )
              "
            >
              Si
            </button>
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
import { addTask, editTask } from "../APIStore";
import { useAuthStore } from "../store/auth";

const authStore = useAuthStore();

const form = ref({
  title: {
    content: "",
    error: false,
  },
  content: {
    content: "",
    error: false,
  },
  max_time: {
    content: "",
    error: false,
  },
});

const emit = defineEmits(["close-modal"]);
const props = defineProps({
  content: Object,
  useForm: Boolean,
  confirmDelete: Boolean,
});

const formReset = () => {
  form.value.title.content = "";
  form.value.content.content = "";
  form.value.max_time.content = "";
};

const createOrEdit = async (taskId, edit) => {
  const task = {
    user_id: authStore.getUser(),
    title: form.value.title.content,
    content: form.value.content.content,
    discarded: false,
    created_at: null,
    completed: false,
  };
  if (form.value.max_time.content.length > 0)
    task.max_time = form.value.max_time.content;

  if (edit) {
    if (!form.value.title.content) task.title = props.content.task.title;
    if (!form.value.content.content) task.content = props.content.task.content;
    if (!form.value.max_time.content)
      task.max_time = props.content.task.max_time;
    task.id = taskId;
    await editTask(task);
  } else {
    await addTask(task);
  }

  emit("close-modal");
  formReset();
};
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

.btn-plus {
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

.btn-plus:hover {
  transition: 0.5s ease;
  background: #272346;
  color: #fff;
}
</style>
