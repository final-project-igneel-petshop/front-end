import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ButtonContainer } from "./Button";
import logo from "../images/logo.png";

export default class Navbar extends Component {
  render() {
    return (
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
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer style={{background:"transparent", color:"white", border:"none", fontSize:"25px", margin:"10px 25px"}}>
            LOGIN
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: #2f9cb6;
  height: 75px;
  .nav-link {
    color: white;
    font-size: 25px;
    font-family: "Darker Grosteque", sans-serif;
    margin-top: 10px;
  }
`;
