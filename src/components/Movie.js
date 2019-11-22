import React from 'react';

import MovieChild from './MovieChild';

export default function Movie(props) {
  return (
    <li>
      <MovieChild name={props.name} year={props.year} />
    </li>
  );
}
