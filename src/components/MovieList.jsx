import { useSelector } from 'react-redux'

export default function MovieList() {
  const movies = useSelector((state) => state.movies.movies)
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => {
        return <p key={movie.id}>{movie.name}</p>
      })}
    </div>
  )
}
