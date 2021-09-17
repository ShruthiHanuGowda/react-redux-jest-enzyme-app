import { combineReducers } from "redux";
import posts from "./posts/reducer";

export default combineReducers({
  posts,
});

//when we set up redux we have to use one reducer else we get an error

// export default (state, action) => {
//   return null;
// };

//reducers are pure functions
//returns new piece of state, no complex functionality
// all it does is take a payload and return it
