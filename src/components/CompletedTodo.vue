<template>
  <div>
    Completed Todo: {{ NumberOfCompletedTodo}}
  </div>
</template>

<script>
export default {
  computed: {
    NumberOfCompletedTodo() {
      return this.$store.getters['todo/NumberOfCompletedTodo']
    }
  }
}
</script>

<style>

</style>