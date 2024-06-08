import MoviesList from "../../components/MoviesList/MoviesList"

import { useEffect, useState } from "react"
import { getSearchMovie } from "../../apiRequest"
import { useSearchParams } from "react-router-dom"
import SearchForm from "../../components/SearchForm/SearchForm"
import Loader from "../../components/Loader/Loader"
import LoadErrorMessage from "../../components/LoadErrorMessage/LoadErrorMessage"


const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const getQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!getQuery) return;
    async function fetchSearchMovie() {
      try {
          setIsLoading(true);
        setErrorMessage(false);
        const { results } = await getSearchMovie(getQuery);
        if (results.length === 0) {
          setErrorMessage(true);
          setMovies([])
          return
        }
        setMovies(results);
      } catch (error) {
        setErrorMessage(true)
        console.log(error)
      } finally {
        setIsLoading(false)      
      }
    }
    fetchSearchMovie()
  }, [getQuery])

  const onSearchMovie = (searchQuery) => {
    if (searchQuery === "") {
      searchParams.delete("query")
    } else { searchParams.set("query", searchQuery) }
    setSearchParams(searchParams)
  }
  return (
    <>
      <SearchForm onSearchMovie={onSearchMovie} />
      {isLoading && <Loader />}
     {errorMessage && !isLoading && <LoadErrorMessage />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>

  )
}

export default MoviesPage