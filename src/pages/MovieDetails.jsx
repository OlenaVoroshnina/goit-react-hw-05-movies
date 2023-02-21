import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { getMovieById,  } from '../service/service';
import { Loader } from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';
// import { Cast } from 'components/Cast/Cast';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  console.log('PostDetailsPage location: ', location);

  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
//   const [casts, setCasts] = useState(null);

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
      }
    }

    movieById(movieId);
  }, [movieId]);

//   useEffect(() => {
//     async function movieByIdCast(movieId) {
//       try {
//         setIsLoading(true);

//         const casts = await getMovieByIdCast(movieId);

//         setCasts(casts);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     movieByIdCast(movieId);
//   }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {Boolean(details) && <MovieItem movie={details} />}
      {error && <h1>{error}</h1>}
      {/* {Boolean(casts) && <Cast casts={casts} />} */}
    </>
  );
};
