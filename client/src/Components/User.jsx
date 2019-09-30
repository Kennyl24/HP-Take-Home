import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {CommonAction} from '../redux/actions/index.js'
import Button from '@material-ui/core/Button';
import ProductListingPageMap from './ProductListingPageMap.jsx';
import './ProductPage.css'
import NavBar from './NavBar.jsx';
import './Users.css'

class User extends Component {
  constructor(props) {
      super(props);
    
  }
  render() {
    return (
        <div className="user-tile">
          <h2>
            {this.props.user.username ? this.props.user.username : 'no username' }
            </h2>
            <h2>
            {this.props.user.createdAt}
            </h2>
        </div>
    )
  }
}

export default User;