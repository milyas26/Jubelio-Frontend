import axios from "axios";

export const getProductList = (page) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    axios
      .get(`https://elevenia-api.herokuapp.com/api/products?page=${page}`)
      .then((res) => {
        dispatch({ type: "ADD_PRODUCTS", payload: res.data });
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const getProductDetail = (id) => {
  return (dispatch) => {
    dispatch({ type: "SET_DETAIL_PRODUCT", payload: null });
    axios
      .get(`https://elevenia-api.herokuapp.com/api/products/${id}`)
      .then((res) => {
        dispatch({ type: "SET_DETAIL_PRODUCT", payload: res.data });
      });
  };
};
