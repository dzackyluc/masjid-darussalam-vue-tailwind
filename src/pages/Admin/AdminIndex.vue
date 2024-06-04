<template>
  <div id="app">
    <div id="sidebar">
      <div class="sidebar-wrapper active">
        <div class="sidebar-header position-relative">
          <div class="d-flex justify-content-between align-items-center">
            <a  href="/" class="text-white logo">
              <span>MQADM</span>
            </a>
            <div class="sidebar-toggler x">
              <a href="#" class="sidebar-hide d-xl-none d-block"
                ><i class="bi bi-x bi-middle"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="sidebar-menu">
          <ul class="menu">
            <li
              class="sidebar-item"
              :class="{ active: $route.path === '/admin/dashboard' }"
            >
              <router-link :to="'/admin/dashboard'" class="sidebar-link">
                <i class="bi bi-justify"></i>
                <span>Dashboard</span>
              </router-link>
            </li>
            <li
              class="sidebar-item"
              :class="{ active: $route.path === '/admin/zakat' }"
            >
              <router-link :to="'/admin/zakat'" class="sidebar-link">
                <i class="bi bi-person-circle"></i>
                <span>Zakat</span>
              </router-link>
            </li>
            <li
              class="sidebar-item"
              :class="{ active: $route.path === '/admin/infaq' }"
            >
              <router-link :to="'/admin/infaq'" class="sidebar-link">
                <i class="bi bi-cash"></i>
                <span>Infaq</span>
              </router-link>
            </li>
            <li
              class="sidebar-item"
              :class="{ active: $route.path === '/admin/activities' }"
            >
              <router-link :to="'/admin/activities'" class="sidebar-link">
                <i class="bi bi-journal-check"></i>
                <span>Kegiatan</span>
              </router-link>
            </li>

            <li
              class="sidebar-item"
              :class="{ active: $route.path === '/admin/blogs' }"
            >
              <router-link :to="'/admin/blogs'" class="sidebar-link">
                <i class="bi bi-pen-fill"></i>
                <span>Blog</span>
              </router-link>
            </li>


            <li class="sidebar-item">
              <button @click="handleLogout()" class="sidebar-link">
                <i class="bi bi-box-arrow-right"></i><span>Keluar</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>


<script setup>
import { onMounted } from "vue";

import {logout} from "../../router/auth";

const handleLogout = async () => {
  logout();
  window.location.href = "/login";
};

onMounted(() => {
  const script = document.createElement("script");
  script.src = "../../assets/static/js/components/dark.js";
  script.async = true;
  document.body.appendChild(script);
});

</script>

<style scoped>
</style>

<style src="../../assets/compiled/css/app.css"></style>