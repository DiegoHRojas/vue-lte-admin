<script setup>
import sidebarVue from "./components/sidebar/sidebar.vue";
import NavabarVue from "./components/navbar/Navabar.vue";
import Config from "./components/setting/Config.vue";
import Footer from "./components/Footer/Footer.vue";
/*============= bg-color ============== */

import { ref, provide } from "vue";

const bgSidebar = ref("#474747");

provide("bgSidebar", bgSidebar);
</script>

<template>
  <div class="wrapper">
    <div class="row" style="padding: 0; margin: 0">
      <sidebarVue />
      <div class="col p-0 bg-light">
        <NavabarVue />
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
  <Config />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.col-3 {
  padding: 0;
  margin: 0;
  background-color: #2a2a2a;
  min-height: 100vh;
}

.divider {
  margin: 0 0.5rem;
  padding: 0;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #5a5a5b;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background-color: #efefef;
  border-radius: 0.5rem;
}
</style>
