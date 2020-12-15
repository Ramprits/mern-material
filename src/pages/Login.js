import React from 'react';

import SignIn1 from '../components/sign-in/SignIn1';

export default function Login() {
  return (
    <React.Fragment>
      <SignIn1
        content={{
          header: 'Welcome back',
        }}
      />
    </React.Fragment>
  );
}

