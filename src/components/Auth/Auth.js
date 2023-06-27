import React, { useContext, useState } from 'react';
import { UsersContext } from '../UserProvider/UserProvider';
import './Auth.css';

const Auth = () => {
  const UsersCtx = useContext(UsersContext);
  const [createAccountMode, setCreateAccountMode] = useState(false); // Estado para controlar o modo de criação de conta
  const [successMessage, setSuccessMessage] = useState('');

  const toggleCreateAccountMode = () => {
    setCreateAccountMode((prevMode) => !prevMode); // Alternar o modo de criação de conta
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (createAccountMode) {
      // Modo de criação de conta
      UsersCtx.createUser(event);
      setSuccessMessage('Conta criada com sucesso!');
    } else {
      // Modo de login
      UsersCtx.authUser(event);
      setSuccessMessage('Login realizado com sucesso!');
    }

    event.target.email.value = '';
    event.target.password.value = '';
  };

  return (
    <div className="AuthContainer">
      <div className="AuthForm">
        <form onSubmit={handleSubmit}>
          <h2>{createAccountMode ? 'Criar Conta' : 'Login'}</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="submit" value={createAccountMode ? 'Criar Conta' : 'Login'} />
          </div>
        </form>
        <button className="toggle-button" onClick={toggleCreateAccountMode}>
          {createAccountMode ? 'Login' : 'Criar Conta'}
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Auth;
