
import { Link } from "react-router-dom"
import MovieListItem from "../MovieListItem/MovieListItem"


const MoviesList = ({ movies }) => {
  return (
    <>
      <ul >
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieListItem movie={movie} />
            <Link to={`/movies/${movie.id}`}></Link>
          </li>
        ))}
      </ul>

    </>

  )
}

export default MoviesList