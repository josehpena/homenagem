import React, { useContext } from 'react';
import PersonCard from '../PersonCard';
import { PersonCardsContext } from '../../store/PersonCardsProvider';
import { UsersContext } from '../UserProvider/UserProvider';
import './PersonCards.css';

const PersonCards = () => {
  const personCardsCtx = useContext(PersonCardsContext);
  const { authenticated } = useContext(UsersContext);

  if (!personCardsCtx.personCards || personCardsCtx.personCards.length === 0) {
    return <div>Não há cartões de pessoa disponíveis.</div>;
  }

  return (
    <div className="PersonCards">
      {authenticated ? (
        personCardsCtx.personCards.map((personCard) => (
          <PersonCard key={personCard.id} personCard={personCard} />
        ))
      ) : (
        <p>Usuário não autenticado</p>
      )}
    </div>
  );
};

export default PersonCards;
