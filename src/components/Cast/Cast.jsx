import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieByIdCast } from 'service/service';

export const Cast = () => {
    const { movieId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function movieByIdCast(movieId) {
      try {
        setIsLoading(true);

        const casts = await getMovieByIdCast(movieId);

        setCasts(casts);
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
      {
        casts.map(cast => {
          const { profile_path, name, character, id } = cast;
          return (
            <li key = {id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width=""
              />
              <h4>{name}</h4>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
    // <div>
    //     <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width=''/>
    //     <div>
    //         <h2>{title}</h2>
    //         <p>User score: {vote_average? Math.round(vote_average * 10) : ''}%</p>
    //         <p><b>Overview</b></p>
    //         <p>{overview}</p>
    //         <p><b>Genres</b></p>
    //         <p>{genres? genres.map(genre => genre.name).join(' '): ''}</p>
    //     </div>
    // </div>
  );
  // const { movieId } = useParams();
  // const location = useLocation();

  // const [casts, setCasts] = useState(null);

  // useEffect(() => {
  //     async function movieById(movieId) {
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

  //     movieById(movieId);
  //   }, [movieId]);
};
