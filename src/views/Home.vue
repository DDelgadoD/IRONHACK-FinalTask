<template>
  <Navbar />
  <RouterView />
  
  <Footer />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";


import { onBeforeMount} from "vue";
import { useAuthStore } from "../store/auth";
import router from "../router";

const authStore = useAuthStore();

onBeforeMount(async () => {
  if (!authStore.isAuth == true) {
    console.log("user aren't logged: ¿Dónde vas pimpim?");
    router.push("/login");
  }
});
</script>
