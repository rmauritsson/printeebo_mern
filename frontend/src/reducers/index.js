import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import categoryReducer from "./categoryReducer";
import { productReducer, productDetailsReducer } from "./productReducers";
import { storeReducer, storeDetailsReducer } from "./storeReducers";

const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  storeList: storeReducer,
  storeDetails: storeDetailsReducer,
  categoryList: categoryReducer,
  cart: cartReducer,
});

export default rootReducer;
