import React from 'react';

export const MovieContext = React.createContext();

export function MovieProvider(props) {
  const [movies, setMovies] = React.useState([
    {
      name: 'Back To The Future',
      year: 2000
    },
    {
      name: 'Back To Back',
      year: 2001
    },
    {
      name: 'Joker',
      year: 2019
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}
