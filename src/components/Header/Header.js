import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../store/AuthProvider';

import './Header.css';

const Header = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    return (
        <header className="Header">
            <nav>
                <ul>
                {isAuthenticated && (
                <NavLink to="/" activeClassName="active">Homenagens</NavLink>
                )}
                <NavLink to="/novaHomenagem" activeClassName="active">Nova Homenagem</NavLink>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
                <NavLink to="/faleConosco" activeClassName="active">Fale Conosco</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;