import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieByIdCast } from 'service/service';

const Cast = () => {
  const { movieId } = useParams();
  //   const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function movieByIdCast(movieId) {
      try {
        setIsLoading(true);
        const casts = await getMovieByIdCast(movieId);
        setCasts(casts.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    movieByIdCast(movieId);
  }, [movieId]);

  return (
    <ul>
      {isLoading && <Loader />}
      {casts.length > 0 &&
        casts.map(cast => {
          const { profile_path, name, character} = cast;
          return (
            <li key={name}>
              {Boolean(profile_path) && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                  width=""
                />
              )}
              <h4>{name}</h4>
              <p>Character: {character}</p>
            </li>
          );
        })}
      {error && <h1>{error}</h1>}
    </ul>
  );
};
export default Cast;