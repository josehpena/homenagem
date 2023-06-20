import React, { useContext, useState } from 'react';
import { UsersContext } from '../UserProvider/UserProvider';

const Auth = () => {
  const UsersCtx = useContext(UsersContext);
  const [createAccountMode, setCreateAccountMode] = useState(false); // Estado para controlar o modo de criação de conta

  const toggleCreateAccountMode = () => {
    setCreateAccountMode((prevMode) => !prevMode); // Alternar o modo de criação de conta
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (createAccountMode) {
      // Modo de criação de conta
      UsersCtx.createUser(event);
    } else {
      // Modo de login
      UsersCtx.authUser(event);
    }
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
    </div>
  );
};

export default Auth;