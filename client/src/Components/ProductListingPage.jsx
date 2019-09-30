import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {CommonAction} from '../redux/actions/index.js'
import Button from '@material-ui/core/Button';
import './ProductPage.css'
import NavBar from './NavBar.jsx';
import ProductListings from './ProductListings.jsx';

class ProductListingPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        sortPrice: false,
      }
    this.sortPriceHigh = this.sortPriceHigh.bind(this);
    this.sortPriceLow = this.sortPriceLow.bind(this);
    this.sortTimeLow = this.sortTimeLow.bind(this);
    this.sortNameLow = this.sortNameLow.bind(this);
    this.sortTimeHigh = this.sortTimeHigh.bind(this);
    this.sortNameHigh = this.sortNameHigh.bind(this);
  }
  componentDidMount() {

  }
  sortPriceHigh(){
      this.props.productData.sort((a, b) => {
        this.setState({
          sortPrice: true,
        })
        return b.price - a.price;
    });
  }
  sortPriceLow(){
      this.props.productData.sort((a, b) => {
        this.setState({
          sortPrice: true,
        })

        return a.price - b.price;
      });
  }
  sortNameLow(){
    this.props.productData.sort((a, b) => {
      this.setState({
        sortPrice: true,
      })
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;   
    }
    });
  }
  sortNameHigh(){
    this.props.productData.sort((a, b) => {
      this.setState({
        sortPrice: true,
      })
      if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return -1;
      } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
        return 1;
      } else {
        return 0;   
    }
    });
  }
  sortTimeLow(){
      this.props.productData.sort((a, b) => {
        a = Date.parse(a.created_at);
        b = Date.parse(b.created_at);
        this.setState({
          sortPrice: true,
        })
        return a - b;
      });
  }
  sortTimeHigh(){
      this.props.productData.sort((a, b) => {
        a = Date.parse(a.created_at);
        b = Date.parse(b.created_at);
        this.setState({
          sortPrice: true,
        })
        return b - a;
      });
  }

  render() {
    
    return (
        <div >
            <div className="sort-box">
              Sort By <Button onClick={this.sortPriceLow}>Price(low to high)</Button>
              <Button onClick={this.sortPriceHigh}>Price(high to low)</Button>
              <Button onClick={this.sortTimeLow}>Time(Earliest)</Button>
              <Button onClick={this.sortTimeHigh}>Time(Latest)</Button>
              <Button onClick={this.sortNameLow}>Name(A-Z)</Button>
              <Button onClick={this.sortNameHigh}>Name(Z-A)</Button>
            </div>
            <div className="product-container">
            {this.props.sortPrice ? null : 
        this.props.productData.length > 0 ? this.props.productData.map((product, index) => <ProductListings 
        username={this.props.username}
        product={product} index={index} />) : null
        }
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productData: state.productData,
  };
}

const mapDispatchToProps = dispatch => {
return {
    CommonAction : (data) => dispatch(CommonAction(data))
}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage)