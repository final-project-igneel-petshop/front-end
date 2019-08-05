import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ButtonContainer } from "./Button";
<<<<<<< HEAD
import logo from "../images/logo.png";
=======
import imgSvg from "../images/test.svg";
>>>>>>> 265c5b833ba0b08b4d5724c9de1a22b7cdb7f60f

export default class Navbar extends Component {
  render() {
    return (
<<<<<<< HEAD
      <NavWrapper className="navbar navbar-expand-sm navbar-dark">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "100px" }}
          />
        </Link>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li className="nav-link">VET CARE</li>

          <li>
            <Link to="/shop" className="nav-link">
              SHOP
=======
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/search/?q=cat&from=navbar */}

        <Link to="/">
          <img src={imgSvg} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav.align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
>>>>>>> 265c5b833ba0b08b4d5724c9de1a22b7cdb7f60f
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
<<<<<<< HEAD
          <ButtonContainer style={{background:"transparent", color:"white", border:"none", fontSize:"25px", margin:"10px 25px"}}>
            LOGIN
=======
          <ButtonContainer>
            <i className="fas fa-cart-plus" />
            my cart
>>>>>>> 265c5b833ba0b08b4d5724c9de1a22b7cdb7f60f
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
<<<<<<< HEAD
  background: #2f9cb6;
  height: 75px;
  .nav-link {
    color: white;
    font-size: 25px;
    font-family: "Darker Grosteque", sans-serif;
    margin-top: 10px;
=======
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWHite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
>>>>>>> 265c5b833ba0b08b4d5724c9de1a22b7cdb7f60f
  }
`;
