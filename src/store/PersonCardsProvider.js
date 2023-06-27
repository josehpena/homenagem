import React, { useState, useEffect } from 'react';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import { getDocs } from 'firebase/firestore';
import { useForm } from 'react-hook-form';

export const PersonCardsContext = React.createContext();

const PersonCardsProvider = (props) => {
  const [personCards, setPersonCards] = useState([]);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchPersonCards();
  }, []);

  const addPersonCard = async (data) => {
    try {
      let newPersonCard = {
        id: personCards.length + 1,
        name: data.name,
        biography: data.biography,
        birthDate: data.birthDate,
        deathDate: data.deathDate,
        photo: data.photo,
        isFavorite: false,
      };
      await addDoc(collection(db, 'homenagens'), newPersonCard);
      fetchPersonCards(); // Atualiza os cards após adicionar um novo
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const fetchPersonCards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'homenagens'));
      const personCardsAux = [];
      querySnapshot.forEach((doc) => {
        const { ...data } = doc.data();
        personCardsAux.push({ id: doc.id, ...data });
      });
      setPersonCards(personCardsAux);
      console.log(personCardsAux);
    } catch (error) {
      console.error('Error fetching collection: ', error);
    }
  };

  const toggleFavorite = async (cardId) => {
    let cardToUpdate = null;
  
    const updatedPersonCards = personCards.map((personCard) => {
      if (personCard.id === cardId) {
        cardToUpdate = { ...personCard, isFavorite: !personCard.isFavorite };
        return cardToUpdate;
      }
      return personCard;
    });
  
    setPersonCards(updatedPersonCards);
  
    if (cardToUpdate !== null) {
      try {
        const cardRef = doc(db, 'homenagens', cardId);
        await setDoc(cardRef, { isFavorite: cardToUpdate.isFavorite }, { merge: true });
      } catch (error) {
        console.error('Error updating favorite status: ', error);
      }
    }
  };

  const getFavoriteCards = () => {
    const favoritePersonCards = personCards.filter((card) => card.isFavorite);
    return favoritePersonCards;
  };

  return (
    <PersonCardsContext.Provider
      value={{
        personCards: personCards,
        addPersonCard: addPersonCard,
        toggleFavorite: toggleFavorite,
        getFavoriteCards: getFavoriteCards,
        handleSubmit: handleSubmit,
        errors: errors,
      }}
    >
      {props.children}
    </PersonCardsContext.Provider>
  );
};

export default PersonCardsProvider;
