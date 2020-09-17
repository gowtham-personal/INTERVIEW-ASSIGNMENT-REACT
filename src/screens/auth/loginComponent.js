import React, { useState } from "react";
import "./loginStyle.css";
import { handleLogin } from "./authActions";
import { connect } from "react-redux";
/**
 * To dispatch all actions to child Component
 * @param {dispatch} event
 */
const mapDispatchToProps = dispatch => {
  return {
    handleLogin: params => {
      dispatch(handleLogin(params));
    }
  };
};

/**
 * To Pass all State data to child Component
 * @param {all available states from Store} state
 */

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer
  };
};

const LoginComponent = ({ history, handleLogin }) => {
  const [state, setState] = useState({ email: "", password: "", errors: {} });

  const handleChange = e => {
    e.persist();
    delete state.errors[e.target.name];
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
      errors: state.errors
    }));
  };

  const validateOnBlur = e => {
    e.persist();
    if (!state[e.target.name]) {
      state.errors[
        e.target.name
      ] = `${e.target.name[0].toUpperCase()}${e.target.name.slice(
        1
      )} is Required`;
    }
    setState(prevState => ({
      ...prevState,
      errors: state.errors
    }));
  };

  const login = e => {
    e.preventDefault();
    console.log("state", state);
    if (state.username && state.password) {
      handleLogin({ ...state, history });
    } else {
      if (!state.username) {
        state.errors.username = "Username is Required";
      }
      if (!state.password) {
        state.errors.password = "Password is Required";
      }
    }
    setState(prevState => ({
      ...prevState,
      errors: state.errors
    }));
  };

  return (
    <div className="signup-form">
      <form>
        <h2>Login</h2>
        <p>Please fill in this form to log in!</p>
        <hr />
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-user" />
              </span>
            </div>
            <input
              type="tesxt"
              className="form-control"
              name="username"
              placeholder="Username"
              required="required"
              maxLength="30"
              onBlur={e => validateOnBlur(e)}
              onChange={e => handleChange(e)}
            />
          </div>
          {state.errors.username && (
            <div className="error-text">{state.errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
              maxLength="25"
              onBlur={e => validateOnBlur(e)}
              onChange={e => handleChange(e)}
            />
          </div>
          {state.errors.password && (
            <div className="error-text">{state.errors.password}</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg" onClick={e => login(e)}>
            Login
          </button>
        </div>
      </form>
      <div className="text-center naviagation-text">
        To create an account?{" "}
        <a onClick={() => history.push("/sign-up")}>Sign up</a>
      </div>
    </div>
  );
};

/**
 * To connect your state and actions to child component
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
