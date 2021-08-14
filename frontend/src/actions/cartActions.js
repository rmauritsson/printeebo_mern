import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./types";

export const addToCart =
    (id, qty, chart, size, color, style) => async (dispatch, getState) => {
        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.image,
                description: data.description,
                price: data.price,
                qty,
                chart,
                size,
                color,
                style
            },
        });

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    };

export const removeFromCart = () => async (dispatch) => {

}

