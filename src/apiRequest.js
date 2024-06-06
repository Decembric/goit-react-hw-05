import axios from 'axios';

const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTJlOGQ5ZGQzOWE2MWU2MjMwODU4OWRlYTU5NzAzYiIsInN1YiI6IjY2NTYwMzhkOTkzNjU2ZmRhNzE5ZGI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JL_ajp9mb0tsPaeqCSUgqnl_RpIridol8gBa0o5E9xE'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const options = {
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: API_TOKEN
  }
};


export const getTrendingMovies = async () => {
  const response = await axios
    .get(`/trending/movie/day`, options)
  return response.data
}

export const getSearchMovie = async (query) => {
  const response = await axios.get(`search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
  return response.data
}
export const getMovieById = async (id) => {
  const response = await axios.get(`movie/${id}?language=en-US`, options)
  return response.data
}
export const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits?language=en-US`, options)
  return response.data
}
export const getMovieReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews?language=en-US&page=1`, options)
  return response.data.results
}



