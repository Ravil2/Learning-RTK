import { useSelector } from 'react-redux'

export default function UserCounter() {
  const count = useSelector((state) => state.counter.count)

  return <div>{count}</div>
}
