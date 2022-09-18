<template>
  <div class="border m-4 p-3 rounded bg-white">
    <div>
      <h2 class="fs-4 text-dark fw-lighter">Striped Table with Hover</h2>
      <p class="fs-6 text-muted fw-light">Here is a subtitle for this table</p>
    </div>
    <hr />
    <table class="table table-hover" :class="class">
      <HeadVue />
      <TbodyVue />
    </table>
  </div>
</template>

<script setup>
import HeadVue from "./Head.vue";
import TbodyVue from "./Tbody.vue";

/* ============  */
defineProps(["class"]);
</script>

<style lang="scss" scoped></style>
