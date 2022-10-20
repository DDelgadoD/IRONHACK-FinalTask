<template>
    <div class="card-container d-flex">
    <div class="card">
        <div class="card-content">
            <div class="card-title">{{props.title}}</div>
            <div>{{props.body}}</div>

            <div class="d-flex justify-content-end w-100">
                <div @click="$emit('edit-modal')">
                    <img class="ok-edit-img" src="../assets/editar.svg" alt="" />
                </div>
                <div @click="$emit('ok-modal')">
                    <img class="ok-edit-img" src="../assets/completo.svg" alt="" />
                </div>

            </div>
        </div>
    </div>
        <div class="close" @click="$emit('close-modal')">
                <img class="close-img" src="../assets/cerrar.svg" alt="" />
        </div>
    </div>
</template>

<script setup>

//TODO: crear una nueva vista que haga que el titulo y el contenido se pueda editar

import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    body: String
});

</script>

<style scoped>

.card-container{
    justify-content: center;
    
}

.card-container:hover{
    box-shadow:
        0 0 10px 5px #e0cb48,
        0 0 12px 6px #f6eaf2,
        0 0 15px 12px #e2d92b,
        0 0 20px 15px #ff145c;
    transition: box-shadow 0.5s linear;
}

.card {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.card-content {
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
    color: white;
    background-color: rgba(20, 87, 92, 0.5);
    width: 100%;
}

.close {
    position:relative;
    margin: -12px -12px 0%;
    cursor: pointer;
   
}

.close-img {
    width: 25px;
}

.ok-edit-img {
    width: 50px;
    cursor: pointer;
   
}


</style>