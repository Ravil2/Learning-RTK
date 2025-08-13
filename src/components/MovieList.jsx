import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeMovie } from '../movieSlice'

export default function MovieList() {
  const movies = useSelector((state) => state.movies.movies)
  const dispatch = useDispatch()

  const handleDeleteMovie = (id) => {
    dispatch(removeMovie(id))
  }

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => {
        console.log(movie)
        return (
          <p key={movie.id}>
            {movie.name}{' '}
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </p>
        )
      })}
    </div>
  )
}
