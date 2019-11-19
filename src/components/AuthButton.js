import React from 'react';
import { useHistory } from 'react-router-dom';

import { fakeAuth } from './helpers/fakeAuth';

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome {fakeAuth.user}!
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}>
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;
