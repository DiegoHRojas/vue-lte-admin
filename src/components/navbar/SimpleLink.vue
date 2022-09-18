<template>
  <li class="nav-item">
    <router-link to="#" class="nav-link active">
      <i v-if="icon" :class="icon"></i>
      <span class="ms-1" v-if="text"> {{ text }}</span>
    </router-link>
  </li>
</template>

<script setup>
defineProps(["text", "icon"]);
</script>

<style lang="scss" scoped>
.nav-item a:hover {
  color: #1dc7ea;
}
</style>
