import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'service/service';
import PropTypes from 'prop-types';

import { Loader } from 'components/Loader/Loader';
import { MoviesList } from './MoviesList';
import { Title } from 'components/Header/Header.styled';

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
      <Title>Trending today</Title>
      {movies && <MoviesList movies={movies} />}
      {error && <h1>{error}</h1>}
    </>
  );
};

export default Home;

Home.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  movies: PropTypes.array,
};