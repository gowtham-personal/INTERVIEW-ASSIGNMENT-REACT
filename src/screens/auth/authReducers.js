const INITIAL_STATE = {
  isAuthenticated: false,
  accessToken: "",
  errorMessage: undefined
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
export default authReducer;
