import { combineReducers } from "redux";
import productReducer from "./productReducers";
import storeReducer from "./storeReducers";

const rootReducer = combineReducers({
  productList: productReducer,
  storeList: storeReducer,
});

export default rootReducer;
