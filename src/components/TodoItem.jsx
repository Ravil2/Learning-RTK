import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoCompleted } from '../store/todoSlice'

export default function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch()
  return (
    <>
      <li
        className={`items-center flex justify-between border-2 px-4 py-2 rounded-sm mb-5 ${
          completed ? 'bg-green-400/50' : ''
        }`}
      >
        {text}
        <div className="flex gap-3">
          <button
            className={`cursor-pointer border px-2 py-1 ${
              completed ? 'bg-green-800/50' : 'bg-blue-400/50'
            }`}
            onClick={() => dispatch(toggleTodoCompleted({ id }))}
          >
            completed: {completed ? 'true' : 'false'}
          </button>
          <button
            onClick={() => dispatch(removeTodo({ id }))}
            className="cursor-pointer border px-2 py-1 bg-red-400/50"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  )
}
