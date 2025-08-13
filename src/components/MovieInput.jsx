import { useState } from 'react'
import { addMovie } from '../movieSlice'

export default function MovieInput() {
  const [newMovie, setNewMovie] = useState('')

  const handleAddMovie = () => {
    if(newMovie) {
      
    }
  }

  return (
    <div>
      <input
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        type="text"
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  )
}
