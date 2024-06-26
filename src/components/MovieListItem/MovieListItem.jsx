import { Link, useLocation } from "react-router-dom"
import css from "./MovieListItem.module.css"

const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'



const MovieListItem = ({ movie }) => {
  const location = useLocation()
  return (
    <Link to={`/movies/${movie.id}`} state={location}>
      <div >

        <h1>{movie.title}</h1>
        <img className={css.movieImg } src={
          movie.poster_path ?
            (`https://image.tmdb.org/t/p/w500/${movie.poster_path}`)
            : defaultImg
        }
          width={450}
          alt="poster"
        />

      </div>
    </Link>
  )
}

export default MovieListItem