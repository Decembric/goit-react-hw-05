import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../apiRequest"
import MoviesList from "../../components/MoviesList/MoviesList"
import Loader from "../../components/Loader/Loader"
import LoadErrorMessage from "../../components/LoadErrorMessage/LoadErrorMessage"


const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true)
        setErrorMessage(false)
        const { results } = await getTrendingMovies()
        if (results.length === 0) return


        setMovies(results)
      } catch (error) {
        setErrorMessage(true)
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMovies()
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {errorMessage && <LoadErrorMessage />}
    </>

  )
}

export default HomePage