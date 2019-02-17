import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import inicio from '../inicio.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        {/* https://www.iconfinder.com/icons/2342209/asset_home_house_residence_icon */}
        <img src={inicio} alt="Inicio" className="navbar-brand"/>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            productos
          </Link>
        </li>
      </ul>
      <Link to="/carrito" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"/>
          </span>
          carrito
        </ButtonContainer>
      </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
