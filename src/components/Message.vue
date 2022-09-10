<script setup>
defineProps(["data"]);
</script>

<template>
  <div class="message">
    <div class="card-text d-flex gap-3">
      <div class="img">
        <img :src="data.avatar" :alt="data.name" />
      </div>
      <div>
        <h5 class="title text-muted">
          {{ data.name }}
          <span>
            <i class="fa-solid fa-star"></i>
          </span>
        </h5>
        <p>Call me whenever you can...</p>
        <p><i class="fa-regular fa-clock"></i> 4 Hours Ago</p>
      </div>
    </div>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 0.9rem;
}
p {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
}
.fa-solid {
  color: red;
}
.message:last-child .title .fa-solid {
  color: yellow;
}
.message:nth-child(2) .title .fa-solid {
  color: #555;
}
.message:hover {
  background-color: #f8f9fa;
}
</style>
