import React, { useContext } from 'react';
import PersonCard from '../PersonCard';
import { PersonCardsContext } from '../../store/PersonCardsProvider';
import { UsersContext } from '../UserProvider/UserProvider';

const PersonCards = () => {
  const personCardsCtx = useContext(PersonCardsContext);
  const {authenticated} = useContext(UsersContext);

  if (!personCardsCtx.personCards || personCardsCtx.personCards.length === 0) {
    return <div>Não há cartões de pessoa disponíveis.</div>;
  }

  return (
    <>
    {
        authenticated ? 
        <>
      {personCardsCtx.personCards.map((personCard) => (
        <PersonCard key={personCard.id} personCard={personCard} />
      ))}</>:(
      <p>Usuário não autenticado</p>)
      }
    </>
  );
};

export default PersonCards;