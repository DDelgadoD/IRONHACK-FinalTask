<template>
    
    <div class="background login">
        <div class = "logos">    
            <img class="icono" src="../assets/icon64.png" alt="Icono App">
            <img class="logo" src="../assets/title.png" alt="¡YO CONTROLO!">
        </div>
        <div class="form-container">
            <div class="main">
                <div class="content">
                    <h2>Inicio de Sesión</h2>

                    <form @submit.prevent="onSubmit()">
                        <input v-model="form.email.content" type="email" id="email" name="email" placeholder="Correo electronico"  >
                        <input v-model="form.password.content" type="password" id="password" name="password" placeholder="Contraseña" >

                        <button class="btn" id="submit" name="submit" type="submit" >Iniciar sesion</button>
                    </form>

                    <p class="account">¿No tienes tu cuenta? ¡Crea una! <a href="">Registrar</a></p>
                    <p class="account">¿Te olvidaste tu contraseña? <a href="">Recuperar</a></p>
                </div>
                <div class="form-img">
                    <img src="../assets/flying.png" alt="Flying!">
                </div>
            </div>
        </div>
        <p class= "account">David Delgado International Holdings Group Company Ltd.</p>
    </div>

</template>
<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth'
import { ref } from 'vue';

import { createClient } from '@supabase/supabase-js';
import { login } from '../API';

const router = useRouter();
const authStore = useAuthStore();

const form = ref({
    email: {
        content: '',
        error: false
    },
    password: {
        content: '',
        error: false
    }
})

const onSubmit = async() => { 
    const id = await login(form.value.email.content, form.value.password.content)

    authStore.login(id);
    router.push("/")

}
</script>


<style scoped>

.login{
    padding: 40px;
    justify-content: center;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    align-items: center;
    min-height: 100vh;
}

.logos {
    display: flex;
    justify-content: center;  
    align-items: center;
    padding: 0 10%;
}

.logo {
    width: 70%;
}

.icono{
   width: 64px; 
   height: 64px;
}

.form-container {
    max-width: 800px;
}

h2 {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 5px;
    font-weight: 500px;
    color: #272346;
    text-align: center;
}

.main {
    position: relative;
    display: flex;
    margin: 30px 0;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
}


.content {
    flex-basis: 50%;
    padding: 3em 3em;
    background: #fff;
    box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
.form-img {
    flex-basis: 50%;
    background: #ffffff;
    background-size: cover;
    padding: 40px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    align-items: center;
    display: grid;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
}
.form-img img {
    max-width: 100%;
}

.account {
    color: #666;
    font-size: 16px;
    line-height: 18px;
    opacity: 0.5;
    text-align: center;
}
.btn,
button,
input {
    border-radius: 35px;
}

.btn:hover,
button:hover {
    transition: 0.5s ease;
}

a {
    text-decoration: none;
}

form {
    margin: 30px 0;
}

input {
    outline: none;
    margin-bottom: 10px;
    font-stretch: 19px;
    color: #999;
    text-align: left;
    padding: 14px 20px;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    background: #f7fafc;
    transition: 0.3s ease;
}
input:focus {
    background: transparent;
    border: 1px solid #0568c1;
}
button.btn {
    margin: 25px 0;
}

button {
    font-size: 18px;
    color: #fff;
    width: 100%;
    background: #0568c1;
    border: none;
    padding: 14px 15px;
    font-weight: 500;
    transition: 0.3s ease;
}

button:hover {
    background: #272346;

    color: #fff;
}

p.acount,
p.account a {
    text-align: center;
    padding: 20px;
    padding-bottom: 0;
    font-size: 16px;
    color: rgb(215, 212, 212);
}
p.account a {
    color: #0568c1;
}

p.account a:hover {
    text-decoration: underline;
}


</style>