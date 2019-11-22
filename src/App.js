import React from 'react';

import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import AddNewMovieForm from './components/AddNewMovieForm';

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
