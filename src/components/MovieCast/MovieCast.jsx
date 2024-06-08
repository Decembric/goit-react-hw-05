import { useEffect, useState } from "react"
import { getMovieCast } from "../../apiRequest"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import LoadErrorMessage from "../LoadErrorMessage/LoadErrorMessage"
import css from "./MovieCast.module.css"


const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

const MovieCast = () => {
  const { movieId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [movieCast, setMovieCast] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesById() {
      try {
        setIsLoading(true)
        setErrorMessage(false)
        const movie = await getMovieCast(movieId)
        if (!movie) return
    if (movie.cast && Array.isArray(movie.cast)) {
          setMovieCast(movie.cast);
        } else {
          console.log("No valid movie cast data found.");
        }
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
    
      <ul className={css.castList}>
        {movieCast!==null && movieCast.length > 0 ?  (movieCast.map((cast) => (
            <li key={cast.id} className={css.castItem}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>{`Character: ${cast.character}`}</p>
            </li>
        ))) : (
          <p>We don&apos;t have any casts for this movie.</p>
        )}
      </ul>
       {errorMessage && <LoadErrorMessage/>}
    </>
  )
}

export default MovieCast