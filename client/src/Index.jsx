import React from "react";
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./components/App.jsx";
import Users from "./components/Users.jsx";
import NewApp from "./components/NewApp.jsx";
import IndividualProduct from "./components/IndividualProduct.jsx";

import { BrowserRouter, Route } from 'react-router-dom';
console.log('reducer', store.getState());
render(
<Provider store={store}>
<BrowserRouter>
<Route exact path="/" component={App} />
<Route exact path="/products" component={NewApp } />
<Route path="/product/" component={IndividualProduct} />
<Route exact path="/users" component={Users} />

</BrowserRouter>
</Provider>, 

document.getElementById("app"));


