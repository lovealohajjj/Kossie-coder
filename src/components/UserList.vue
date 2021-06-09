<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      // console.log(res)
      this.users = res.data
    })
    const a = 1;
    console.log(a)
  }
}
</script>
