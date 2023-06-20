import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonCards from './components/PersonCards/PersonCards';
import NewPersonCard from './components/NewPersonCard/NewPersonCard';
import Login from './components/Auth/Auth';


const SysRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<PersonCards personCards={props.personCards} />} />
            <Route path='/novaHomenagem' element={<NewPersonCard addPersonCards={props.addPersonCard}/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
}

export default SysRoutes;