<template>
     <RouterView />
</template>
    
<script setup>
import { useAuthStore } from './store/auth';
const authStore = useAuthStore();
console.log("auth: ",authStore.isAuth)
console.log(import.meta.env.BASE_URL)
</script>
    