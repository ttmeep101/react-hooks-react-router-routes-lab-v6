import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
    .then(resp => resp.json())
    .then(data => setDirectors(data))}, [setDirectors])
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Director's Page</h1>
        {directors.map((director) => (
          <article>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key = {index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
