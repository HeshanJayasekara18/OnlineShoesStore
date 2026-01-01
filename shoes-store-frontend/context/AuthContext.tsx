'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    // Mock login logic
    console.log('Logging in with:', email);
    const mockUser = { email, name: email.split('@')[0] };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('aether_user', JSON.stringify(mockUser));
  }, []);

  const register = useCallback(async (userData: any) => {
    // Mock registration logic
    console.log('Registering user:', userData);
    const newUser = { email: userData.email, name: userData.name || userData.email.split('@')[0] };
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('aether_user', JSON.stringify(newUser));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('aether_user');
  }, []);

  // Check for persisted user on mount
  React.useEffect(() => {
    const persistedUser = localStorage.getItem('aether_user');
    if (persistedUser) {
      setUser(JSON.parse(persistedUser));
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
