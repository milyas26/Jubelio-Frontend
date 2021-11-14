const initialState = {
  products: [],
  loading: false,
  detailProduct: null,
  carts: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_DETAIL_PRODUCT":
      return {
        ...state,
        detailProduct: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
