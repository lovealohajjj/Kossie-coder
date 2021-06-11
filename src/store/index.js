import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'buy a car', checked: false },
      { id: 2, text: 'buy a pants', checked: false },
    ]
  },
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false
      })
      state.todoText = ''

    },
    TOGGLE_TODO(state, {id, checked}) {
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      })
      state.todos[index].checked = checked

    },
    DELELTE_TODO(state, todoId) {
      const index = state.todos.findIndex(todo => {
        return todo.id === todoId
      })
      state.todos.splice(index, 1)
    },
  },
  actions: {
  },
  modules: {
  }
})
