import axios from "axios";
// import { transformMoviesData } from "helpers";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovie = async () => {
    const {data} = await axios.get('/trending/movie/day?api_key=3935c979547c0c6651e8430ea668493f');
    console.log(data);
    // const movies = transformMoviesData(data);

    return data;
};

export const getMovieById = async (movieId) => {
    const {data} = await axios.get(`/movie/${movieId}?api_key=3935c979547c0c6651e8430ea668493f`);
    console.log(data);
    // const movies = transformMoviesData(data);

    return data;
};

export const getMovieByIdCast = async (movieId) => {
    const {data} = await axios.get(`/movie/${movieId}/credits?api_key=3935c979547c0c6651e8430ea668493f`);
    console.log(data);
    // const movies = transformMoviesData(data);

    return data;
};