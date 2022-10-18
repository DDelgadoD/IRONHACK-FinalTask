<template>
    <RouterView />
</template>
    
<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';
import { getTasks, } from './API'

const loaded = ref(false)
const tasks = ref(false)

onMounted( async() => {
    tasks.value = await getTasks();
    loaded.value = true;

});
</script>
    