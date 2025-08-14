import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const handleInput = (task) => {
    if (task) {
      setText(task)
    }
  }
  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text, completed: false }])
    }
    setText('')
  }

  return (
    <>
      <div className="flex flex-col p-4">
        <label className="flex flex-col gap-4 w-full items-center bg-white-900  rounded-2xl p-6 shadow-lg">
          <input
            value={text}
            type="text"
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Добавить задачу..."
            className="w-full p-3 rounded-lg border border-black focus:border-black focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 placeholder:text-black-600/70"
          />
          <button
            onClick={addTodo}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-95 transition-transform duration-150"
          >
            Добавить задачу
          </button>
        </label>
        <ul className="mt-5">
          {todos.map((todo) => (
            <li
              className="flex justify-between border-2 px-4 py-2 rounded-sm"
              key={todo.id}
            >
              {todo.text}{' '}
              <button>completed: {todo.completed ? 'true' : 'false'}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
