import React, { useState } from 'react';
import axios from 'axios';
import Moviesearch from './Moviesearch';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}`
      );

      setMovies(response.data.results);
      setError(null);
    } catch (err) {
      setError('Sorry, we could not fetch the requested movie/TV series');
    }
  };

  return (
    <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '100%'
    }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie or TV show"
        />
        <button type="submit">Search</button>
      </form>
      {error ? <div>{error}</div> : <Moviesearch movies={movies} />}
    </div>
  );
};

export default Search;
