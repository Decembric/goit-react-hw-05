import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieById } from "../../apiRequest";
import MovieDetails from "../../components/MovieDetails/MovieDetails";


const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieById, setMovieById] = useState(null)

  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesById() {
      try {
        const movie = await getMovieById(movieId)
        if (!movie) return

        console.log(movie)
        setMovieById(movie)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMoviesById()
  }, [movieId])
  return (
    <><div>MovieDetailsPage</div>
      {movieById && <MovieDetails movieById={movieById} />}</>

  )
}

export default MovieDetailsPage