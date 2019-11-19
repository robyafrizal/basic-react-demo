import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { fakeAuth } from './helpers/fakeAuth';

function PrivateRoute({ children, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRoute;
