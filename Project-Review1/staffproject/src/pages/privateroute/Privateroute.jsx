import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../privateroute/auth'; // Import your authentication logic

const Privateroute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default Privateroute;
