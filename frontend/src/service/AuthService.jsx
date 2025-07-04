import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem("userId") || "";
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || "";
  });
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
    if (userId) {
      localStorage.setItem("userId", userId);
    } else {
      localStorage.removeItem("userId");
    }
    if (userName) {
      localStorage.setItem("userName", userName);
    } else {
      localStorage.removeItem("userName");
    }
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
  }, [isLoggedIn, email, role, token, userName, userId]);

  // Исправлено: login принимает и сохраняет токен
  const login = (email, role, token, userName, userId) => {
    setIsLoggedIn(true);
    setEmail(email);
    setUserName(userName);
    setRole(role);
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setRole("");
    setUserName("");
    setToken("");
    setUserId("");
    localStorage.removeItem("userId");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        email,
        role,
        token,
        userName,
        userId,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
