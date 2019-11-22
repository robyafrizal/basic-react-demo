import React from 'react';

export const MovieContext = React.createContext();

export default class MovieProvider extends React.Component {
  state = {
    movies: [
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
    ]
  };

  setMovies = (name, year) => {
    this.setState({
      movies: [...this.state.movies, { name, year }]
    });
  };
  render() {
    return (
      <MovieContext.Provider
        value={{ movies: this.state.movies, setMovies: this.setMovies }}>
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}
