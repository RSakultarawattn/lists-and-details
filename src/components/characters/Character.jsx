import React from 'react';
import propTypes from 'prop-types';

const Character = ({ name, image }) => (
  <figure>
    <img src={image} />
    <figcaption>{name}</figcaption>
  </figure>
);

Character.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired
};

export default Character;
