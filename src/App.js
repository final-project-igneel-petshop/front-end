import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'


import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import About from "./components/About";
import Shop from "./components/About/shop";
import homePage from "./components/About/homePage";
import Products from "./components/About/Products";
import store from "../src/components/redux/store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route path="/none" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/" component={homePage} />
          <Route path="/products" component={Products} />

          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
      </Provider>
    );
  }
}

export default App;
