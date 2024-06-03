import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../apiRequest"
import MoviesList from "../../components/MoviesList/MoviesList"


const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await getTrendingMovies()
        if (results.length === 0) return


        setMovies(results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies()
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>

  )
}

export default HomePage