<template>
  <div class="login">
    <div class="logos">
      <img class="icono" src="../assets/auths/icon64.png" alt="Icono App" />
      <img class="logo" src="../assets/auths/title.png" alt="¡YO CONTROLO!" />
    </div>
    <RouterView />
    <p class="holding">
      David Delgado International Holdings Group Company Ltd.
    </p>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useAuthStore } from "../store/auth";
import router from "../router";

const authStore = useAuthStore();

onBeforeMount(async () => {
  console.log("auth: ", authStore.isAuth);
  if (authStore.isAuth == true) {
    console.log(
      "user is logged: ¿Qué pretendes hacer pseudo-hacker abrazafarolas?"
    );
    router.push("/");
  }
});
</script>

<style scoped>
.login {
  padding: 40px;
  justify-content: center;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  align-items: center;
  min-height: 100vh;
}

.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
}

.logo {
  width: 70%;
}

.icono {
  width: 64px;
  height: 64px;
}

.holding {
  text-align: center;
  padding: 20px;
  padding-bottom: 0;
  font-size: 16px;
  color: rgba(8, 8, 8, 0.61);
}
</style>
