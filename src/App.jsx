import { useSelector } from 'react-redux'
import { store } from './store/store'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './store/counterSlice'

export default function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const plusOne = () => {
    dispatch(increment())
  }

  const minusOne = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
    </div>
  )
}
