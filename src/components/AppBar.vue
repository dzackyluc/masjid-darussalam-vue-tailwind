<script setup>
import Toolbar from 'primevue/toolbar';
</script>
<template>
    <Toolbar class="top-0 z-50 bg-white shadow-sm">
      <template #start>
        <div class="flex items-center">
          <img src="../assets/logo-appbar.png" class="h-12" alt="Masjid Darussalam">
        </div>
      </template>
      <template #end>
        <button :class="'font-light text-xl text-green-700 mr-7 ' + ($route.path === '/' ? ' underline' : 'hover:underline')" @click="router.push('/');">Home</button>
        <!-- <button :class="'font-light text-xl text-green-700 mr-7 px-4 ' + ($route.path === '/profil' ? ' underline' : 'hover:underline')" @click="router.push('/profil');">Profil</button> -->
        <button :class="'font-light text-xl text-green-700 mr-7 ' + ($route.path === '/galeri' ? ' underline' : 'hover:underline')" @click="$router.push('/galeri');">Galeri</button>
        <button :class="'font-light text-xl text-green-700 mr-7 ' + ($route.path === '/blog' ? ' underline' : 'hover:underline')" @click="$router.push('/blog');">Blog</button>
        <div class="relative mr-7" @mouseover="isOpen = true" @mouseleave="isOpen = false">
          <button class="font-light text-green-700 px-4 text-xl hover:underline">
            Layanan <i class="pi pi-chevron-down"></i>
          </button>
          <div v-show="isOpen" class="absolute bg-green-800 border border-gray-300 rounded shadow-md z-50" @mouseover="isOpen = true" @mouseleave="isOpen = false">
            <button class="block w-full px-4 py-2 text-xl text-center text-white hover:bg-gray-300 hover:text-black" @click="$router.push('/infaq');">Infaq</button>
            <button class="block w-full px-4 py-2 text-xl text-center text-white hover:bg-gray-300 hover:text-black" @click="$router.push('/zakat');">Zakat</button>
            <!-- <button class="block w-full px-3 py-2 text-xl text-center text-white hover:bg-gray-300 hover:text-black" @click="$router.push('/reservasi');">Reservasi</button> -->
          </div>
        </div>
        <button class="font-light text-green-700 px-3 py-3 hover:bg-gray-200 2xl:rounded-full" @click="$router.push('/login');">
          <i class="pi pi-user text-2xl"></i>
        </button>
      </template>
    </Toolbar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    }
  };
  </script>
