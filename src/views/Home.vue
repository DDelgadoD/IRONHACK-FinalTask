<template>
    <Navbar />
    <div class="container">
        <h1>Home</h1>
    
        <div class="row row-cols-12 row-cols-md-6 row-cols-lg-4">
            <div v-if="loaded" v-for="task in tasks" class="col mb-4">
                <Cards :title="task.task_title" :body="task.task_content" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { ref, onMounted } from 'vue';
import { getTasks } from '../API'
import Cards from '../components/Cards.vue';

const loaded = ref(false)
const tasks = ref(false)

onMounted( async() => {
    tasks.value = await getTasks();
    loaded.value = true;

})


</script>
<style scoped>
</style>