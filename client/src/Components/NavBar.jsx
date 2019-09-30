import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {CommonAction} from '../redux/actions/index.js'
import Button from '@material-ui/core/Button';
import ProductListingPageMap from './ProductListingPageMap.jsx';
import './ProductPage.css'
import { Redirect } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        showBackButton: false,
      }
      this.goToProductPage = this.goToProductPage.bind(this);
      this.goToUserPage = this.goToUserPage.bind(this);

  }
  componentDidMount() {
    if((window.location.href.split('/').indexOf('product') > -1) ||(window.location.href.split('/').indexOf('users') > -1)) {
      this.setState({
        showBackButton: true,
      })
    }
  }
  goToProductPage (){
    this.setState({
      productPage: true,
    })
  }
  goToUserPage (){
    this.setState({
      userPage: true,
    })
  }
  render() {
    if (this.state.productPage) {
      return <Redirect 
      to={{
      pathname: '/products',
      state: {username: this.props.username}
    }}
      />;
    }
    if (this.state.userPage) {
      return <Redirect 
      to={{
      pathname: '/users',
      state: {username: this.props.username}
    }}
      />;
    }
    return (
          <div className="nav-bar">
          {this.state.showBackButton ? 
          <div className="item">
          <Button variant="contained" onClick={this.goToProductPage}>Go To Main Page</Button>
          </div> : null }
          <div className="nav-bar-items">
          <h2>
            Welcome, {this.props.username} 
            </h2>
          {window.location.href.split('/').indexOf('users') > -1 ? null :
          <Button onClick={this.goToUserPage}className="submit-button" variant="contained">
           See All Users 
          </Button> }
          </div>
            </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    curentUsername: state.curentUsername,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    CreateUser: (curentUsername) => dispatch(CreateUser(curentUsername))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)