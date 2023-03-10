import { useEffect } from "react";
import React from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";
import { useState } from "react";

// 95140e27

const API_URL = "http://www.omdbapi.com?apikey=95140e27";

// const movie1 = {
//   Title: "Italian Spiderman",
//   Year: "2007",
//   imdbID: "tt2705436",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
// };

const App = () => {
  const [movie, setMovies] = useState([]);
  const [searchTerm , setsearchTerm] = useState([]);

  
  
  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title} `);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search)
  };

 
 
  useEffect(() => {
    searchmovies(" ");
  }, []);

 
 
 
  return (
    <div className="app">
      <h1>MovieOcean</h1>

      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchmovies(searchTerm)} />
      </div>

      
      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
