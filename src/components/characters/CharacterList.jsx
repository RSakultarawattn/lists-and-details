import React from 'react';
import propTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>

  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  })).isRequired
};
