<script setup>
import Toolbar from 'primevue/toolbar';
</script>

<template>
    <Toolbar class="bg-white">
        <template #start>
            <div class="flex items-center">
                <img src="../assets/logo-appbar.png" class="h-12" alt="Masjid Darussalam">
            </div>
        </template>
        <template #end>
            <button :class="'font-semibold text-green-700 px-3 text-xl custom-underline ' + ($route.path === '/' ? ' active' : 'hover:text-gray-500')" @click="$router.push('/');">Home</button>
            <button :class="'font-semibold text-green-700 px-4 text-xl ml-2 custom-underline ' + ($route.path === '/profil' ? 'active' : 'hover:text-gray-500')" @click="$router.push('/profil');">Profil</button>
            <button :class="'font-semibold text-green-700 px-6 text-xl  custom-underline ' + ($route.path === '/galeri' ? 'active' : 'hover:text-gray-500')" @click="$router.push('/galeri');">Galeri</button>
            <div class="relative" @mouseover="isOpen = true" @mouseleave="isOpen = false">
                <button class="font-semibold text-green-700 px-4 custom-underline hover:text-gray-500 text-xl">
                    Layanan <i class="pi pi-chevron-down"></i>
                </button>
                <div v-show="isOpen" class="absolute w-32 bg-green-800 border border-gray-300 rounded shadow-md z-50" @mouseover="isOpen = true" @mouseleave="isOpen = false">
                    <button class="block w-full px-3 py-2 text-sm text-center text-white hover:bg-gray-300 hover:text-black" @click="$router.push('/infaq');">Infaq</button>
                    <button class="block w-full px-3 py-2 text-sm text-center text-white hover:bg-gray-300 hover:text-black" @click="$router.push('/zakat');">Zakat</button>
                </div>
            </div>
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
