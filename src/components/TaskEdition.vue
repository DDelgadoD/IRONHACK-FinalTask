<template>
    <form>
        <div class="form-group">
            <label for="title">Título</label>

            <input id="title" class="form-control" type="text" placeholder="Título" required/>

            <label for="content">Contenido</label>

            <textarea class="form-control" id="content" rows="3" required />
            
            <label for="datetime">Fecha Límite</label>
            <input class="form-control" id="datetime" type="datetime-local">

            <button class="btn" id="submit" name="submit" type="submit">
            Enviar
          </button>
        </div>
    </form>
</template>
<script setup>
</script>
<style scoped>
form {
  margin: 0 10%;
}

input, textarea {
  border-radius: 35px;
  outline: none;
  margin-bottom: 10px;
  font-stretch: 19px;
  color: #999;
  text-align: left;
  padding: 3%;
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


</style>