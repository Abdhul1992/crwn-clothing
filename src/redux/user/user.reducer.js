import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      console.log("im here");
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      console.log("no im here");
      return state;
  }
};
export default userReducer;
