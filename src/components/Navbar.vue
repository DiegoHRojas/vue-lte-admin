<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <IconsVue icon="fa-solid fa-bars" />
        <li class="nav-item d-none d-sm-inline-block">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="" class="nav-link">Contact</a>
        </li>
      </ul>
    </div>

    <ul class="navbar-nav ml-auto">
      <IconsVue icon="fa-solid fa-magnifying-glass" />
      <IconsVue icon="fa-sharp fa-solid fa-comments" message="mess" count="5" />
      <IconsVue icon="fa-sharp fa-solid fa-bell" message="bell" count="10" />
      <IconsVue icon="fa-solid fa-maximize" />
    </ul>
  </nav>
</template>

<script setup>
import IconsVue from "./Icons.vue";
</script>

<style lang="scss" scoped>
.card {
  position: absolute;
  bottom: -100%;
}

nav {
  position: relative;
}
</style>
