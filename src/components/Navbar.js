import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import inicio from '../inicio.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        {/* https://www.webalys.com/ */}
        <img src={inicio} alt="Inicio" className="navbar-brand"/>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Productos
          </Link>
        </li>
      </ul>
      <Link to="/carrito" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"/>
          </span>
          Carrito
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
