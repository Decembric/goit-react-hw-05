

import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import MoviesPage from './pages/MoviesPage/MoviesPage'

import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {


  return (
    <div>
      <nav>

        <NavLink to="/page">Movies page</NavLink>
        <NavLink to="/details">Movie details page</NavLink>
      </nav>

      <Routes>

        <Route path='/page' element={<MoviesPage />} />
        <Route path='/details' element={<MovieDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div >
  )
}

export default App
