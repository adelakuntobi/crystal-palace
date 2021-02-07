import { REGISTER_FAIL, REGISTER_SUCCESS } from "../types";


// Setting initialStates
const initalState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: true,
  user: null
}



// Reducers
export default function Authecation (state = initalState, action) {
  const { type, payload } = action

  switch (type) {
    case REGISTER_SUCCESS:
      // Set token tolocal storage
      localStorage.setItem("token",payload.action)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      };
      case REGISTER_FAIL:
        // remove token from local storage
        localStorage.removeItem("token")
        return {
          ...state,
          token: null,
          isAuthenticated: false                                                                                                                                                                                                                                                                                                                                               ,
          isLoading: false,
        };
  
    default:
      return initalState
  }
}