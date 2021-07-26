import axios from "axios";
import {
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAIL,
  STORE_DETAILS_REQUEST,
  STORE_DETAILS_SUCCESS,
  STORE_DETAILS_FAIL,
} from "./types";

export const listStores = () => async (dispatch) => {
  try {
    dispatch({
      type: STORE_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/stores");

    dispatch({
      type: STORE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listStoreDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/stores/${id}`);

    dispatch({
      type: STORE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
