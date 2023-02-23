import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
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
          const { author, content, id } = review;
          return (
            <li key={id}>
              <p><b>Author: {author}</b></p>
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

Review.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
