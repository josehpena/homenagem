import React, { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import { getDocs } from 'firebase/firestore';

export const PersonCardsContext = React.createContext();

const PersonCardsProvider = (props) => {
  const [personCards, setPersonCards] = useState([]);

  useEffect(() => {
    fetchPersonCards();
  }, []);

  async function addPersonCard(event) {
    event.preventDefault();
    try {
      let newPersonCard = {
        id: personCards.length + 1,
        name: event.target.name.value,
        biography: event.target.biography.value,
        birthDate: event.target.birthDate.value,
        deathDate: event.target.deathDate.value,
        photo: event.target.photo.value,
      };
      await addDoc(collection(db, 'homenagens'), newPersonCard);
      fetchPersonCards(); // Atualiza os cards após adicionar um novo
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  const fetchPersonCards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'homenagens'));
      const personCardsAux = [];
      querySnapshot.forEach((doc) =>{
        const {...data} = doc.data();
        personCardsAux.push({ id: doc.id, ...data });
    });
      setPersonCards(personCardsAux);
      console.log(personCardsAux);
    } catch (error) {
      console.error('Error fetching collection: ', error);
    }
  };

  return (
    <PersonCardsContext.Provider
      value={{ personCards: personCards, addPersonCard: addPersonCard }}
    >
      {props.children}
    </PersonCardsContext.Provider>
  );
};

export default PersonCardsProvider;
