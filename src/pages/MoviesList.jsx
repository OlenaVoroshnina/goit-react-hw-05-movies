import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import { List, MovieItem } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.length > 0 &&
          movies.map(movie => {
            const { id, title } = movie;
            return (
              <MovieItem
                to={`/movies/${id}`}
                state={{ from: location }}
                key={id}
              >
                {title}
              </MovieItem>
            );
          })}
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
