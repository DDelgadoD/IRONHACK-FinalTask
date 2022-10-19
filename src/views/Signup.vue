<template>
    
    <div class="signup">
        <div class = "logos">    
            <img class="icono" src="../assets/icon64.png" alt="Icono App">
            <img class="logo" src="../assets/title.png" alt="¡YO CONTROLO!">
        </div>
        <div class="form-container">
            <div class="main">
                <div class="content">
                    <h2>Registro</h2>

                    <form @submit.prevent="onSubmit()">
                        <input v-model="form.email.content" type="email" id="email" name="email" placeholder="Correo electronico"  >
                        <input v-model="form.password.content" type="password" id="password" name="password" placeholder="Contraseña" >
                        <button class="btn" id="submit" name="submit" type="submit" >Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
        <p class= "holding">David Delgado International Holdings Group Company Ltd.</p>
    </div>

</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { signup } from '../API';
import { useAuthStore } from '../store/auth'

const router = useRouter();
const authStore = useAuthStore();

// TODO: comprobar si el user está logueado y mandarlo a freir monas.
// TODO: cambiar alert por modal

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
    const response = await signup(form.value.email.content, form.value.password.content);

    if(response.data.user.id){
        alert("Confirma tu email porfavor")
    }
};

</script>


<style scoped>
.signup{
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
    padding: 3em 3em;
    background: #fff;
    box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
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

.holding{
    text-align: center;
    padding: 20px;
    padding-bottom: 0;
    font-size: 16px;
    color: rgba(8, 8, 8, 0.61);
}

</style>