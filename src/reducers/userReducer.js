import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
};

//to increment like, comment count when we hit.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //REDUX
    // if user is new set its state
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    // else return the data that we have (existing state)
    default:
      return state;
  }
};

export default userReducer;
