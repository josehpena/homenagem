import React, { useContext, useState } from 'react';
import PersonCard from '../PersonCard/PersonCard';
import { PersonCardsContext } from '../../store/PersonCardsProvider';
import { UsersContext } from '../UserProvider/UserProvider';
import Search from '../Search/Search';
import './PersonCards.css';

const PersonCards = () => {
  const personCardsCtx = useContext(PersonCardsContext);
  const { authenticated } = useContext(UsersContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (!personCardsCtx.personCards || personCardsCtx.personCards.length === 0) {
    return <div>Não há cartões de pessoa disponíveis.</div>;
  }

  // Filtra os dados com base no termo de busca
  const filteredPersonCards = personCardsCtx.personCards.filter((personCard) => {
    return personCard.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const favoriteCards = filteredPersonCards.filter((personCard) => personCard.isFavorite);
  const otherCards = filteredPersonCards.filter((personCard) => !personCard.isFavorite);

  return (
    <div className="CardContainer">
      <Search onSearch={handleSearch} />
      {authenticated ? (
        <>
          {favoriteCards.map((personCard) => (
            <PersonCard key={personCard.id} personCard={personCard} toggleFavorite={personCardsCtx.toggleFavorite} />
          ))}
          {otherCards.map((personCard) => (
            <PersonCard key={personCard.id} personCard={personCard} toggleFavorite={personCardsCtx.toggleFavorite} />
          ))}
        </>
      ) : (
        <p>Usuário não autenticado</p>
      )}
    </div>
  );
};

export default PersonCards;