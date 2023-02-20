import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/service';
// import { NavLink } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { MoviesList } from './MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const { results } = await getTrendingMovie();
        console.log(results);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, []);

  return (
    <>
        {isLoading && <Loader/>}
        {movies && <MoviesList movies = {movies}/>}
        {error && <h1>{error}</h1>}
    </>
  );
};
