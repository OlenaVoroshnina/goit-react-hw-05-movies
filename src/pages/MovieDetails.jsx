import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, NavLink, Outlet, Link  } from 'react-router-dom';
import { getMovieById } from '../service/service';
import { Loader } from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';

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
      <Link to={location.state?.from}>
        <div>Go back</div>{' '}
      </Link>
      {Boolean(details) && <MovieItem movie={details} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: location }}>
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
