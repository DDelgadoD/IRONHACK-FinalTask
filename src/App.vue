<template>
    <RouterView />
</template>
    
<script setup>
import { ref, onMounted } from 'vue';
import { getTasks, } from './API';
import { useAuthStore } from './store/auth';
import { useRouter } from 'vue-router';

const loaded = ref(false)
const tasks = ref(false)
const authStore = useAuthStore();
const router = useRouter();

onMounted( async() => {
    if(authStore.isAuth){
        tasks.value = await getTasks();
        loaded.value = true;
    }else{
        router.push("/login");
    }
});
</script>
    