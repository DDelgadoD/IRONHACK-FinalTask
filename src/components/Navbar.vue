<template v-if="loaded">
  <nav  class="navbar navbar-expand-lg navbar-light background">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img class="icono" src="../assets/icon64.png" alt="Icono App" />
        <img class="logo" src="../assets/title.png" alt="ControlAPP" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between mx-5" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">
              <img class="icono" src="../assets/hogar.png" /> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/trash">
              <img  v-if="discarded == true" class="icono" src="../assets/papelera-color.png" />
              <img v-else class="icono" src="../assets/papelera.png" />
              Papelera
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/completed">
              <img v-if="completed == true" class="icono" src="../assets/objetivo-color.png" />
              <img v-else class="icono" src="../assets/objetivo.png" />
              Completos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="">
              <img class="icono" src="../assets/ajuste.png" /> Configuración
            </router-link>
          </li>
        </ul>
        <div>
          <button class="btn btn-danger" @click="bye()">Logout</button>
        </div>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { desconecta } from "../APIStore";
import { useTaskStore } from "../store/task";
import router from "../router";
import { initTasks, disc, comp } from "../APIStore";

const taskStore = useTaskStore();
const discarded = ref(undefined);
const completed = ref(undefined);
const tasks = ref(undefined);
const loaded = ref(false);
const tasksF = ref({ discarded: [], completed: [], active: [] });

const bye = async () => {
  const ret = await desconecta();
  router.push("/login");
};

onBeforeMount(async () => {
  tasks.value = await initTasks();
  
  tasks.value.map((t) =>
    t.discarded
      ? tasksF.value.discarded.push(t)
      : t.completed
        ? tasksF.value.completed.push(t)
        : tasksF.value.active.push(t)
  );

  if (tasksF.value.discarded.length > 0) disc();
  if (tasksF.value.completed.length > 0) comp();
  discarded.value = taskStore.discarded;
  completed.value = taskStore.completed;

  loaded.value = true;
});
</script>

<style scoped>
nav {
  background-image: var(--day-bg);
}

.logo {
  width: 256px;
}

.icono {
  width: 32px;
  height: 32px;
}

@media (max-width: 400px) {
  .logo {
    width: 150px;
  }

  .icono {
    width: 24px;
    height: 24px;
  }
}
</style>
