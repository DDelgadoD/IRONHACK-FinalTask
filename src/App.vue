<template>
<Navbar />
<RouterView />
</template>
    
<script setup>
import Navbar from './components/Navbar.vue';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

console.log(import.meta.env.BASE_URL)
</script>
    