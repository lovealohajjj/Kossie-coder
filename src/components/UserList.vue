<template>
  <div>
    User List <br>
    <span v-for="user in users" :key="user.id">
      {{ user.name }}, 
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.getUsers()
  },
  computed: {
    ...mapState({
      users: state => state.user.users
    })
  },
  methods: {
    ...mapActions('user', ['getUsers'])
  }
}
</script>
