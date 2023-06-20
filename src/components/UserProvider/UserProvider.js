import React, { useState } from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from './../../store/FirebaseConfig';

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    const authUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('Usuário logado com sucesso', user);
                setAuthenticated(true);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log('Problemas ao logar usuário', error);
                setAuthenticated(false);

            });
    };

    const createUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // User created
            const user = userCredential.user;
            console.log('Usuário criado com sucesso', user);
            setAuthenticated(true);
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log('Problemas ao criar usuário', error);
            setAuthenticated(false);
          });
      };

    return (
        <UsersContext.Provider value={{ authenticated: authenticated, authUser: authUser, createUser: createUser }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;