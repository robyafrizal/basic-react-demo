import React from 'react';

import Movie from './Movie';
import { MovieContext } from './MovieContext';

export default function MovieList() {
  let { movies } = React.useContext(MovieContext);

  return (
    <div>
      <ul>
        {movies.map((movie, index) => (
          <Movie name={movie.name} year={movie.year} key={index} />
        ))}
      </ul>
    </div>
  );
}
