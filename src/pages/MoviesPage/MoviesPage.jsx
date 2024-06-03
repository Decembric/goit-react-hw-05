import MoviesList from "../../components/MoviesList/MoviesList"

import { useEffect, useState } from "react"
import { getSearchMovie } from "../../apiRequest"


const MoviesPage = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (query === '') return;
    async function fetchSearchMovie() {
      try {
        const { results } = await getSearchMovie(query)
        if (results.length === 0) return

        console.log(results)
        setMovies(results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSearchMovie()
  }, [query])

  const onSearchMovie = (event) => {
    event.preventDefault()
    setQuery(event.target.elements.search.value)
    console.log(query)
  }
  return (
    <>
      <form onSubmit={onSearchMovie}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>

  )
}

export default MoviesPage