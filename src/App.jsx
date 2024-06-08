

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
import Navigation from './components/Navigation/Navigation'
import Loader from './components/Loader/Loader'

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))

function App() {


  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route >
        <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div >
  )
}

export default App
