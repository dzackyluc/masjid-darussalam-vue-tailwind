<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-lg">
      <form class="flex flex-col bg-[#F6EFE5] shadow-lg rounded-[10px] px-8 pt-6 pb-8 mb-4" @submit.prevent="handleLogin">
        <div class="header-all">
          <div class="header text-center mb-6">
            <h1 class="text-black font-semibold text-3xl">Assalamualaikum</h1>
            <h3 class="text-[#a9a9a8d3] font-medium text-[13px]">Login untuk melanjutkan</h3>
          </div>
        </div>  
        <div class="mb-4">
          <label class="block text-black text-sm font-medium mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border bg-[#E7DFCA] rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-black text-sm font-medium mb-2" for="password">
            Password
          </label>
          <input v-model="password" class="shadow appearance-none border bg-[#E7DFCA] rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between"> 
          <button class="bg-[#4E6F52] w-full hover:bg-[#3b543e] text-white font-medium py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline shadow-md" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>





<script>
import { login } from "../../router/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      const success = await login(this.email, this.password);
      if (success) {
        this.$router.push("/admin/dashboard"); // Redirect to admin dashboard after login
      } else {
        alert("Login failed. Please check your email and password.");
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
