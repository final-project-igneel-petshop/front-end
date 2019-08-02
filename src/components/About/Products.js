import React, { Component } from "react";
import CatFood from "../../images/catfood.jpg";
import CatAccessoris from "../../images/cataccessoris.jpg";
import CatVitamin from "../../images/catvitamin.jpg";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center text-primary">Products</h1>
        <div class="card-deck">
        <div className="card" style={{width: "18rem"}}>
          <img src={CatFood} className="card-img-top" alt="..." />
          <div className="card-body" align="center">
            <h5 className="card-title text-center">Cat Food</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
          <img src={CatVitamin} className="card-img-top" alt="..." />
          <div className="card-body" align="center">
            <h5 className="card-title text-center">Cat Vitamin</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary text-center">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
          <img src={CatAccessoris} className="card-img-top" alt="..." />
          <div className="card-body" align="center">
            <h5 className="card-title text-center">Cat Accessoris</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
