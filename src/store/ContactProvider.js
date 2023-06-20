import React, { useContext } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import { useForm } from 'react-hook-form';

export const ContactContext = React.createContext();

const ContactProvider = (props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleContactFormSubmit = async (data) => {
    try {
      await addDoc(collection(db, 'messages'), data);
      reset(); // Limpar o formulário após o envio
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        handleSubmit: handleSubmit(handleContactFormSubmit),
        register: register,
        errors: errors,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
