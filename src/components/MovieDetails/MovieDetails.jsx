import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import css from "./MovieDetails.module.css"
import { Suspense, useRef } from "react"
import Loader from "../Loader/Loader"

const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'



const MovieDetails = ({ movieById }) => {
  const location = useLocation()
  const backLinkRef = useRef(location.state ?? "/")
  const movieGenres = movieById.genres.map(genre => genre.name).join(', ')
  return (
    <div className={css.container}>
      <p><b><Link to={backLinkRef.current}>⬅️GO BACK</Link></b></p>
      <div>
        <h1 className={css.movieTitle}>{movieById.title}
        </h1>
        <div className={css.movieContainer}>
          <img className={css.movieImg} src={
            movieById.poster_path ?
              (`https://image.tmdb.org/t/p/w500/${movieById.poster_path}`)
              : defaultImg
          }
            width={100}
            alt="poster"
          />
          <ul className={css.movieDetails}>
            <li>
              <p>User score:{(movieById.vote_average) * 10} %</p>
            
            </li>
            <li>
              <p>Overview</p>
              <p>{movieById.overview}</p>
            </li>
            <li>
              <p>Genres</p>
          <p>{movieGenres}</p>
            </li>
          </ul>
          </div>
          
      <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">MovieCast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">MovieReviews</NavLink>
          </li>
        </ul><Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense> 
      </div>
    </div>
  )
}

export default MovieDetails