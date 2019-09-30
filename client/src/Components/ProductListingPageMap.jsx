import React , { Component }  from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import ProductListings from './ProductListings.jsx';
import './ProductPage.css'

class ProductListingPageMap extends Component {
  constructor(props) {
      super(props);     
  }

  render() {
    return (
      <div className="product-container">
        {this.props.productData.length > 0 ? this.props.productData.map((product, index) => <ProductListings product={product} index={index} />) : null}
       </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productData: state.productData,
  };
}

export default connect(mapStateToProps)(ProductListingPageMap)