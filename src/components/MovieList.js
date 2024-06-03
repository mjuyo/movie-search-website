import React from "react";

function MovieList(props) {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  function getVoteStyle(vote) {
    if (vote >= 8) {
      return { color: "green" };
    } else if (vote >= 6) {
      return { color: "orange" };
    } else {
      return { color: "red" };
    }
  }

  function handleClick(movie) {
    props.onMovieClick(movie);
  }

  return (
    <div className="movie-container">
      {props.movies.map((movie) => (
        <div
          key={movie.id}
          className="movie"
          onClick={() => handleClick(movie)}
        >
          <img src={`${IMG_API}${movie.poster_path}`} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <span
              className="vote-average"
              style={getVoteStyle(movie.vote_average)}
            >
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
          <div className="movie-overview">
            <h2>Overview: </h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
