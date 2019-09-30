import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import User from './User.jsx';
import { Redirect } from 'react-router-dom';

export class Users extends Component {
  constructor(props) {
      super(props);
      this.state = {
        response: null,
        data: false,
      }
  }
  componentDidMount() {
    fetch('/allusers', {
      method: 'get',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(data => this.setState({ 
      response: data,
      data: true, 
    }, () => {
      console.log(this.state.response)
    }));
  }
  render() {
    if (!this.props.location.state.username) {
      return <Redirect 
      to={{
      pathname: '/',
    }}
      />;
    }
    return (
            <div>
             <NavBar username={this.props.location.state ? this.props.location.state.username : null}/>
             {this.state.data ? 
            <div className="user-container">
      {this.state.response.length > 0 ? this.state.response.map((user, index) => <User user={user} index={index} />) : null}
        </div>
        : null }
            </div>
    )
  }
  }

  const mapStateToProps = (state) => {
    return {
      allUsers: state.allUsers,
      isUsername: state.isUsername,
      curentUsername: state.curentUsername,
    };
  }
  

export default connect(mapStateToProps)(Users)