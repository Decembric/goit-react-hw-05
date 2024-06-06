import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieById} from "../../apiRequest";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

import Loader from "../../components/Loader/Loader";
import LoadErrorMessage from "../../components/LoadErrorMessage/LoadErrorMessage";


const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieById, setMovieById] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  

  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesById() {
      try {
        setIsLoading(true)
        setErrorMessage(false)
        const movie = await getMovieById(movieId)
        if (!movie) return

        console.log(movie)
        setMovieById(movie)
      } catch (error) {
        setErrorMessage(true)
        console.log(error)
      } finally {setIsLoading(false)}
    }
    fetchMoviesById()
  }, [movieId])

  
  return (
    <>
      {isLoading && <Loader />}
      {movieById && <MovieDetails movieById={movieById}  />}
      {errorMessage && <LoadErrorMessage />}
    </>

  )
}

export default MovieDetailsPage