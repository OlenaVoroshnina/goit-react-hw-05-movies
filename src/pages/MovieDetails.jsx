import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, NavLink, Outlet, Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieById } from '../service/service';
import { Loader } from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { routes } from 'helpers/routes';
import { GoBack, LinkBack } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function movieById(movieId) {
      try {
        setIsLoading(true);
        const details = await getMovieById(movieId);
        setDetails(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      };
    };
    movieById(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <LinkBack to={location.state?.from ?? routes.HOME}>
        <GoBack>Go back</GoBack>{' '}
      </LinkBack>
      {Boolean(details) && <MovieItem movie={details} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="review">Review</NavLink>
          </li>
        </ul>
      </div>
      {error && <h1>{error}</h1>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;

MovieDetails.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  details: PropTypes.array,
};