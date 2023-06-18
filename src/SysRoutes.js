import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonCards from './components/PersonCards/PersonCards';


const SysRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<PersonCards personCards={props.personCards} />} />
        </Routes>
    )
}

export default SysRoutes;