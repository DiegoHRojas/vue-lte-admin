<template>
  <div class="setting bg-secondary rounded-start">
    <i class="fa-solid fa-gear" @click="toogleConfig"></i>
    <ModalVue v-if="showConfig" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ModalVue from "./Modal.vue";

const initialValue = ref(false);
const toogleConfig = () => {
  initialValue.value = !initialValue.value;
};
const showConfig = computed(() => initialValue.value);
</script>

<style lang="scss" scoped>
.setting {
  position: fixed;
  right: 0;
  top: 10%;
  z-index: 100;
  width: 60px;
  height: 60px;
  color: #fff;
  font-size: 2rem;
}

.setting i {
  display: block;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.setting:hover {
  cursor: pointer;
}
</style>
