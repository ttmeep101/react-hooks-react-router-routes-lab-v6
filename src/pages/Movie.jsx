import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const {id} = useParams()
  const [movie, setMovie] = useState({})
  
  useEffect(() => {
    fetch('http://localhost:4000/movies')
    .then(resp => resp.json())
    .then(data => {
      setMovie(data[id - 1])
    })}, [setMovie])
  
    

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres && Array.isArray(movie.genres) && movie.genres.map((genre, index) => (
          <span key = {index}>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;
