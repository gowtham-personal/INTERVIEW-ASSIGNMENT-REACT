import API_URL_CONSTANTS from "../../constants/apiUrlConstants";
import { getMethod, postMethod } from "../../helper/api";

export const emitEventToReducer = (type, payload) => ({
  type,
  payload
});

export const handleLogin = params => async dispatch => {
  try {
    const loginResponse = await getMethod(
      API_URL_CONSTANTS.LOGIN,
      {
        "Content-Type": "application/json"
      },
      { userName: params.username, password: params.password }
    );
    console.log("loginResponse", loginResponse);
    if (loginResponse) {
      params.history.push("/dashboard");
    }
    dispatch(emitEventToReducer("LOGIN_SUCCESS", loginResponse));
  } catch (error) {
    console.log("error", error);
    dispatch(emitEventToReducer("LOGIN_FAILURE", error.message));
  }
};

export const handleSignup = params => async dispatch => {
  try {
    const signUpResponse = await postMethod(
      API_URL_CONSTANTS.SIGN_UP,
      {
        userName: params.username,
        password: params.password,
        email: params.email
      },
      {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded"
      }
    );
    console.log("signUpResponse", signUpResponse);
    if (signUpResponse.status == "200") {
      params.history.push("/");
      dispatch(emitEventToReducer("SIGN_UP_SUCCESS", signUpResponse));
    } else {
      dispatch(emitEventToReducer("SIGN_UP_FAILURE", signUpResponse.data));
    }
  } catch (error) {
    console.log("error", error);
    dispatch(emitEventToReducer("SIGN_UP_FAILURE", error.message));
  }
};
