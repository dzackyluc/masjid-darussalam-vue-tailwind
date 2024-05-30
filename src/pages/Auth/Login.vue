<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">email:</label>
        <input type="text border-1" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
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
