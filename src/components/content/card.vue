<template>
  <div class="col rounded bg-secondary p-2 d-flex gap-3 align-items-center">
    <div
      class="bg-info d-flex justify-content-center align-items-center"
      style="width: 60px; height: 60px; border-radius: 0.3rem"
    >
      <i :class="class" style="font-size: 40px"></i>
    </div>
    <div class="text-white">
      <p>{{ content }}</p>
      <span>{{ cantidad }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps(["class", "content", "cantidad"]);
</script>

<style lang="scss" scoped>
.rounded:nth-child(2) > .bg-info {
  background-color: #dc3545 !important;
}
.rounded:nth-child(3) > .bg-info {
  background-color: #198754 !important;
}
.rounded:nth-child(4) > .bg-info {
  background-color: #ffc107 !important;
}
i {
  color: #fff;
}
</style>
