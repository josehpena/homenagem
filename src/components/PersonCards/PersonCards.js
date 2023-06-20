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

  return (
    <div>
      <Search onSearch={handleSearch} />
      {authenticated ? (
        filteredPersonCards.map((personCard) => (
          <PersonCard key={personCard.id} personCard={personCard} />
        ))
      ) : (
        <p>Usuário não autenticado</p>
      )}
    </div>
  );
};

export default PersonCards;