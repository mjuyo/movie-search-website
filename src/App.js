import "./styles.css";
// mvp.css imported but not used, it changes alignment in some
// elements of the heading and the close button of the details.
// import "mvp.css";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Heading from "./components/Heading";
import Details from "./components/Details";
import Footer from "./components/Footer";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "b5e9349738ba7d09126543a3c9d7d257";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [details, setDetails] = useState(null);

  function fetchMovies() {
    const type = searchValue ? "search" : "discover";
    const query = searchValue
      ? `&query=${encodeURIComponent(searchValue)}`
      : "";

    const api = `${API_URL}/${type}/movie?api_key=${API_KEY}${query}`;

    fetch(api)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    fetchMovies();
  }, [searchValue]);

  function handleMovieClick(movie) {
    setDetails(movie);
  }

  function handleClose() {
    setDetails(null);
  }

  return (
    <div className="container">
      <div className="heading">
        <Heading heading="MOVIEFLIX" />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="content">
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
        {details && (
          <div>
            <div className="overlay" onClick={handleClose}></div>
            <Details movie={details} onClose={handleClose} />
          </div>
        )}
      </div>
      <div className="footer">
        <Footer footer="Movieflix, Inc" />
      </div>
    </div>
  );
}

export default App;
