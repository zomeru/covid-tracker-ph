import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../configs';
import { StyledNav } from '../styles/componentStyles/NavStyles';

interface INavProps {}

const Nav: React.FC<INavProps> = ({}) => {
  return (
    <StyledNav>
      <nav>
        <div className='logo'>
          <h1>COVID-19 TRACKER PH</h1>
        </div>
        <ul className='nav-links'>
          {navLinks.map(link => {
            const { name, url } = link;

            return (
              <li key={name}>
                <Link className='link' to={url}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </StyledNav>
  );
};

export default Nav;
