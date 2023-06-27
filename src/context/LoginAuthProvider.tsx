import { useState, ReactNode, useMemo } from 'react';
import { LoginAuthContext } from './LoginAuthContext';

interface LoginAuthProviderProps {
  children: ReactNode;
}

const LoginAuthProvider = ({ children }: LoginAuthProviderProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const credentials = useMemo(
    () => ({ email, setEmail, password, setPassword }),
    [email, password]
  );

  return <LoginAuthContext.Provider value={credentials}>{children}</LoginAuthContext.Provider>;
};

export default LoginAuthProvider;
