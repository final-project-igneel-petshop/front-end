import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import About from "./components/About";
import Shop from "./components/About/shop";
import Page4 from "./components/About/page4";
import Products from "./components/About/Products";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route  path="/" exact component={ProductList} />
          <Route  path="/details" component={Details} />
          <Route  path="/cart" component={Cart} />
          <Route  path="/about" component={About} />
          <Route  path="/shop" component={Shop} />
          <Route  path="/page4" component={Page4} />
          <Route  path="/products" component={Products} />
         
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
