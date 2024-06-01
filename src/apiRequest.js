import axios from 'axios';

const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTJlOGQ5ZGQzOWE2MWU2MjMwODU4OWRlYTU5NzAzYiIsInN1YiI6IjY2NTYwMzhkOTkzNjU2ZmRhNzE5ZGI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JL_ajp9mb0tsPaeqCSUgqnl_RpIridol8gBa0o5E9xE'
const IMAGE_URL = 'https://image.tmdb.org/t/p/'

const options = {
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: API_TOKEN
  }
};


export const getMovies = async () => {
  const response = await axios
    .get('https://image.tmdb.org/t', options)
  return response.data
}

