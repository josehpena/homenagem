import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                <NavLink to="/" activeClassName="active">Homenagens</NavLink>
                <NavLink to="/novaHomenagem" activeClassName="active">Nova Homenagem</NavLink>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
                <NavLink to="/faleConosco" activeClassName="active">Fale Conosco</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;