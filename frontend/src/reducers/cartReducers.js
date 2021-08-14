import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/types";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      //Checking if item already exists in the cart
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (x) => x.product === item.product
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existingItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return;

    default:
      return state;
  }
};

export default cartReducer;
