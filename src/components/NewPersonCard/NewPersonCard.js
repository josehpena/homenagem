import React, { useContext } from 'react';
import { PersonCardsContext } from '../../store/PersonCardsProvider';

const NewBook = () => {

    const PersonCardsCtx = useContext(PersonCardsContext);
    
    return (
        <form onSubmit={PersonCardsCtx.addPersonCard}>
            <input type='text' name='name' placeholder='Nome da pessoa' />
            <input type='text' name='biography' placeholder='Biografia' />
            <input type='text' name='birthDate' placeholder='Data de nascimento' />
            <input type='text' name='deathDate' placeholder='Data da morte' />
            <input type='text' name='photo' placeholder='Imagem da pessoa' />
            <input type='submit' value='Adicionar Livro' />
        </form>
    );
}

export default NewBook;