import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovie = async () => {
  const { data } = await axios.get(
    '/trending/movie/day?api_key=3935c979547c0c6651e8430ea668493f'
  );
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=3935c979547c0c6651e8430ea668493f`
  );
  return data;
};

export const getMovieByIdCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=3935c979547c0c6651e8430ea668493f`
  );
  return data;
};

export const getMovieByIdReview = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=3935c979547c0c6651e8430ea668493f`
  );
  return data;
};

export const searchMovie = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=3935c979547c0c6651e8430ea668493f&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
};
