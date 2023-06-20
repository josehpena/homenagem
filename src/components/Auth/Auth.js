import React, { useContext } from 'react';
import { UsersContext } from '../UserProvider/UserProvider';

const Auth = () => {

  const UsersCtx = useContext(UsersContext);

  return (
    <form onSubmit={UsersCtx.authUser}>
      <input type='text' id='email' placeholder='Email' />
      <input type='password' id='password' placeholder='Password' />
      <input type='submit' value='Login' />
    </form>
  );
};

export default Auth;