<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="username" v-model="username" /><br />
    <input type="text" placeholder="password" v-model="password" /> <br />
    {{ response }} <br />
    <button @click="submit">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      response: ''
    };
  },
  methods: {
    async submit() {
      this.response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      }).then(res => res.json());
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
input {
  margin: 0.4em;
}
</style>
