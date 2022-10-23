<template>
  <div class="form-container">
    <div class="main">
      <div class="content">
        <h2>Registro</h2>
        <form @submit.prevent="onSubmit()">
          <input
            class="large-input"
            v-model="form.email.content"
            type="email"
            id="email"
            name="email"
            placeholder="Correo electronico"
            required
          />
          <input
            class="large-input"
            v-model="form.password.content"
            type="password"
            id="password"
            name="password"
            size="20"
            placeholder="Contraseña"
            required
          />
          <input
            class="large-input"
            v-model="form.password2.content"
            type="password"
            id="password2"
            name="password2"
            size="20"
            placeholder="Repite Contraseña"
            required
          />
          <div class="form-check mt-4 ms-2">
            <input
              class="form-check-input"
              v-model="form.check.content"
              type="checkbox"
              value="false"
              id="flexCheckDefault"
              required
            />
            <label class="form-check-label" for="flexCheckDefault">
              Al hacer tick nos autorizas a ceder tus datos a gente y te da
              igual <a href="https://sabermas.umich.mx/">[Saber más]</a>
            </label>
          </div>
          <button class="btn" id="submit" name="submit" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../../router";
import { ref } from "vue";
import { signup } from "../../API";
import { useAuthStore } from "../../store/auth";

const authStore = useAuthStore();

// TODO: cambiar alert por modal
// TODO: Poner un tick de "Al hacer tick nos autorizas a ceder tus datos a gente y te da igual [Saber más]"

const form = ref({
  email: {
    content: "",
    error: false,
  },
  password: {
    content: "",
    error: false,
  },
  password2: {
    content: "",
    error: false,
  },
  check: {
    content: false,
    error: false,
  },
});

const onSubmit = async () => {
  if (form.value.password.content == form.value.password2.content) {
    const response = await signup(
      form.value.email.content,
      form.value.password.content
    );

    if (response.data.user.id) {
      alert("Recibirás un email para confirmar tu usuario. ¡Muchas Gracias!");
      router.push("/login");
    }
  } else {
    alert("Las contraseñas no coinciden");
  }
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

h2 {
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 5px;
  font-weight: 500px;
  color: #272346;
  text-align: center;
}

.content {
  padding: 3em 3em;
  background: #fff;
  box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

form {
  margin: 30px 0;
}

.btn,
.large-input {
  border-radius: 35px;
}

.large-input {
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

.large-input:focus {
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
  background: #272346;
  color: #fff;
  transition: 0.5s ease;
}

@media (max-width: 746px) {
  .content {
    flex-basis: 60%;
    padding: 4em 4em;
    background: #fff;
    box-shadow: 2px 9px 49px -17px rgb(0 0 0 / 10%);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .main {
    flex-direction: column;
    position: relative;
    display: flex;
    margin: 48px -38px;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
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
}
</style>
