<script setup>
import AppBar from '../components/AppBar.vue';
import axios from 'axios';
</script>

<template>
    <AppBar />
    <div class="container py-14">
        <div class=" px-14 text-5xl text-gray-400">Blog</div>
    </div>
    <div class="px-14">
        <div v-if="response" class="grid grid-cols-3 gap-5">
            <div v-for="(item, index) in response" :key="index" class="col-span-3 lg:col-span-1" @click="$router.push(`/blog/read?id=${item.id}`)">
                <div class="bg-white shadow-md rounded-lg p-6 hover:bg-green-300">
                    <img :src="`${image}${item.thumbnail}`" class="w-full h-48 object-cover rounded-lg">
                    <div class="text-xl py-3 truncate">{{ item.title }}</div>
                    <div class=" text-gray-500 line-clamp-4">{{ parser(item.content) }}</div>
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