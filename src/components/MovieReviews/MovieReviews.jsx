import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "../../apiRequest"
import Loader from "../Loader/Loader"
import LoadErrorMessage from "../LoadErrorMessage/LoadErrorMessage"


const MovieReviews = () => {
  const { movieId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [reviews, setReviews] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    if (!movieId) return;
    async function fetchMoviesById() {
      try {
        setIsLoading(true)
        setErrorMessage(false)
        const movieReviews = await getMovieReviews(movieId)
      
          setReviews(movieReviews);
        
        }
      catch (error) {
        setErrorMessage(true)
        console.log(error)
      } finally {setIsLoading(false)}
    }
    fetchMoviesById()
  }, [movieId])
  return (
     <>
      {isLoading && <Loader />}
   

      <ul>
        {reviews !== null && reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <p>{`Author: ${review.author}`}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie.</p>
        )}
        {errorMessage && <LoadErrorMessage />}
      </ul>
    </>
  )
}

export default MovieReviews