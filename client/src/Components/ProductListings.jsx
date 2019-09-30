import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {CommonAction} from '../redux/actions/index.js'
import Button from '@material-ui/core/Button';
import './ProductPage.css'
import { Link, Redirect } from 'react-router-dom';

class ProductListings extends Component {
  constructor(props) {
      super(props);
      this.state = {
        redirect: false,
      }
      this.goToIndividualListing = this.goToIndividualListing.bind(this);
  }
  componentDidMount() {
  }
  goToIndividualListing(){
    this.setState({
      redirect: true,
    })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect 
      to={{
      pathname: `/product/${this.props.product.slug}`,
      state: { product: this.props.product,
               username: this.props.username,
      }
    }}
      />;
    }
    let time = this.props.product.created_at.split('T')[1].split('.')[0].split(':');
    let date = this.props.product.created_at.split('T')[0]
    if(time[0] > 12){
      time[0] = parseInt(time) - 12;
     time =  `${time.join(':')} PM`
    } else {
     time = `${time.join('-')} AM`
    }
    
    return (
        <div onClick={this.goToIndividualListing}className="product-tile">
        <img className="product-image" src={this.props.product.media[0].sizes[0].url}/> 
          <h2>
            {this.props.product.title}
          </h2>
          <h2>
          Price: {this.props.product.currency_symbol}{this.props.product.price}
          </h2>
          <h2>
          Created At: {date} {time}
          </h2>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentProduct: state.currentProduct,
  };
}

const mapDispatchToProps = dispatch => {
return {
  goToIndividualListing : (data) => dispatch(goToIndividualListing(data))
}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListings)