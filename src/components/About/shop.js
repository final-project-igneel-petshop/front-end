import React, { Component } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import CatImages from "../../images/cat.jpeg";
import DogImages from "../../images/dog.jpeg";

// navbar

// text
const TitleStyle = styled.h1`
  font-family: Darker Grotesque;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 80px;
  text-align: center;`;

export default class Shop extends Component {
  render() {
    return (
      <div style={{margin: "0 25px"}}>
        <TitleStyle>BOW WOW MEOW SHOP</TitleStyle>
        <p>
          image Love the products sold at Groovy, but not Jakarta’s traffic? Or
          you live too far away to visit our stores? From the comfort of your
          home, select the products you’d like to buy, and we will ship them to
          you, to any location in Indonesia. The Groovy online shop only
          includes a small selection of the wide pet supplies assortment
          available at the image Groovy stores. If you are looking for a
          specific product, please call the Groovy stores and we will be happy
          to help.
        </p>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <Link to="./products">
        <img
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
          }}
          src={CatImages}
          alt="cat"
        />
        </Link>
        <img
          style={{ width: "300px", height: "300px", borderRadius: "50%" }}
          src={DogImages}
          alt="dog"
        />
        </div>
      </div>
    );
  }
}
