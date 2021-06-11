<template>
  <div>
    Completed Todo: {{ NumberOfCompletedTodo}}
    {{todos}}
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos
    },
    NumberOfCompletedTodo() {
      return this.todos.filter(todo => todo.checked).length
    }
  }
}
</script>

<style>

</style>