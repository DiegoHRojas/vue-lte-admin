<template>
  <li>
    <router-link :to="route">
      <i :class="icon"></i>
      <span> {{ text }} </span>
    </router-link>
  </li>
</template>

<script setup>
import { useRoute } from "vue-router";
const router = useRoute();

defineProps(["route", "text", "icon"]);
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  background-color: #5a5a5b;
}

li:hover .router-link-active.router-link-exact-active {
  background-color: #5a5a5b;
}
</style>
