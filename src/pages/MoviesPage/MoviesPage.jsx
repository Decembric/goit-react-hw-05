import { useEffect, useState } from "react"
import { getMovies } from "../../apiRequest"
import MoviesList from "../../components/MoviesList/MoviesList"


const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await getMovies()
        if (results.length === 0) return

        console.log(results)
        setMovies((prevMovies) => [...prevMovies, ...results])
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies()
  }, [])
  return (
    <>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>

  )
}

export default MoviesPage