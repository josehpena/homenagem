import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PersonCardsContext } from '../../store/PersonCardsProvider';
import './NewPersonCard.css';
import { parse, isValid } from 'date-fns';

const NewPersonCard = () => {
  const PersonCardsCtx = useContext(PersonCardsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateDate = (value) => {
    const parsedDate = parse(value, 'dd-MM-yyyy', new Date());
    return isValid(parsedDate);
  };

  const onSubmit = (data) => {
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
          <label htmlFor="birthDate">Data de nascimento (DD-MM-AAAA)</label>
          <input
            type="text"
            id="birthDate"
            name="birthDate"
            placeholder="Data de nascimento"
            {...register('birthDate', { required: true, validate: validateDate })}
          />
          {errors.birthDate && errors.birthDate.type === 'required' && (
            <span className="error-message">Este campo é obrigatório.</span>
          )}
          {errors.birthDate && errors.birthDate.type === 'validate' && (
            <span className="error-message">Data de nascimento inválida.</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="deathDate">Data da morte (DD-MM-AAAA)</label>
          <input
            type="text"
            id="deathDate"
            name="deathDate"
            placeholder="Data da morte"
            {...register('deathDate', { validate: validateDate })}
          />
          {errors.deathDate && errors.deathDate.type === 'validate' && (
            <span className="error-message">Data de morte inválida.</span>
          )}
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
