import React , { Component }  from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import LoginPage from './LoginPage.jsx'
import {CommonAction} from '../redux/actions/index.js'

export class App extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount() {
      this.props.CommonAction(true);
  }
  render() {
    return (
            <div>
              <LoginPage/>
            </div>
    )
  }
  }

const mapStateToProps = (state) => ({
  state: state
});
const mapDispatchToProps = dispatch => {
  return {
      CommonAction : (data) => dispatch(CommonAction(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

