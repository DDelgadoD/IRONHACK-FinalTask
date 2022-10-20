<template>
    <Navbar />
    <div class="container">
        <h1>TASKS</h1>
    
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            <div v-if="loaded" v-for="task in tasks" class="col mb-4">
                <Cards :title="task.task_title" :body="task.task_content" />
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
// TODO: cambiar hover por onClick y centrar la card para que el usuario haga la edición
// TODO: cambiar delete por una cruz y accomplished por un tick
// TODO: mirar si se puede editar el orden de las cards directamente en la pantalla 
// TODO: evitar que nadie entre aquí sin permiso del rey
// TODO: Añadir un timeline con las tareas urgentes
// TODO: Implementar logOut

import Navbar from '../components/Navbar.vue';
import { ref, onBeforeMount, } from 'vue';
import { getTasks } from '../API'
import Cards from '../components/Cards.vue';
import Footer from '../components/Footer.vue';
import { useAuthStore } from '../store/auth';
import router from '../router';

const authStore = useAuthStore();

const loaded = ref(false)
const tasks = ref(false)

onBeforeMount( async() => {
    console.log("auth: ",authStore.isAuth)
    if (authStore.isAuth == true){
        tasks.value = await getTasks();
        loaded.value = true;
    }else{
        router.push("/login")
    }


});

</script>

<style scoped>
.container{
    padding: 3em 3em;
    background: #fff;
    box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin:2% auto;
}
</style>