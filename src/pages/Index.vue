<template>
    <AppBar />
    <div class="container">
        <div class="background-image bg-cover bg-no-repeat h-screen w-screen">
            <div class="flex align-middle px-8 pt-60 text-white font-bold drop-shadow-lg text-balance text-6xl">MASJID DARUSSALAM</div>
            <div class="flex align-middle px-8 text-white font-bold drop-shadow-lg text-balance text-6xl">SUKMAJAYA DEPOK</div>
        </div>
    </div>
</template>

<script setup>
import AppBar from '../components/AppBar.vue';
</script>

<style scoped>
.background-image {
    background-image: url('../assets/header-masjid.png');
}
</style>