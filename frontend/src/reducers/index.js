import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducers";
import storeReducer from "./storeReducers";

const rootReducer = combineReducers({
  productList: productReducer,
  storeList: storeReducer,
  categoryList: categoryReducer,
});

export default rootReducer;
