import React, { useState } from "react";
import { handleSignup } from "./authActions";
import { connect } from "react-redux";

/**
 * To dispatch all actions to child Component
 * @param {dispatch} event
 */
const mapDispatchToProps = dispatch => {
  return {
    handleSignup: params => {
      dispatch(handleSignup(params));
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

const SignUpComponent = ({ history, handleSignup }) => {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {}
  });
  let emailRegex = /[^@]+@[^\.]+\..+/;
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
    if (e.target.name == "email" && !emailRegex.test(e.target.value)) {
      state.errors[e.target.name] = "Email is not valid";
    }
    if (
      e.target.name == "confirm password" &&
      e.target.value != state.password
    ) {
      state.errors[e.target.name] = "Confirm password and password must match";
    }
    setState(prevState => ({
      ...prevState,
      errors: state.errors
    }));
  };

  const signUp = e => {
    e.preventDefault();
    if (
      Object.keys(state.errors).length == 0 &&
      state.username &&
      state.email &&
      state.password &&
      state["confirm password"]
    ) {
      handleSignup({ ...state, history });
    } else {
      if (!state.username) {
        state.errors.username = "Username is Required";
      }
      if (!state.password) {
        state.errors.password = "Password is Required";
      }
      if (!state.email) {
        state.errors.email = "Email is Required";
      }
      if (!state["confirm password"]) {
        state.errors["confirm password"] = "Confirm password is Required";
      }
    }
    setState(prevState => ({
      ...prevState,
      errors: state.errors
    }));
    console.log("state", state);
  };

  return (
    <div className="signup-form">
      <form>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="fa fa-user" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              required="required"
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
                <i className="fa fa-paper-plane" />
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              required="required"
              onBlur={e => validateOnBlur(e)}
              onChange={e => handleChange(e)}
            />
          </div>
          {state.errors.email && (
            <div className="error-text">{state.errors.email}</div>
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
              onBlur={e => validateOnBlur(e)}
              onChange={e => handleChange(e)}
            />
          </div>
          {state.errors.password && (
            <div className="error-text">{state.errors.password}</div>
          )}
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock" />
                <i className="fa fa-check" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="confirm password"
              placeholder="Confirm Password"
              required="required"
              onBlur={e => validateOnBlur(e)}
              onChange={e => handleChange(e)}
            />
          </div>
          {state.errors["confirm password"] && (
            <div className="error-text">{state.errors["confirm password"]}</div>
          )}
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={e => signUp(e)}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center naviagation-text">
        Already have an account?{" "}
        <a onClick={() => history.push("/")}>Login here</a>
      </div>
    </div>
  );
};

/**
 * To connect your state and actions to child component
 */
export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
