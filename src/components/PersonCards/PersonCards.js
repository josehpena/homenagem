import React, { useContext } from 'react';
import PersonCard from '../PersonCard';
import { PersonCardsContext } from '../../store/PersonCardsProvider';

const PersonCards = () => {
  const personCardsCtx = useContext(PersonCardsContext);

  if (!personCardsCtx.personCards || personCardsCtx.personCards.length === 0) {
    return <div>Não há cartões de pessoa disponíveis.</div>;
  }

  return (
    <div>
      {personCardsCtx.personCards.map((personCard) => (
        <PersonCard key={personCard.id} personCard={personCard} />
      ))}
    </div>
  );
};

export default PersonCards;