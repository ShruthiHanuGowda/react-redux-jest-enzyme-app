//made this seperate we can share this test with different components to test right

//To check prop types
import checkPropTypes from "check-prop-types";

//To test store
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./../../src/reducers";
import { middlewares } from "./../../src/createStore";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

//utility function which we use for integration test
export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer);
};
