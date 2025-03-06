function MovieCard({
  movie: { title, poster_path, original_language, vote_average, release_date },
}) {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : '/src/assets/no-movie.png'
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="/src/assets/star.svg" alt="star-icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <span>•</span>
          <div className="lang">
            {original_language ? original_language : 'N/A'}
          </div>
          <span>•</span>
          <div className="year">
            {release_date ? release_date.substring(0, 4) : 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
