import { useState } from 'react'
import TodoList from './components/TodoList'
import InputTask from './components/InputTask'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'

export default function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleInput = (task) => {
    if (task) {
      setText(task)
    }
  }
  const addTask = () => {
    if (text.trim()) {
      dispatch(addTodo({ text }))
    }
    setText('')
  }

  return (
    <div className="flex flex-col p-4">
      <InputTask text={text} addTask={addTask} handleInput={handleInput} />
      <TodoList />
    </div>
  )
}
