import React from 'react';
import { Route, Redirect } from "react-router-dom";
import './PrivateRoute.css';
import { useLoginState } from '../../store/index';

const PrivateRoute = ({ component: Component, auth, children, ...rest }) => {
  const loginState = useLoginState();
  const { loginToken } = loginState;

  return (
    <Route
      {...rest}
      render={props =>
        loginToken ? (
          <Component auth={auth} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {};

PrivateRoute.defaultProps = {};

export default PrivateRoute;
