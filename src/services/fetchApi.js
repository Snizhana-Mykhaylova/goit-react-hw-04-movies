import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'b3eca1c919732b8163c247708ee195fb',
};

const fetchTrendingMovies = () => {
  return axios.get(`/trending/all/day`).then(response => response.data);
};

const searchMovie = query => {
  return axios
    .get(`/search/movie?query=${query}`)
    .then(response => response.data);
};

const fetchhMovieDetails = movieId => {
  return axios.get(`/movie/${movieId}`).then(response => response.data);
};

const fetchhMovieCast = movieId => {
  return axios
    .get(`/movie/${movieId}/credits`)
    .then(response => response.data)
    .then(data => data.cast);
};

const fetchhMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews`)
    .then(response => response.data)
    .then(data => data.results);
};

export {
  fetchTrendingMovies,
  searchMovie,
  fetchhMovieDetails,
  fetchhMovieCast,
  fetchhMovieReviews,
};
