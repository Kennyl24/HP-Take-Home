import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import LoginPage from './LoginPage.jsx'
import { Router, Route } from 'react-router-dom';
import ProductListingPage from './ProductListingPage.jsx'
import NavBar from './NavBar.jsx'

export class NewApp extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
            <div>
              <NavBar username={this.props.location.state ? this.props.location.state.username : null}/>
              <ProductListingPage username={this.props.location.state ? this.props.location.state.username : null}/>
            </div>
    )
  }
  }

export default NewApp;