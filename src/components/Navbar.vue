<template v-if="loaded">
  <nav class="navbar navbar-expand-lg navbar-light background">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img class="icono" src="../assets/navbar/icon64.png" alt="Icono App" />
        <img class="logo" src="../assets/navbar/title.png" alt="ControlAPP" />
      </a>

      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-collapse justify-content-between mx-auto mx-lg-5"
        :class="isOpen"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item border-top-sm to-the-rigt-sm">
            <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'home' }"
            >
              <img class="icono" src="../assets/navbar/hogar.png" /> Home
            </router-link>
          </li>
          <li class="nav-item border-top-sm to-the-rigt-sm">
            <router-link class="nav-link" aria-current="page" to="/trash">
              <img
                v-if="taskStore.discarded == true"
                class="icono"
                src="../assets/navbar/papelera-color.png"
              />
              <img v-else class="icono" src="../assets/navbar/papelera.png" />
              Papelera
            </router-link>
          </li>
          <li class="nav-item border-top-sm to-the-rigt-sm">
            <router-link class="nav-link" aria-current="page" to="/completed">
              <img
                v-if="taskStore.completed == true"
                class="icono"
                src="../assets/navbar/objetivo-color.png"
              />
              <img v-else class="icono" src="../assets/navbar/objetivo.png" />
              Completos
            </router-link>
          </li>
          <li class="nav-item border-top-sm to-the-rigt-sm">
            <router-link class="nav-link" aria-current="page" to="">
              <img class="icono" src="../assets/navbar/ajuste.png" />
              Configuración
            </router-link>
          </li>
        </ul>
        <div class="border-top-sm to-the-rigt-sm">
          <button class="btn btn-danger mt-2 pt-l-0" @click="bye()">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { desconecta } from "../APIStore";
import { useTaskStore } from "../store/task";
import router from "../router";
import { initTasks } from "../APIStore";

const taskStore = useTaskStore();
const loaded = ref(false);

const isOpen = ref("collapse");

const toggleMenu = () => {
  if (isOpen.value == "collapse") {
    isOpen.value = "collapse.show";
  } else {
    isOpen.value = "collapse";
  }
};

const bye = async () => {
  const ret = await desconecta();
  router.push("/login");
};

const loader = async () => {
  console.log("loading...");
  await initTasks();
  loaded.value = true;
};

onBeforeMount(async () => {
  await loader();
});

watch(taskStore.tasks, (newValue) => {
  console.log("watch");
  loader();
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

@media only screen and (max-width: 992px) {
  .border-top-sm {
    border-top: 1px solid white;
  }

  .to-the-rigt-sm {
    text-align: center;
  }
}
</style>
