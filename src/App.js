import React from 'react';

import { MovieProvider } from './components/contextHooks/MovieContext';
import MovieList from './components/contextHooks/MovieList';
import Nav from './components/contextHooks/Nav';
import AddNewMovieForm from './components/contextHooks/AddNewMovieForm';

function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <AddNewMovieForm />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
