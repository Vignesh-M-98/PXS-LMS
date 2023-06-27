import React from 'react';

export const LoginAuthContext = React.createContext({
  email: '',
  setEmail: (email: string) => {},
  password: '',
  setPassword: (password: string) => {},
});
