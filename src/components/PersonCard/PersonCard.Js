import React from 'react';

const PersonCard = ({ name, photo, birthDate, deathDate, biography }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={photo} alt={name} />
      <p>Data de Nascimento: {birthDate}</p>
      {deathDate && <p>Data de Morte: {deathDate}</p>}
      <p>{biography}</p>
    </div>
  );
};

export default PersonCard;