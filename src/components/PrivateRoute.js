// This is a higher order component(HOC) to protect a route if the user is not authenticated!
// It returns a Route Component and checks if the user is authenticated or not. Will redirect the user if not authenticated by Returning a Redirect Component.

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../services/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (<Route {...rest} render={(props) => {
    if (!auth.isAuthenticated()) {
      return <Redirect to={
        {
          pathname: '/',
          state: {
            from: props.location
          }
        }
      } />
    }
    return <Component {...props} />;
  }} />)
}

