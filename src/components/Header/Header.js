import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/novaHomenagem" activeClassName="active">Nova Homenagem</NavLink>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;