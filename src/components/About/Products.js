import React from "react";
import axios from 'axios'
import CatAccessoris from "../../images/cataccessoris.jpg";
import CatVitamin from "../../images/catvitamin.jpg";



export default class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayPicture: "",
      displayProduct: ""
    }
  }

  componentDidMount() {
    this.setState({
      displayPicture:""
    })

    const id = "1"
    axios.get(`http://bowwowmeow-api.herokuapp.com/shop/find/${id}`)
  .then(res => {
    console.log(res.data.product.imagePath)
    this.setState({
      displayPicture: `http://bowwowmeow-api.herokuapp.com/${res.data.product.imagePath}`,
      displayProduct: res.data.title
    })
  })
  .catch(err => {
    console.log(err)
  })

  }


  render() {
    return (
      <div>
      <h1 className="text-center text-primary">Products</h1>
        <div class="card-deck">
        <div className="card" style={{width: "18rem"}}>
          <img src={this.state.displayPicture} className="card-img-top" alt="productPicture" />
          <div className="card-body" align="center">
            <h5 className="card-title text-center">{this.state.displayProduct}</h5>
            
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
