import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, Persistor } from "redux-persist";

const persistedReducer = persistReducer(
  {
    key: "root",
    whitelist: ["cartsReducer"],
    storage,
  },
  reducer
);

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
