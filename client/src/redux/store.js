import { createStore, compose } from 'redux';
import commonReducer from "./reducers/commonReducer.js";
import products from '../test_data.json'

let initialState = {

  isUsername: false,
  curentUsername: '',
  allUsers: [],
  allUserDataLoaded: false,
  productData: products.data,
  currentProduct: [],

};

export default createStore(commonReducer,
    initialState,
);
