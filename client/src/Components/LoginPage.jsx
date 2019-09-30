import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import './LoginPage.css';
import { CreateUser } from '../redux/actions/index.js'

import Button from '@material-ui/core/Button';
import { Link, Redirect, withRouter } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
      super(props);
    this.state = {
      username: '',
      redirect: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitName=this.submitName.bind(this);

  }
  componentDidMount() {
    console.log(this.props.curentUsername)
  }
  handleChange(e){
    this.setState({
      username: e.target.value
    }
  );
  }
  submitName(e){
    this.props.CreateUser(this.state.username);
    if(this.state.username.length <= 1) {
      window.alert('Your username must be at least 2 characters');
    
    } else {
    fetch('/user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username
      })
    }).then((response) => {
        if(response.ok){
          this.setState({
            redirect: true,
          })
      }
    }, (error) => {
      console.log(error);
    })
  }
}
  render() {
    if (this.state.redirect) {
      return <Redirect 
      to={{
      pathname: '/products',
      state: { username: this.state.username }
    }}
      />;
    }
    return (
        <div className="login-modal">
          <h1>Please log in to enter the site</h1>
          <div className="form-section">
            <h2>Enter your name:</h2>
            <input className="name-input" type="text" onChange={this.handleChange} />
          </div>
          <div className="submit-button-container">
            <Button className="submit-button" onClick={this.submitName}variant="contained">
              Submit
            </Button>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isUsername: state.isUsername,
    curentUsername: state.curentUsername,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    CreateUser: (curentUsername) => dispatch(CreateUser(curentUsername))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));