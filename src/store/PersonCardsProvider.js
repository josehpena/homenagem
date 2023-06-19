import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const PersonCardsContext = React.createContext();
const firebaseConfig = {
    apiKey: "AIzaSyB7TmQ8kivJBFpvmSznznfXiGo7ZgB4HLQ",
    authDomain: "homenagem-a91bf.firebaseapp.com",
    projectId: "homenagem-a91bf",
    storageBucket: "homenagem-a91bf.appspot.com",
    messagingSenderId: "124070778691",
    appId: "1:124070778691:web:518efcc1abc7e01665c1f6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PersonCardsProvider = (props) => {
    const [personCards, setPersonCards] = useState([]);

    async function addPersonCard(event) {
        try{
        event.preventDefault();
        let newPersonCard = {
                id: personCards.length + 1,
                name: event.target.name.value,
                biography: event.target.biography.value,
                birthDate: event.target.birthDate.value,
                deathDate: event.target.deathDate.value, 
                photo: event.target.photo.value,
        };
        await addDoc(collection(db, "homenagens"), newPersonCard)
    }catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    return (
        <PersonCardsContext.Provider value={{ personCards: personCards, addPersonCard: addPersonCard}}>
            {props.children}
        </PersonCardsContext.Provider>
    )
}

export default PersonCardsProvider;