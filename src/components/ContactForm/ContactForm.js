import React, { useContext } from 'react';
import { ContactContext } from './../../store/ContactProvider';
import './ContactForm.css';

const ContactForm = () => {
  const { handleSubmit, register, errors } = useContext(ContactContext);

  return (
    <div className="ContactFormContainer">
      <div className="ContactForm">
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
            />
            {errors.name && <span>O nome é obrigatório.</span>}
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span>O e-mail é obrigatório.</span>}
          </div>
          <div>
            <label htmlFor="comment">Comentário:</label>
            <textarea
              id="comment"
              {...register('comment', { required: true })}
            />
            {errors.comment && <span>O comentário é obrigatório.</span>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
