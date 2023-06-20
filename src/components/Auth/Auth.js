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
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' id='email' placeholder='Email' />
        <input type='password' id='password' placeholder='Password' />
        <input type='submit' value={createAccountMode ? 'Criar Conta' : 'Login'} />
      </form>
      <button onClick={toggleCreateAccountMode}>
        {createAccountMode ? 'Login' : 'Criar Conta'}
      </button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Auth;