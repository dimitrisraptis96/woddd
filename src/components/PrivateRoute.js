import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, signOut, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        <Component user={user} {...props} signOut={signOut} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
