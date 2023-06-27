import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UsersContext } from '../UserProvider/UserProvider';

import './Header.css';

const Header = () => {
  const { authenticated } = useContext(UsersContext);

  return (
    <header className="Header">
      <nav>
        <ul>
          {authenticated && (
            <li>
              <NavLink to="/" activeClassName="active">
                Homenagens
              </NavLink>
            </li>
          )}
          {authenticated && (
            <li>
              <NavLink to="/novaHomenagem" activeClassName="active">
                Nova Homenagem
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/faleConosco" activeClassName="active">
              Fale Conosco
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
