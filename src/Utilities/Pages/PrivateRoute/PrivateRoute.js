import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";
import loader from "../../Images/loader.gif";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <img width="250" src={loader} alt="" />
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
