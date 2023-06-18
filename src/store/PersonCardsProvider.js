import React, { useState } from 'react';

export const PersonCardsContext = React.createContext();

const PersonCardsProvider = (props) => {
    const [personCards, setPersonCards] = useState(
        [
            {
                id: 0,
                name: "John",
                biography: "A descoberta do mundo",
                birthDate: Date.now(),
                deathDate: Date.now(), 
                photo: "https://m.media-amazon.com/images/I/61iz3UgVyJL.jpg"
                
            }
        ]
    );

    function addPersonCard(event) {
        event.preventDefault();
        let newPersonCards = [...personCards];
        newPersonCards.push({
                id: personCards.length + 1,
                name: event.target.name.value,
                biography: event.target.biography.value,
                birthDate: event.target.birthDate.value,
                deathDate: event.target.deathDate.value, 
                photo: event.target.photo.value,
        });
        console.log(newPersonCards);
        setPersonCards(newPersonCards);
    }

    return (
        <PersonCardsContext.Provider value={{ personCards: personCards, addPersonCard: addPersonCard}}>
            {props.children}
        </PersonCardsContext.Provider>
    )
}

export default PersonCardsProvider;