import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  
  return (
    <article>
        <h2>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </h2>
    </article>
  );
};

export default MovieCard;