//all about reducer is having switch statement

import { types } from "./../../actions/types";

//if we dont see any state, it will be default empty array
//below function to check the test
// export default (state = [], action) => {
//   return null;
// };

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};
