import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import cartsReducer from "./cartsReducer";

const reducer = combineReducers({
  mainReducer,
  cartsReducer,
});

export default reducer;
