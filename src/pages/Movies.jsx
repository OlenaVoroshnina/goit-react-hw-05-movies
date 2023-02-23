import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import { searchMovie } from 'service/service';
import { MoviesList } from './MoviesList';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) return;
    async function movieByQuery() {
      setIsLoading(true);
      try {
        const movies = await searchMovie(movieName);
        setMovies(movies.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    movieByQuery();
  }, [movieName]);

  const handleSearchbarSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
    setError(null);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Searchbar onSubmit={handleSearchbarSubmit} />
      {movies && <MoviesList movies={movies} />}
      {error && <h1>{error}</h1>}
    </>
  );
};
export default Movies;

Movies.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  movies: PropTypes.array,
};
