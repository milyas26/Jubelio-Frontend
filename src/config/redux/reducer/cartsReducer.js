const initialState = {
  carts: [],
};

const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const index = state.carts.findIndex(
        (el) => el.prdNo === action.payload.prdNo
      );
      if (index === -1) {
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      } else {
        return {
          ...state,
          carts: state.carts.map((item, i) =>
            index === i
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
    case "DELETE_CART":
      const newState = state.carts.map((item, i) => {
        if (item.prdNo === action.payload.prdNo) {
          state.carts.splice(i, 1);
        }
      });
      return {
        ...state,
        carts: [...state.carts],
      };
    case "PLUS_QUANTITY":
      return {
        ...state,
        carts: state.carts.map((item, i) =>
          item.prdNo === action.payload.prdNo
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "MINUS_QUANTITY":
      return {
        ...state,
        carts: state.carts.map((item, i) =>
          item.prdNo === action.payload.prdNo
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartsReducer;
