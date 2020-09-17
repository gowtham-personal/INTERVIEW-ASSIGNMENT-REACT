import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginComponent from "../screens/auth/loginComponent";
import SignupComponent from "../screens/auth/signupComponent";
import DashboardComponent from "../screens/dashboard/dashboardComponent";
class RoutesComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <React.Fragment>
                  <LoginComponent {...props} />
                </React.Fragment>
              );
            }}
          />
        </Switch>
        <Switch>
          <Route
            path="/sign-up"
            exact
            render={props => {
              return (
                <React.Fragment>
                  <SignupComponent {...props} />
                </React.Fragment>
              );
            }}
          />
        </Switch>
        <Switch>
          <Route
            path="/dashboard"
            exact
            render={props => {
              return (
                <React.Fragment>
                  <DashboardComponent {...props} />
                </React.Fragment>
              );
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RoutesComponent;
