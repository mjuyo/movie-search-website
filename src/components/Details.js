import React from "react";

function Details(props) {
  const IMG_COV = "https://image.tmdb.org/t/p/w1280";

  if (!props.movie) {
    return null;
  }
  return (
    <div key={props.movie.id} className="details-container">
      <button onClick={props.onClose} className="close-btn">
        X
      </button>
      <img
        style={{ width: "100%", borderRadius: "10px" }}
        src={`${IMG_COV}${props.movie.backdrop_path}`}
        alt={props.movie.title}
      />
      <div className="details-info">
        <h1>Title: {props.movie.title}</h1>
        <h2>Original Title: {props.movie.original_title}</h2>
        <p>Release Date: {props.movie.release_date}</p>
        <p>Description: {props.movie.overview}</p>
      </div>
    </div>
  );
}

export default Details;
