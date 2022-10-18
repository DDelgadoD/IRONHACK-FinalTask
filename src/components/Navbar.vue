<template>
   <nav class="navbar navbar-expand-lg navbar-light background">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img class="icono" src="../assets/icon64.png" alt="Icono App">
        <img class="logo" src="../assets/title.png" alt="¡YO CONTROLO!">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-danger" to="/">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.logo {
    width: 256px;
}

.icono{
   width: 32px; 
   height: 32px;
}
</style>