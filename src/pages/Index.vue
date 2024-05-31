<template>
    <AppBar />
    <div class="container">
        <div class="background-image bg-cover bg-no-repeat h-screen w-screen">
            <div class="container py-60">
                <div class="flex align-middle px-8 text-white font-bold drop-shadow-lg text-balance text-6xl">MASJID DARUSSALAM</div>
                <div class="flex align-middle px-8 text-white font-bold drop-shadow-lg text-balance text-6xl">SUKMAJAYA DEPOK</div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-6 my-8">
        <div class="max-w-xl overflow-hidden col-span-3 pl-20 pt-14">
            <div class="font-bold text-green-700 text-5xl mb-9">Waktu Sholat</div>
            <img src="../assets/sholat.png" alt="Sholat">
        </div>
        <div class="grid grid-cols-6 col-span-3 gap-4 pr-20 pt-4">
            <div class="col-span-3 pt-9">
                <div class="text-2xl">Depok</div>
            </div>
            <div class="col-span-3 pt-9">
                <div class="text-2xl underline text-end">Pilih Lokasi</div>
            </div>
            <div class="bg-green-700 rounded-lg grid grid-cols-2 col-span-6 shadow-lg p-4">
                <div class="text-white font-bold col-span-1 text-2xl m-3">Matahari Terbit</div>
                <div class="text-white col-span-1 text-end text-xl m-3">05:30 AM</div>
            </div>
            <div class="bg-white rounded-lg grid grid-cols-2 col-span-6 shadow-lg p-4">
                <div class="text-gray-800 font-bold col-span-1 text-2xl m-3">Subuh</div>
                <div class="text-gray-700 col-span-1 text-end text-xl m-3">05:30 AM</div>
            </div>
            <div class="bg-white rounded-lg grid grid-cols-2 col-span-6 shadow-lg p-4">
                <div class="text-gray-800 font-bold col-span-1 text-2xl m-3">Dzuhur</div>
                <div class="text-gray-700 col-span-1 text-end text-xl m-3">12:00 PM</div>
            </div>
            <div class="bg-white rounded-lg grid grid-cols-2 col-span-6 shadow-lg p-4">
                <div class="text-gray-800 font-bold col-span-1 text-2xl m-3">Ashar</div>
                <div class="text-gray-700 col-span-1 text-end text-xl m-3">03:30 PM</div>
            </div>
            <div class="bg-white rounded-lg grid grid-cols-2 col-span-6 shadow-lg p-4">
                <div class="text-gray-800 font-bold col-span-1 text-2xl m-3">Maghrib</div>
                <div class="text-gray-700 col-span-1 text-end text-xl m-3">06:00 PM</div>
            </div>
            <div class="bg-white rounded-lg grid grid-cols-2 col-span-6 shadow-lg p-4">
                <div class="text-gray-800 font-bold col-span-1 text-2xl m-3">Isya</div>
                <div class="text-gray-700 col-span-1 text-end text-xl m-3">07:30 PM</div>
            </div>
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