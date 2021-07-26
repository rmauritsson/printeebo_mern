import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import { productReducer, productDetailsReducer } from "./productReducers";
import { storeReducer, storeDetailsReducer } from "./storeReducers";

const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  storeList: storeReducer,
  storeDetails: storeDetailsReducer,
  categoryList: categoryReducer,
});

export default rootReducer;
