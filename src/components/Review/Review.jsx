import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieByIdReview } from 'service/service';

const Review = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function movieByIdReview(movieId) {
      try {
        setIsLoading(true);
        const data = await getMovieByIdReview(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    movieByIdReview(movieId);
  }, [movieId]);

  return (
    <ul>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        reviews.map(review => {
          const { author, content } = review;
          return (
            <li key={author}>
              <p>Autor: {author}</p>
              <p>{content} </p>
            </li>
          );
        })
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
      {error && <h1>{error}</h1>}
    </ul>
  );
};
export default Review;
