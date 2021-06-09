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
    },
    TOGGLE_TODO(state, {id, checked}) {
      console.log(id, checked)
      const index = state.todos.findIndex(todo => {
        return todo.id === id;
      })
      state.todos[index].checked = checked
    },
    DELETE_TODO(state, todoId) {
      // case 01
      const index = state.todos.findIndex(todo => {
        return todo.id === todoId
      })
      state.todos.splice(index, 1)

      // case 02
      // state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
  actions: { // 보통 비동기 작업을 하고 state data를 변경할 때
    addTodo({ commit }, value) {
      console.log(value)
      setTimeout(() => {
        commit('ADD_TODO', value)
      }, 1000);
    },
    toggleTodo({ commit }, payload) {
      setTimeout(() => {
        commit('TOGGLE_TODO', payload)
      }, 1000)
    },
    deleteTodo({ commit }, todoId) {
      setTimeout(() => {
        commit('DELETE_TODO', todoId)
      }, 1000)
    }
  },
  modules: {
  }
})
