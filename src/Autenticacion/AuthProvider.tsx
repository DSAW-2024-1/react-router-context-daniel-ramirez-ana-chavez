import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: null,
  setIsAuthenticated: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [originalAuthState, setOriginalAuthState] = useState<boolean | null>(
    null
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(() => {
    const isAuthenticatedFromStorage = localStorage.getItem("isAuthenticated");
    return isAuthenticatedFromStorage
      ? JSON.parse(isAuthenticatedFromStorage)
      : null;
  });

  const handleLocalStorageClear = (event: StorageEvent) => {
    if (
      event.key === "isAuthenticated" &&
      event.newValue === null &&
      originalAuthState !== null
    ) {
      setIsAuthenticated(originalAuthState);
    }
  };

  useEffect(() => {
    const isAuthenticatedFromStorage = localStorage.getItem("isAuthenticated");
    if (isAuthenticatedFromStorage) {
      setOriginalAuthState(JSON.parse(isAuthenticatedFromStorage));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", handleLocalStorageClear);
    return () => {
      window.removeEventListener("storage", handleLocalStorageClear);
    };
  }, [originalAuthState]);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
