<template>
    <div class="card">
        <div class="card-content">
            <div class="card-title">{{props.title}}</div>
            <div>{{props.body}}</div>
            
            <div class="btns">
                <button class="btn btn-success me-2 my-2">Accomplished</button>
                <button class="btn btn-warning me-2 my-2">Edit</button>
                <button class="btn btn-danger me-2 my-2">Delete</button>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    title: String,
    body: String
});

</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    height: 100%; 
}


.card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 5%;
    width: 90%;
    
}

.card-title {
    font-weight: bold;
    font-size: 1.2rem;
    color:white;
    background-color: brown;
    width: 100%;
}

</style>