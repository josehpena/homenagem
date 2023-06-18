import React from 'react';
import Image from './Image/Image';

const PersonCard = ( props ) => {
  return (
    <>
      <Image imageUrl={props.personCard.photo} />
      <h2>{props.personCard.name}</h2>
      <p>{props.personCard.biography}</p>
      <p>Data de Nascimento: {props.personCard.birthDate}</p>
      {props.personCard.deathDate && <p>Data de Morte: {props.personCard.deathDate}</p>}
      
    </>
  );
};

export default PersonCard;