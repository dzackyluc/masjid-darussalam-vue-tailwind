<script setup>
import AppBar from '../components/AppBar.vue';
import AppFooter from "../components/AppFooter.vue";
import axios from 'axios';
</script>

<template>
    <AppBar />
    <div class="container py-14">
        <div class=" px-14 text-5xl text-gray-400">Blog</div>
    </div>
    <div v-if="response" class="px-14">
        <div class="grid grid-cols-3 gap-5 ">
            <div v-for="(item, index) in response" :key="index" class="col-span-3 lg:col-span-1" @click="$router.push(`/blog/read?id=${item.id}`)">
                <div class="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                    <img :src="`${image}${item.thumbnail}`" class="w-full h-48 object-cover rounded-lg">
                    <div class="text-xl py-3 truncate">{{ item.title }}</div>
                    <div class=" text-gray-500 line-clamp-6">{{ parser(item.content) }}</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="px-14">
        <div class="grid grid-cols-3 gap-5 ">
            <div v-for="n in 6" :key="n" class="col-span-3 lg:col-span-1">
                <div class="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                    <div class="w-full animate-pulse bg-gray-300 h-48 object-cover"></div>
                    <div class="bg-gray-300 h-6 animate-pulse rounded-full w-full my-3 truncate"></div>
                    <div class=" bg-gray-300 h-40 animate-pulse rounded-xl"></div>
                </div>
            </div>
        </div>
    </div>
    <AppFooter />
</template>

<script>

export default {
    data() {
        return {
            image: `${import.meta.env.VITE_BASE_IMG_URL}blog/`,
            response: null
        }
    },
    methods: {
        async getBlog() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blog`);
                const data = response;
                this.response = data.data.data.data;
                console.log(this.response);
            } catch (error) {
                console.log(error);
            }
        },
        parser(content) {
            const parser = new DOMParser();
            const html = parser.parseFromString(content, 'text/html');
            return html.body.innerText;
        }
    },
    mounted() {
        this.getBlog();
    }
}
</script>