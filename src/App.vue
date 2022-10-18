<template>
<Navbar />
<RouterView />
</template>
    
<script setup>
import Navbar from './components/Navbar.vue';
console.log(import.meta.env.BASE_URL)
</script>
    