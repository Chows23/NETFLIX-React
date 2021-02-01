import React from "react";
import image from "./../image-not-available.jpg";

const Movie = ({ movie, toggleMovie, marked }) => {
  const moviePoster =
    movie.poster_path === null
      ? image
      : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="movie">
      <img src={moviePoster} alt="Movie poster" />
      <div className="overlay">
        <div className="title">{movie.title}</div>
        <div className="rating">{movie.vote_average}/10</div>
        <div className="plot">{movie.overview}</div>
        <div
          data-toggled={marked}
          className="listToggle"
          onClick={() => toggleMovie(movie.id)}
        >
          <div>
            <i className="far fa-heart"></i>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
