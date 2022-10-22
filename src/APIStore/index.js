import { useTaskStore } from "../store/task";
import { useAuthStore } from "../store/auth";
import {
  login,
  logout,
  deleteTask,
  getTasks,
  discardTask,
  completeTask,
} from "../API";

const taskStore = useTaskStore();
const authStore = useAuthStore();

// Conexión y creación de usuario
export const conecta = async (form) => {
  const response = await login(
    form.value.email.content,
    form.value.password.content
  );
  if (response.error == null) {
    authStore.login(response.data.user.id);
  }

  return response.error;
};

// Desconexión y borrado de usuario y tareas
export const desconecta = async () => {
  let ret = "logued out";
  const response = await logout();

  if (response.error == null) {
    taskStore.deleteTasks();
    authStore.logout();
  } else {
    ret = response.error;
  }
  return ret;
};

// Inicializción de tarea en local o en supabase según toque
export const initTasks = async () => {
  let tasks;

  if (taskStore.loaded == false) {
    tasks = await getTasks();
    taskStore.init(tasks);
    console.log("from supa: ");
  } else {
    tasks = taskStore.getTasks();
    console.log("from local: ");
  }
  console.log(tasks);
  return tasks;
};

// Inicializción de tarea en local o en supabase según toque
export const delTasks = async (id) => {
  const response = await deleteTask(id);
  if (response.error == null) {
    taskStore.deleteTask(id);
  }
  return response.error;
};

export const discTask = async (id) => {
  const response = await discardTask(id);
  if (response.error == null) {
    taskStore.discardTask(id);
  }
  return response.error;
};

export const compTask = async (id) => {
  const response = await completeTask(id);
  if (response.error == null) {
    taskStore.completeTask(id);
  }
  return response.error;
};

export const disc = () => {
  taskStore.disc();
};

export const comp = () => {
  taskStore.comp();
};
