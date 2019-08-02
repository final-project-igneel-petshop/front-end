import React, { Component } from "react";
import styled from "styled-components";
import CatImages from "../../images/catcontainer.jpg";

const Background = styled.div`
    background-image: url("${CatImages}");
    height: 70vh; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ContactBox = styled.div` border : 1px solid black

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    height: 10vh; 
    padding : 60px;
    text-align: center;
    font-family: arial;`;

export default class page4 extends Component {
  render() {
    return (
      <div>
        <Background />
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-sm-4 col-sm-4">
              <ContactBox> Contacts </ContactBox>
            </div>
            <div class="col-sm-4 col-sm-4">
              <ContactBox>Address</ContactBox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
