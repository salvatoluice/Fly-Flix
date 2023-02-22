import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/card/card.css'

const Moviesearch = ({ movies }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <li key={movie.id}>
                <div style={{
                    width: '100%',
                    border: '1px solid gray',
                    justifyContent: 'center',
                    textAlign: 'left',
                    alignItems: 'center',
                    minWidth: '200px',
                    borderRadius: '7px',
                }}>
                    {movie.title || movie.name} ({movie.release_date && movie.release_date.substring(0, 4)})
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                    <p className="card__description">{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                </div>
            </li>
        </Link>
        ))}
      </ul>
    </div>
  );
};

export default Moviesearch;
