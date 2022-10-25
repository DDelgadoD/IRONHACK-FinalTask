<template>
    <transition name="modal-fade">
      <div class="modal-overlay">
        <div class="mymodal" @click.stop>
          <h2> {{content.text}} </h2>
          <div v-show="true">
          <TaskEdition />
          </div>
        </div>
        <div class="close" @click="$emit('close-modal')">
          <img class="close-img" src="../assets/cerrar.svg" alt="" />
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
import { defineProps} from "vue";
import TaskEdition from './TaskEdition.vue'

const props = defineProps({
  content: Object
});

  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  
  .mymodal {
    text-align: center;
    background-color: white;
    min-width: 30%;
    height: fit-content;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
    overflow:hidden
    }
  
  .close {
    margin: 11% 0 0 -50px;
    cursor: pointer;
  }
  
  .close-img {
    width: 25px;
  }
  
  p {
    font-size: 16px;
    margin: 20px 0;
  }
  

  </style>