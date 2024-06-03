<script setup>
import AppBar from '../components/AppBar.vue';
import AppFooter from "../components/AppFooter.vue";
</script>

<template>
    <AppBar />
    <div class="container py-14">
        <div class=" px-14 text-5xl text-gray-400">Blog</div>
    </div>
    <div class="container px-14">
        <div v-if="response" class="grid grid-cols-4 gap-5">
            <div v-for="(item, index) in response" :key="index" class="col-span-4 sm:col-span-1" @click="$router.push(`/blog/read`)">
                <div class="bg-white shadow-md rounded-lg p-6 hover:bg-green-300">
                    <img src="../assets/logo-appbar.png" class="w-full h-48 object-cover rounded-lg">
                    <div class="text-2xl py-3">{{ item.title }}</div>
                    <div class=" text-gray-500">{{ item.content }}</div>
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
                const response = await get(`${import.meta.env.VITE_BASE_URL}/api/blog?id=${this.$route.query.id}`);
                const data = await response;
                this.response = data.data.data;
                this.parser(this.response.content);
                console.log(this.response);
            } catch (error) {
                console.log(error);
            }
        },
        parser(content) {
            const parser = new DOMParser();
            const html = parser.parseFromString(content, 'text/html');
            this.response.content = html.body.innerHTML;
        }
    },
    mounted() {
        this.getBlog();
    }
}
</script>