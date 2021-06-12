<template>
  <div>
    Completed Todo: {{ NumberOfCompletedTodo}}
  </div>
</template>

<script>
export default {
  computed: {
    NumberOfCompletedTodo() {
      return this.$store.getters.NumberOfCompletedTodo
    }
  }
}
</script>

<style>

</style>