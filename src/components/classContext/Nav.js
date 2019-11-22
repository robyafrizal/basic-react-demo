import React from 'react';

import { MovieContext } from './MovieContext';

export default function Nav() {
  let { movies } = React.useContext(MovieContext);
  return (
    <div style={{ backgroundColor: 'pink', height: 80 }}>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          listStyleType: 'none',
          height: 'inherit'
        }}>
        <li>Herdanu's Movies Top List</li>
        <li>Total Movies: {movies.length}</li>
      </ul>
    </div>
  );
}
