import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/service';

import { Loader } from 'components/Loader/Loader';
import { MoviesList } from './MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const { results } = await getTrendingMovie();
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
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
      {error && <h1>{error}</h1>}
    </>
  );
};

export default Home;
