export const MovieItem = ({ movie }) => {
  const { title, poster_path, overview, genres, vote_average } = movie;
  return (
    <div>
      <div>
        {Boolean(poster_path) && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width=""
          />
        )}
        <div>
          <h2>{title}</h2>
          <p>
            User score: {vote_average ? Math.round(vote_average * 10) : ''}%
          </p>
          <p>
            <b>Overview</b>
          </p>
          <p>{overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>{genres ? genres.map(genre => genre.name).join(', ') : ''}</p>
        </div>
      </div>
    </div>
  );
};
