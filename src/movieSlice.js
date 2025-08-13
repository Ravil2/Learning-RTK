import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [
    { id: 1, name: 'Interstellar' },
    { id: 2, name: 'Harry Potter' },
  ],
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newId = state.movies.length
        ? state.movies[state.movies.length - 1].id + 1
        : 1
      const newMovie = { id: newId, name: action.payload }
      state.movies.push(newMovie)
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
    },
  },
})

export const { addMovie, removeMovie } = movieSlice.actions
export default movieSlice.reducer
