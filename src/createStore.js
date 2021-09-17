import { applyMiddleware, createStore } from "redux";
//redux thunk middleware
import ReduxThunk from "redux-thunk";
//by default it takes index file from reducers folder
import RootReducer from "./reducers";

//array of middlewares we can use it for test also
export const middlewares = [ReduxThunk];

//create store with middleware
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

//create the store
export const store = createStoreWithMiddleware(RootReducer);
