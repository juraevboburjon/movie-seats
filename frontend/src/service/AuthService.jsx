import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || "";
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
    if (email) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [isLoggedIn, email, role, token]);

  // Исправлено: login принимает и сохраняет токен
  const login = (email, role, token) => {
    setIsLoggedIn(true);
    setEmail(email);
    setRole(role);
    setToken(token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setRole("");
    setToken("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, email, role, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
