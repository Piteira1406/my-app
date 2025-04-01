// context/UserContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type User = { id: number; name: string; email: string };
type UserContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // lógica real: chamada à API + validação
    setUser({ id: 1, name: 'Miguel', email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
