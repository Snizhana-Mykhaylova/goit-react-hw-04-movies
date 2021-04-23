import React from 'react';

import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const AppBar = () => (
  <header>
    <nav>
      <NavLink
        to={routes.home}
        exact
        // className="navLink"
        // activClassName="active"
      >
        Home
      </NavLink>

      <NavLink
        to={routes.moviesPage}
        // className="navLink"
        // activClassName="active"
      >
        Movie
      </NavLink>
    </nav>
  </header>
);

export default AppBar;
