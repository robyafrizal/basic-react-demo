import React from 'react';

export default function MovieChild(props) {
  return (
    <h3>
      {props.name} <small>{props.year}</small>
    </h3>
  );
}
