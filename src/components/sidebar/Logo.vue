<template>
  <div class="logo">
    <router-link to="/admin/home">
      <div class="logo-img">
        <img :src="vueLogo" alt="" />
      </div>
      <span style="vertical-align: inherit">
        <span style="vertical-align: inherit"> LBD view </span>
      </span>
    </router-link>
  </div>
  <hr class="divider" />
</template>

<script setup>
import vueLogo from "./../../assets/vue.svg";
</script>

<style lang="scss" scoped>
a {
  background-color: transparent !important;
}
</style>
