<template>
    <div>
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
                    <a class="text-2xl">Depok</a>
                </div>
                <div class="col-span-3 pt-9">
                    <div class="text-2xl underline text-end">Pilih Lokasi</div>
                </div>
                <div v-if="jadwal" v-for="(item, key, index) in jadwal" :key="index" class="bg-white rounded-lg grid grid-cols-2 col-span-6 shadow-lg p-4">
                    <div class="text-gray-800 font-bold col-span-1 text-2xl m-3">{{ key }}</div>
                    <div class="text-gray-700 col-span-1 text-end text-xl m-3">{{ item }}</div>
                </div>
                <div v-else v-for="n in 6" :key="n" class="bg-white rounded-lg grid grid-cols-2 col-span-6 shadow-lg p-4">
                    <div class="bg-gray-200 h-5 rounded-full w-28 col-span-1 animate-pulse m-3"></div>
                    <div class="bg-gray-200 h-5 rounded-full w-14 col-span-1 animate-pulse my-3 mr-3 ml-auto"></div>
                </div>
            </div>
        </div>
        <div class="bg-red-100 pb-12">
            <div>
                <div class="text-4xl font-bold pt-12 pb-9 text-green-800 pl-16">Blog</div>
                <div class="grid grid-cols-12 gap-5 pl-16 pb-12">
                    <div v-for="n in 3" :key="n" class="col-span-4">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img v-if="blog" class="w-full" :src="'http://34.34.221.131/getFile/bog/' + blog[0].thumbnail" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div v-if="blog" class="font-bold text-xl mb-2">{{ blog[0].title }}</div>
                                <div v-if="blog" class="text-gray-700 truncate text-sm h-32" v-html="blog[0].content"></div>
                            </div>
                            <div class="px-8 pt-4 pb-5">
                                <button class="bg-green-800 hover:bg-gray-400 hover:text-black text-white rounded-xl py-2 px-28">Baca Disini</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-16 pt-16 w-full">
            <div class="text-4xl font-bold text-green-800">Kegiatan</div>
            <div class="container pt-7 w-full">
                <div class="grid grid-cols-2 grid-rows-3 gap-4">
                    <div class="row-span-3 col-span-1">
                        <button class="flex p-16 rounded-xl bg-red-100">
                            <img class="h-56 w-fit bg-cover flex-none rounded-t overflow-hidden" src="https://img.pikbest.com/origin/09/01/22/25vpIkbEsTb7c.png!sw800" title="Woman holding a mug"></img>
                            <div class="rounded-b p-4 flex flex-col justify-between leading-normal">
                                <div class="mb-5 text-left">
                                    <div class="text-gray-900 font-bold text-3xl">Pengajian</div>
                                    <div class="text-gray-900 text-xl mb-2">21 Mei 2024 | 08:00 WIB</div>
                                    <p class="text-gray-700 text-base">Kegiatan pengajian mingguan yang dilaksanakan secara offline dengan pengajar yang berilmu dan berpengalaman. Pengajian ini terbuka bagi khalayak umum yang ingin mempelejari islam lebih dalam.</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div v-for="n in 3" :key="n" class="row-span-1 col-span-1">
                        <button class="p-8 rounded-xl w-full bg-red-100 flex" @click="router.push('/login');">
                            <div class="w-24 pl-3 h-14 bg-white text-start">
                                <div class="text-bold text-xl">Jun 02</div>
                                <div class="text-base">Sun</div>
                            </div>
                            <div class="w-24 pl-4 h-14">
                                <div class="text-bold text-xl">Pengajian</div>
                                <div class="text-base">08:00 WIB</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-16 pb-28">
            <div class="text-4xl font-bold text-green-800">Layanan</div>
            <div class="container pt-20 flex justify-around">
                <div>
                    <button @click="$router.push('/galeri');" class="border bg-red-100 hover:bg-green-600 border-black w-32 h-32 rounded-full">
                        <i class="pi pi-images text-3xl"></i>
                    </button>
                    <div class="text-center text-xl pt-4">Galeri</div>
                </div>
                <div>
                    <button @click="$router.push('/reservasi')" class="border bg-red-100 hover:bg-green-600 border-black w-32 h-32 flex items-center justify-center rounded-full">
                        <svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M400 0c5 0 9.8 2.4 12.8 6.4c34.7 46.3 78.1 74.9 133.5 111.5l0 0 0 0c5.2 3.4 10.5 7 16 10.6c28.9 19.2 45.7 51.7 45.7 86.1c0 28.6-11.3 54.5-29.8 73.4H221.8c-18.4-19-29.8-44.9-29.8-73.4c0-34.4 16.7-66.9 45.7-86.1c5.4-3.6 10.8-7.1 16-10.6l0 0 0 0C309.1 81.3 352.5 52.7 387.2 6.4c3-4 7.8-6.4 12.8-6.4zM288 512V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H560V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H448V454c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454v58H288zM70.4 5.2c5.7-4.3 13.5-4.3 19.2 0l16 12C139.8 42.9 160 83.2 160 126v2H0v-2C0 83.2 20.2 42.9 54.4 17.2l16-12zM0 160H160V296.6c-19.1 11.1-32 31.7-32 55.4V480c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2H48c-26.5 0-48-21.5-48-48V176 160z"/></svg>
                    </button>
                    <div class="text-center text-xl pt-4">Reservasi</div>
                </div>
                <div>
                    <button @click="$router.push('/infaq')" class="border bg-red-100 hover:bg-green-600 border-black w-32 h-32 rounded-full">
                        <i class="pi pi-money-bill text-3xl"></i>
                    </button>
                    <div class="text-center text-xl pt-4">Infaq</div>
                </div>
                <div>
                    <button @click="$router.push('/zakat')" class="border bg-red-100 hover:bg-green-600 border-black w-32 h-32 flex items-center justify-center rounded-full">
                        <svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                    </button>
                    <div class="text-center text-xl pt-4">Zakat</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { get } from 'jquery';
import AppBar from '../components/AppBar.vue';
</script>

<script>
export default {
    data() {
        return {
            jadwal: null,
            blog: null,
        }
    },

    methods: {
        showSweetAlert() {
            Swal.fire("Sweet Alert is working");
        },

        async getSholat() {
            try {
                const response = await get('http://34.34.221.131/api/prayer-time');
                const result = Object.fromEntries(Object.entries(response.data.timings).slice(1, 7))
                this.jadwal = result;
                console.log(this.jadwal);
            } catch (error) {
                console.log(error);
                console.log("Tidak Dapat Mengambil Data Jadwal Sholat");
            }
        },

        async getBlog() {
            try {
                const response = await get('http://34.34.221.131/api/blog');
                this.blog = response.data.data;
                console.log(this.blog);
            } catch (error) {
                console.log(error);
                console.log("Tidak Dapat Mengambil Data Blog");
            }
        },
    },

    mounted() {
        this.getSholat();
        this.getBlog();
    }
}
</script>

<style scoped>
.background-image {
    background-image: url('../assets/header-masjid.png');
}
</style>