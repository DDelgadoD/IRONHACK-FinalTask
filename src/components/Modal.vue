<template>
    <transition name="modal-fade">
      <div class="modal-overlay">
        <div class="mymodal" @click.stop>
          <img class="check" src="" alt="" />
          <h6>No more contacts</h6>
          <p>You have added all the contacts</p>
        </div>
        <div class="close" @click="$emit('close-modal')">
          <img class="close-img" src="../assets/cerrar.svg" alt="" />
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>

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
    height: 450px;
    width: 450px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
  }
  
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }
  
  .close-img {
    width: 25px;
  }
  
  p {
    font-size: 16px;
    margin: 20px 0;
  }
  
 
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }
  
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  </style>