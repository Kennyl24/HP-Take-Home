import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import LoginPage from './LoginPage.jsx'
import {CommonAction} from '../redux/actions/index.js'
import { Router, Route } from 'react-router-dom';
import ProductListingPage from './ProductListingPage.jsx'
import './IndividualProduct.css';
import products from '../test_data.json'
import NavBar from './NavBar.jsx';

export class IndividualProduct extends Component {
  constructor(props) {
      super(props);
      this.state= {
        product: [],
        dataLoaded: false,
        image: products.data[0].media[0].sizes[0].url,
      }
  }
  componentDidMount() {
    console.log(this.props.productData)
    if(this.props.location.state) {
    this.setState({
      product: this.props.location.state.product,
      dataLoaded: true,
    })} else {
       for (let i = 0; i < this.props.productData.length; i++){
      if((window.location.href.split('/')[window.location.href.split('/').length-2]) ===
      this.props.productData[i].slug){
        this.setState({
          product: this.props.productData[i],
          dataLoaded: true,
        })
      }
     }
    }
  }
  render() {
    return (
      this.state.dataLoaded ? 
            <div>
             <NavBar username={this.props.location.state ? this.props.location.state.username : null}/>
             <div className="product-container">
             <div className="image-container">
             <img className="image"src={this.state.product.media[0].sizes[0].url}/>
             
             </div>
             <div className="description-container">
             <h1>{this.state.product.title}</h1>
             <h2>Price: {this.state.product.price_str}</h2>

             <h2>Description: {this.state.product.description}</h2>
             <h2>Product ID: {this.state.product.product_id}</h2>
             <h2>Category: {this.state.product.category}</h2>
             <h2>{this.state.product.created_at}</h2>
             <h1> Seller</h1>
             <div className="seller-container">
             
             <img className="seller-image" src={this.state.product.seller.media[0].sizes[0].url}/>
             <div className="seller-info">
             <h2>{this.state.product.seller.first_name} {this.state.product.seller.last_name}</h2>
            
             <h2>UserID: {this.state.product.seller.user_id}</h2>

             <h2>Country: {this.state.product.seller.country}</h2>
             </div>
             <div className="seller-info">
             <h2> Email Verified: {this.state.product.seller.email_verified ? 'yes' : 'no'}</h2>
             <h2> Phone Verified:{this.state.product.seller.phone_verified ? 'yes' : 'no'}</h2>
             <h2> Facebook Verified:{this.state.product.seller.facebook_verified ? 'yes' : 'no'}</h2>
             </div>
      </div>
            
        
             </div>
            </div>
            </div> : null 
    )
  }
  }
const mapStateToProps = (state) => ({
  productData: state.productData,
});
const mapDispatchToProps = dispatch => {
  return {
      CommonAction : (data) => dispatch(CommonAction(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProduct)

