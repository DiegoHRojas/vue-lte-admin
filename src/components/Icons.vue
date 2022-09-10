<script setup>
import MessageVue from "./Message.vue";
import { computed, ref, watch } from "vue";

defineProps(["icon", "message", "count"]);
const dataState = ref(false);
const bellState = ref(false);
const changeState = (e) => {
  if (e.target.className === "fa-sharp fa-solid fa-comments") {
    dataState.value = !dataState.value;
  }
  if (e.target.className === "fa-sharp fa-solid fa-bell") {
    bellState.value = !bellState.value;
  }
};

const datas = [
  {
    name: "Brad diesel",
    message: "call me whenever you can...",
    time: "4 Hours Ago",
    avatar: "https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg",
  },
  {
    name: "John Pierce",
    message: "I got your message bro",
    time: "4 Hours Ago ",
    avatar: "https://adminlte.io/themes/v3/dist/img/user8-128x128.jpg",
  },
  {
    name: "Nora Silvester",
    message: "the subject goes here",
    time: "4 Hours Ago",
    avatar: "https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg",
  },
];
</script>

<template>
  <li class="nav-item d-none d-sm-inline-block" @click="changeState">
    <a class="nav-link" :class="message" href="#">
      <i :class="icon"></i>
      <span class="d-flex justify-content-center align-items-center all">
        <b class="count">{{ count < 10 ? count : "9+" }}</b>
      </span>
      <div v-if="message" class="content_card">
        <div class="card" v-if="dataState">
          <div class="card-body">
            <MessageVue v-for="data in datas" :key="data.nombre" :data="data" />
          </div>
          <div class="text-center">
            <a href="text-center allmessage">See All Messages</a>
          </div>
        </div>
        <div class="card" v-if="bellState">
          <span class="text-center p-2">15 notifications</span>

          <li class="text-center p-2">
            <i class="fa-solid fa-envelope"></i> 4 new messages
            <span> 3 mins</span>
          </li>
          <li class="text-center p-2">
            <i class="fa-solid fa-user-group"></i> 6 friend request
            <span> 12 hours</span>
          </li>
          <li class="text-center p-2">
            <i class="fa-solid fa-user-group"></i> 5 new reports
            <span> 3 days</span>
          </li>
          <div class="text-center">
            <a href="text-center allmessage">See All notifications</a>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<style>
.content_card {
  position: absolute;
  width: 300px;
  right: 0;
  top: 50%;
  padding: 0.5rem;
}
.img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
li {
  position: relative;
}
.card .text-center a {
  text-decoration: none !important;
  color: #555 !important;
  padding-bottom: 1rem;
}

.text-center {
  margin-bottom: 1rem;
}
.text-center:hover {
  background-color: #f8f9fa;
}
.count {
  font-size: 0.54rem;
  color: #fff;
  font-weight: 900;
}
.mess .all {
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  top: 10%;
  right: -1%;
  background-color: rgb(255, 0, 0);
}

.bell .all {
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  top: 10%;
  right: -1%;
  background-color: rgb(255, 239, 18);
}
.bell .all .count {
  color: #333;
}
</style>
