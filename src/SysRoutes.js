import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonCards from './components/PersonCards/PersonCards';
import NewPersonCard from './components/NewPersonCard/NewPersonCard';
import Login from './components/Auth/Auth';
import ContactForm from './components/ContactForm/ContactForm';
import FavoritePage from './components/FavoritePage/FavoritePage';


const SysRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<PersonCards personCards={props.personCards} />} />
            <Route path='/novaHomenagem' element={<NewPersonCard addPersonCards={props.addPersonCard}/>} />
            <Route path='/favoritos' element={<FavoritePage/>} />
            <Route path="/faleConosco" element={<ContactForm/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
}

export default SysRoutes;