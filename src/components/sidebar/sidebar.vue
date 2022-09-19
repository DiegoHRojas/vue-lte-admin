<template>
  <div class="col-2 content_sidebar">
    <aside class="col-2 sidebar" :style="bgSidebar">
      <LogoVue />
      <ul class="nav">
        <LinkVue
          v-for="list in lista"
          :route="`/admin/${list.path}`"
          :text="list.title"
          :icon="list.icons"
          :key="list.title"
        />
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
import LinkVue from "./Link.vue";
import lista from "./lista";
import LogoVue from "./Logo.vue";

const colorBg = inject("bgSidebar");
const bgSidebar = computed(() => ({ backgroundColor: colorBg.value }));
</script>

<style lang="scss">
.content_sidebar {
  padding: 0;
  height: 100vh;
}

.sidebar {
  position: fixed;
  height: 100%;

  left: 0;
  top: 0;
  overflow: auto;
}

.nav {
  padding: 0;
  margin: 0;
  box-sizing: border-box !important;
  width: 100%;
  margin-top: 1rem;
}

.nav li {
  width: 100%;
  display: list-item;
  text-align: -webkit-match-parent;
}

.nav li:hover a {
  background-color: #525252;
}

.nav li a {
  text-decoration: none;
  color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 5px 10px;
  display: flex;
  align-items: center;
}

.nav li a i {
  font-size: 20px;
  margin-right: 5px;
  width: 30px;
  text-align: center;
  vertical-align: middle;
  float: left;
}

.logo-img {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.5rem;
  align-items: center;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nav li a span {
  margin-left: 0.5rem;
  line-height: 32px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-flex;
}

.logo {
  margin: 0;
  padding: 0;
}

.logo a {
  padding: 5px 0;
  display: inline-flex;
  gap: 0.5 rem;
  align-items: center;
  margin: 5px 15px;
  color: #fff;
  text-decoration: none;
}

.logo a:hover {
  color: #fff;
}

.logo a span {
  margin-left: 0.5rem;
  line-height: 32px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-flex;
}
</style>
