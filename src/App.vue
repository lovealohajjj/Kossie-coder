<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input
      v-model="todoText"
      type="text"
      class="w-100 p-2"
      placeholder="Type todo"
      @keyup.enter="addTodo"
    />
    <hr>
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
    {{todos}}
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  components: {
    Todo
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: 'buy a car', checked: false },
        { id: 2, text: 'buy a pants', checked: false },
      ]
    }
  },
  methods: {
    addTodo(e) {
      console.log(e.target.value)
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      })
      this.todoText = ''
    },
    toggleCheckbox({id, checked}) {
      console.log(id, checked)
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      })
      this.todos[index].checked = checked
    },
    deleteTodo(id) {
      // case 01
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id
      // })
      // this.todos.splice(index, 1)

      // case 02
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>


<style lang="scss">
</style>
