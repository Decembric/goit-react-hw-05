import MovieListItem from "../MovieListItem/MovieListItem"


const MoviesList = ({ movies }) => {
  return (
    <ul >
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieListItem movie={movie} />
        </li>
      ))}
    </ul>
  )
}

export default MoviesList