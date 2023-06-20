import React from 'react';

const PersonCard = (props) => {
  return (
    <div className="PersonCard">
      <div className="image-wrapper">
        <img src={props.personCard.photo} alt={props.personCard.name} />
      </div>
      <div className="details">
        <h2>{props.personCard.name}</h2>
        <p>{props.personCard.biography}</p>
        <p>Data de Nascimento: {props.personCard.birthDate}</p>
        {props.personCard.deathDate && <p>Data de Morte: {props.personCard.deathDate}</p>}
      </div>
    </div>
  );
};

export default PersonCard;
