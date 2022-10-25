<template>
  <div class="form-container">
    <div class="main">
      <div class="content">
        <h2>Inicio de Sesión</h2>

        <form @submit.prevent="onSubmit()">
          <input
            v-model="form.email.content"
            type="email"
            id="email"
            name="email"
            placeholder="Correo electronico"
          />
          <input
            v-model="form.password.content"
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
          />

          <button class="btn" id="submit" name="submit" type="submit">
            Iniciar sesion
          </button>
        </form>

        <p class="tip">¿No tienes tu cuenta? ¡Crea una!</p>
        <a class="tip-link" href="/signup">Registrarse</a>
        <p class="tip">¿Te olvidaste tu contraseña?</p>
        <a class="tip-link" href="">Recuperar</a>
      </div>
      <div class="form-img">
        <img src="../../assets/auths/flying.png" alt="Flying!" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { conecta } from "../../APIStore";

const router = useRouter();

// TODO: Crear función que envie un mensaje de recuperación de contraseña y abrir un modal al
//       clickar en recuperar contraseña que indique que se ha enviado un correo.

const form = ref({
  email: {
    content: "",
    error: false,
  },
  password: {
    content: "",
    error: false,
  },
});

const onSubmit = async () => {
  const ret = await conecta(form);
  ret ? console.log(ret) : router.push("/");
};
</script>

<style scoped>
.form-container {
  max-width: 800px;
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

h2 {
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 5px;
  font-weight: 500px;
  color: #272346;
  text-align: center;
}

form {
  margin: 30px 0;
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

.tip,
.tip-link {
  color: #666;
  font-size: 16px;
  line-height: 18px;
  opacity: 0.5;
  text-align: center;
  padding-bottom: 0;
  margin-bottom: 0;
}

.tip-link {
  text-decoration: none;
  color: #0568c1;
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
}

.tip-link:hover {
  text-decoration: underline;
}

.btn,
input {
  border-radius: 35px;
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

.btn {
  margin: 25px 0;
  font-size: 18px;
  color: #fff;
  width: 100%;
  background: #0568c1;
  border: none;
  padding: 14px 15px;
  font-weight: 500;
  transition: 0.3s ease;
}

.btn:hover {
  transition: 0.5s ease;
  background: #272346;
  color: #fff;
}

@media (max-width: 746px) {
  .main {
    flex-direction: column;
    position: relative;
    display: flex;
    margin: 48px -38px;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
  }

  .content {
    flex-basis: 60%;
    padding: 4em 4em;
    background: #fff;
    box-shadow: 2px 9px 49px -17px rgb(0 0 0 / 10%);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  form {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .content {
    order: 1;
    border-radius: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .btn {
    margin: 25px 0;
  }

  .form-img {
    border-radius: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    order: 2;
    flex-basis: 50%;
    background: #ffffff;
    background-size: cover;
    padding: 40px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    align-items: center;
    display: none;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
  }

  .tip,
  .tip-link {
    color: #666;
    font-size: 16px;
    line-height: 19px;
    opacity: 0.5;
    text-align: center;
  }
}
</style>
