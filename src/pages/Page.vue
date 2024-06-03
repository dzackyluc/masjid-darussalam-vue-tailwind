<template>
    <AppBar />
    <div v-if="response" class="container">
        <div class="py-10 text-5xl font-bold text-green-800 text-center">{{ response.title }}</div>
        <img :src="`${image}${response.thumbnail}`" class="px-64" alt="">
        <div class="p-32" v-html="response.content"></div>
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
            image: `${import.meta.env.VITE_BASE_IMG_URL}blog/`,
            response: null
        }
    },
    mounted() {
        this.getBlog();
    },
    methods: {
        async getBlog() {
            try {
                const response = await get(`${import.meta.env.VITE_BASE_URL}/api/blog?id=${this.$route.query.id}`);
                const data = await response;
                this.response = data.data.data[0];
                this.parser(this.response.content);
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>