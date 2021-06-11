<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr>
    <TodoList />
    <UserList />
    <hr>
    <div>
      <strong>dummy data</strong>
      <br>
      <a href="https://jsonplaceholder.typicode.com/" target="_blank">https://jsonplaceholder.typicode.com/</a>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import CompletedTodo from '@/components/CompletedTodo'
import UserList from '@/components/UserList'

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  },
  data() {
    return {
      // todoText: '',
    }
  },
  methods: {
  }
}
</script>


<style lang="scss">
</style>
