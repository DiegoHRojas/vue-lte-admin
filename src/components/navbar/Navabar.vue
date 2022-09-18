<template>
  <nav
    class="navbar navbar-expand-lg navbar-light border-bottom"
    style="background-color: #fff"
  >
    <div class="container-fluid">
      <a class="navbar-brand text-muted" href="#">Dashboard</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <SimpleLinkVue icon="fa-solid fa-circle-half-stroke" />
          <DropdownVue icon="fa-regular fa-bell" bell="1" />
          <SimpleLinkVue icon="fa-solid fa-magnifying-glass" text="search" />
        </ul>

        <div d-flex>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <SimpleLinkVue text="Account" />
            <DropdownVue text="Dropdown" />
            <SimpleLinkVue text="Log out" />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import DropdownVue from "./Dropdown.vue";
import SimpleLinkVue from "./SimpleLink.vue";
</script>

<style lang="scss" scoped></style>
