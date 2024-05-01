import React from "react";
import { useContext, useState, useEffect, createContext } from "react";

interface AuthProvider {
  children: React.ReactNode;
}
const AuthContext = createContext({
  isAuthenticated: false,
});
export function AuthProvider({ children }: AuthProvider) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
