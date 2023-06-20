import React, { useContext } from 'react';
import { PersonCardsContext } from '../../store/PersonCardsProvider';
import './NewPersonCard.css';

const NewPersonCard = () => {
  const PersonCardsCtx = useContext(PersonCardsContext);

  return (
    <div className="NewPersonCardContainer">
      <form className="NewPersonCardForm" onSubmit={PersonCardsCtx.addPersonCard}>
        <div className="form-group">
          <label htmlFor="name">Nome da pessoa</label>
          <input type="text" id="name" name="name" placeholder="Nome da pessoa" />
        </div>
        <div className="form-group">
          <label htmlFor="biography">Biografia</label>
          <input type="text" id="biography" name="biography" placeholder="Biografia" />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Data de nascimento</label>
          <input type="text" id="birthDate" name="birthDate" placeholder="Data de nascimento" />
        </div>
        <div className="form-group">
          <label htmlFor="deathDate">Data da morte</label>
          <input type="text" id="deathDate" name="deathDate" placeholder="Data da morte" />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Imagem da pessoa</label>
          <input type="text" id="photo" name="photo" placeholder="Imagem da pessoa" />
        </div>
        <button type="submit" className="submit-button">
          Adicionar nova Homenagem
        </button>
      </form>
    </div>
  );
};

export default NewPersonCard;