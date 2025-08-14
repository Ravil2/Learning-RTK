import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from './store/counterSlice'
import UserCounter from './components/UserCounter'
import { useState } from 'react'

export default function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  const plusOne = () => {
    dispatch(increment())
  }

  const minusOne = () => {
    dispatch(decrement())
  }

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const plusMany = () => {
    dispatch(incrementByAmount(Number(amount)))
  }

  const minusMany = () => {
    dispatch(decrementByAmount(Number(amount)))
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
      <UserCounter />
      <p>----------------------------------------------</p>
      <input type="number" value={amount} onChange={handleChange} />
      <button onClick={plusMany}>+</button>
      <button onClick={minusMany}>-</button>
    </div>
  )
}
