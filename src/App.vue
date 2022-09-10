<script setup>
import NavbarVue from "./components/Navbar.vue";
import AsideVue from "./components/Aside.vue";
</script>

<template>
  <div class="col-12 d-flex" style="min-height: 100vh">
    <div class="col-2 bg-dark sidebar">
      <AsideVue />
    </div>
    <div class="col-10">
      <NavbarVue />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.sidebar {
  box-shadow: 0 0 25px 1px #444 !important;
}
</style>
