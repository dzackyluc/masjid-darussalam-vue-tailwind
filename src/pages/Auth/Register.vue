<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post('/api/register', {
          username: this.username,
          password: this.password
        });
        if (response.data.success) {
          alert('Registration successful! Please log in.');
          this.$router.push('/login'); // Redirect to login page after successful registration
        } else {
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
