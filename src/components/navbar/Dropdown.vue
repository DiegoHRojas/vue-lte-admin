<template>
  <li class="nav-item dropdown position-relative">
    <router-link
      to="#"
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span v-if="bell" class="circle bg-danger">9</span>
      <span v-if="text">{{ text }}</span>
      <i v-if="icon" :class="icon"></i>
    </router-link>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </li>
</template>

<script setup>
defineProps(["text", "icon", "bell"]);
</script>

<style lang="scss" scoped>
.nav-item a:hover {
  color: #1dc7ea;
}

.circle {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  position: absolute;
  right: 20%;
  top: -8%;
  color: #fff;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 900;
}
</style>
