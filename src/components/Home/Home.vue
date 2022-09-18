<template>
  <div class="m-4 row" style="margin: 0; padding: 0">
    <CardHome
      icon="fa-solid fa-chart-simple text-warning"
      icon2="fa fa-refresh"
      title="Capacity"
      cant="105 gb"
      text="Updated now"
    />
    <CardHome
      icon="fa-regular fa-lightbulb text-success"
      icon2="fa-regular fa-calendar"
      title="Revenue"
      cant="$1,345"
      text="Last day"
    />
    <CardHome
      icon="fa-solid fa-bezier-curve text-danger"
      icon2="fa-regular fa-clock"
      title="Errors"
      cant="32"
      text="Last day"
    />
    <CardHome
      icon="fa-regular fa-heart text-info"
      icon2="fa fa-refresh"
      title="Followers"
      cant="+45"
      text="Updated now"
    />
  </div>
</template>

<script setup>
import CardHome from "./CardHome.vue";
</script>

<style lang="scss" scoped></style>
