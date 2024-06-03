

import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import MoviesPage from './pages/MoviesPage/MoviesPage'

import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import HomePage from './pages/HomePage/HomePage'

function App() {


  return (
    <div>
      <nav>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/movies">Movies page</NavLink>
        <NavLink to="/details"></NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div >
  )
}

export default App
