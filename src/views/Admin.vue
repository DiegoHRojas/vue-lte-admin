<template>
  <div class="col my-3 main">
    <HomeVue v-if="pageView() === 'home'" />
    <div v-if="pageView() === 'list'">
      <TableVue class="table-striped" />
      <TableVue />
    </div>
    <Profile v-if="pageView() === 'user'" />
  </div>
</template>

<script setup>
import HomeVue from "./../components/Home/Home.vue";
import TableVue from "../components/tables/Table.vue";
import Profile from "../components/Profile/Profile.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const pageView = () => {
  return route.params.view;
};
</script>

<style lang="scss">
.main {
  min-height: 100vh;
}
</style>
