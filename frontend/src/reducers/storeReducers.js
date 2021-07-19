import {
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAIL,
} from "../actions/STOREActions";

const storeReducer = (state = { stores: [] }, action) => {
  switch (action.type) {
    case STORE_LIST_REQUEST:
      return { laoding: true, state };
    case STORE_LIST_SUCCESS:
      return { loading: false, state: action.payload };
    case STORE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default storeReducer;
