import React from 'react';

import { MovieContext } from './MovieContext';

export default function AddNewMovieForm() {
  let { movies, setMovies } = React.useContext(MovieContext);

  const [movie, setMovie] = React.useState('');
  const [year, setYear] = React.useState(0);

  const handleMovie = event => {
    setMovie(event.target.value);
  };

  const handleYear = event => {
    setYear(event.target.value);
  };

  const addNewMovie = event => {
    event.preventDefault();
    setMovies(movie, year);
  };
  return (
    <div>
      <form onSubmit={addNewMovie}>
        <input type='text' name='movie' onChange={handleMovie} value={movie} />
        <input type='text' name='year' onChange={handleYear} value={year} />
        <button> add movie </button>
      </form>
    </div>
  );
}
