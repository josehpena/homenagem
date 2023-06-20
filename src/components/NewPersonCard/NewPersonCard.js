import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PersonCardsContext } from '../../store/PersonCardsProvider';
import './NewPersonCard.css';

const NewPersonCard = () => {
  const PersonCardsCtx = useContext(PersonCardsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    PersonCardsCtx.addPersonCard(data);
  };

  return (
    <div className="NewPersonCardContainer">
      <form className="NewPersonCardForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Nome da pessoa</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome da pessoa"
            {...register('name', { required: true, maxLength: 100 })}
          />
          {errors.name && <span className="error-message">Este campo é obrigatório.</span>}
        </div>
        <div className="form-group">
          <label htmlFor="biography">Biografia</label>
          <input
            type="text"
            id="biography"
            name="biography"
            placeholder="Biografia"
            {...register('biography', { required: true, maxLength: 1000 })}
          />
          {errors.biography && <span className="error-message">Este campo é obrigatório.</span>}
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Data de nascimento</label>
          <input
            type="text"
            id="birthDate"
            name="birthDate"
            placeholder="Data de nascimento"
            {...register('birthDate')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deathDate">Data da morte</label>
          <input
            type="text"
            id="deathDate"
            name="deathDate"
            placeholder="Data da morte"
            {...register('deathDate')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Imagem da pessoa</label>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="Imagem da pessoa"
            {...register('photo')}
          />
        </div>
        <button type="submit" className="submit-button">
          Adicionar nova Homenagem
        </button>
      </form>
    </div>
  );
};

export default NewPersonCard;
