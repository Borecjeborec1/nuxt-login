<template>
  <div>
    <h1>Sign up</h1>
    <input type="text" placeholder="username" v-model="username" /><br />
    <input type="text" placeholder="password" v-model="password" /> <br />
    <input type="text" placeholder="retype password" v-model="sPassword" /><br />
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
      sPassword: '',
      response: ''
    };
  },
  methods: {
    async submit() {
      if (this.password == this.sPassword) {
        let post = await fetch('http://localhost:3001/signup', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        }).then(res => res.json());
        if (post == 'SUCCESS') {
          this.response = 'Succesfully signed up';
        } else {
          this.response = 'Something went wrong';
        }
      }
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
