import React, { Component } from "react";
import { Link } from "react-router-dom;";
import logo from "../logo.svg";
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import img from '../../images';
export default class Navbar extends Component {
  render() {
    return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      {/* https://www.iconfinder.com/search/?q=cat&from=navbar */ }

      <Link to="/">
        <img src={img} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav.align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <i className="fas fa-cart-plus" />
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWHite) !important;
    font-size: 1.3rem;
    text-transform:capitalize !important;
}
`;
