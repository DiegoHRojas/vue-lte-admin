<template>
  <div class="modal-config card p-2 pt-3">
    <h2 class="text-dark text-center fs-6 fw-bolder text-uppercase">Filters</h2>
    <div class="content_colors">
      <div class="color" @click="changeBgSidebar('rgb(231, 4, 91)')"></div>
      <div class="color" @click="changeBgSidebar('rgb(8, 76, 131)')"></div>
      <div class="color" @click="changeBgSidebar('rgb(99, 0, 82)')"></div>
      <div class="color" @click="changeBgSidebar('rgb(10, 190, 64)')"></div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const bgSidebar = inject("bgSidebar");

const changeBgSidebar = (value) => {
  bgSidebar.value = value;
};
</script>

<style lang="scss" scoped>
.modal-config {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-105%);
  width: 250px;
}

.color {
  height: 18px;
  width: 18px;
  border-radius: 50%;
}

.content_colors {
  display: flex;
  justify-content: space-evenly;
}
.content_colors .color:nth-child(1) {
  background-color: rgb(231, 4, 91);
}

.content_colors .color:nth-child(2) {
  background-color: rgb(8, 76, 131);
}

.content_colors .color:nth-child(3) {
  background-color: rgb(99, 0, 82);
}
.content_colors .color:nth-child(4) {
  background-color: rgb(10, 190, 64);
}
</style>
