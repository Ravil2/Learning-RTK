import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodoCompleted(state, action) {
      const toggleTodo = state.todos.find(
        (todo) => (todo.id = action.payload.id),
      )
      toggleTodo.completed = !toggleTodo.completed
    },
  },
})

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions

export default todoSlice.reducer
